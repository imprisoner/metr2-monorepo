/// <reference path="../pb_data/types.d.ts" />
// @request.auth.id = contractor && @request.body.published:isset = false && @request.body.publishDate:isset = false
const relatedCollectionsNames = [
  "contractors_services", 
  "contractors_cities", 
  "contractors_blog_posts", 
  "contractors_posts", 
  "contractors_info"
]

migrate((app) => {
  const collections = relatedCollectionsNames.map((name) => app.findCollectionByNameOrId(name))

  // создаём в коллекциях новое поле пользователя

  collections.forEach((coll) => {
    coll.fields.add(new Field({
      "cascadeDelete": false,
      "collectionId": "_pb_users_auth_",
      "hidden": false,
      "maxSelect": 1,
      "minSelect": 0,
      "name": "user",
      "presentable": false,
      "required": true,
      "system": false,
      "type": "relation"
    }))
    app.save(coll)
  })


  const records = collections.map((coll) => {
    const records = app.findAllRecords(coll)
    app.expandRecords(records, ["contractor"])
    return records
  }).flat()

  records.forEach((csRec) => {
    if (!csRec.get("contractor")) return
    const email = csRec.expandedOne("contractor").get("email")

    try {
      const userRecord = app.findFirstRecordByFilter("users", `email = "${email}"`)
      csRec.set("user", userRecord.get("id"))
      app.save(csRec)
    } catch (err) {
      throw err;
    }
  })
}, (app) => {
  const collections = relatedCollectionsNames.map((name) => app.findCollectionByNameOrId(name))

  // remove field
  collections.forEach((coll) => {
    coll.fields.removeByName("user")
    app.save(coll)
  })

})
