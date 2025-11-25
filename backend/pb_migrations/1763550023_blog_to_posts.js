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
  const blogPosts = app.findAllRecords("blog_posts")

  const postsColl = app.findCollectionByNameOrId("posts")

  blogPosts.forEach((record) => {
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
      type: 'blog',
      status: 'published',
      images: images,
      tags: []
    })

    app.save(newRecord)
  })
}, (app) => {
  const posts = app.findRecordsByFilter("posts", 'type = "blog"')

  posts.forEach((record) => {
    app.delete(record)
  })
})
