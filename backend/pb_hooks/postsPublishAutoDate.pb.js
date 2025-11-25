/// <reference path="../pb_data/types.d.ts" />

onRecordUpdateRequest((e) => {
  const originalRecord = e.record.original()
  const newRecord = e.record
  
  const isPublished = originalRecord.get("status") === 'published'
  const willPublishNow = newRecord.get("status") === 'published'

  if (!isPublished && willPublishNow) {
    newRecord.set("publishDate", new Date())
  }

  e.next()
}, "posts")