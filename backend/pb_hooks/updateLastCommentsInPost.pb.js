/// <reference path="../pb_data/types.d.ts" />

onRecordAfterCreateSuccess((e) => {
  const postsCollection = $app.findCollectionByNameOrId("posts")

  const postRecord = $app.findRecordById(postsCollection, e.record.get('post'))

  const postLastComments = postRecord.getStringSlice("lastComments")

  const oldLastCommentIndex = postLastComments.length > 1 ? 1 : 0

  postRecord.set("lastComments", [postLastComments[oldLastCommentIndex], e.record.id])

  $app.save(postRecord)

  e.next()
}, "comments_posts")