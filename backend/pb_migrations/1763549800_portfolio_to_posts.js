/// <reference path="../pb_data/types.d.ts" />
/**
 * Replaces the PocketBase file storage path (collectionId/recordId)
 * inside <img> src attributes in the given HTML string.
 *
 * Example:
 *   /api/files/OLD_COLLECTION/OLD_RECORD/image.png
 * becomes:
 *   /api/files/NEW_COLLECTION/NEW_RECORD/image.png
 *
 * @param {string} html       - HTML containing <img> tags
 * @param {string} newPath    - New file storage path ("collectionId/recordId")
 * @returns {string}
 */
function replaceFileStoragePath(html, newPath) {
  if (!html) return html;

  // Matches:
  // /api/files/<group1>/<group2>/
  // and captures the prefix and the trailing slash before filename
  const regex = /\/api\/files\/([^/]+\/[^/]+)\//g;

  return html.replace(regex, `/api/files/${newPath}/`);
}

migrate((app) => {
  const cPosts = app.findAllRecords("contractors_posts")

  const postsColl = app.findCollectionByNameOrId("posts")

  cPosts.forEach((record) => {
    const images = (record.get("images") || []).map((filename) => {
      const path = record.baseFilesPath() + '/' + filename
      const fsys = app.newFilesystem()

      const reader = fsys.getReader(path)

      const file = $filesystem.fileFromBytes(toBytes(reader), filename)

      reader.close()
      
      file.name = filename

      return file
    })

    const newRecord = new Record(postsColl, {
      author: record.get("user"),
      title: record.get("title"),
      content: record.get("content"),
      publishDate: record.get("publishDate"),
      type: 'portfolio',
      status: 'published',
      images: images,
      tags: [],
      portfolio: record.id
    })

    app.save(newRecord)
  })

  const posts = app.findRecordsByFilter("posts", 'type = "portfolio"')
  const postServicesColl = app.findCollectionByNameOrId("post_services")

  posts.forEach((record) => {
    // change img hrefs
    const storagePath = record.baseFilesPath()
    
    record.set("content", replaceFileStoragePath(record.get("content"), storagePath))

    app.save(record)

    // create related post_services records
    app.expandRecord(record, ["portfolio"], null)
    const portfolioRecord = record.expandedOne("portfolio")
    
    let services = portfolioRecord.get("contractorServices")
    if (services === null || !services.length) {
      const sRec = app.findFirstRecordByFilter("contractors_services", `user = "${record.get("author")}"`)
      services = [sRec.get("specialtyService")]
    }

    const postServiceRecord = new Record(postServicesColl, {
      post: record.id,
      services
    })
    
    app.save(postServiceRecord)
  })
}, (app) => {
  const portfolio = app.findRecordsByFilter("posts", 'type = "portfolio"')

  portfolio.forEach((record) => {
    app.delete(record)
  })
})
