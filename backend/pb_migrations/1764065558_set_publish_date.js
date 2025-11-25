/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const records = app.findRecordsByFilter('posts', 'status != "draft"')

  records.forEach((record) => {
    const publishDateStr = record.get("publishDate").toString()

    if (publishDateStr === "") {
      console.log('set created date as published: ', record.get("created"))
      record.set("publishDate", record.get("created"))
      app.save(record)
    }
  })
}, (app) => {
  // add down queries...
})
