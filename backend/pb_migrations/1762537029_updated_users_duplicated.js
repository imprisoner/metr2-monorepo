/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "bool1308988099",
    "name": "duplicated_temp",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  app.save(collection)

  const allUsers = app.findAllRecords("users");

  // find duplicates in contractors collection

  const duplicates = allUsers.filter((record) => {
    const email = record.get("email")

    try {
      app.findFirstRecordByFilter("contractors", `email = "${email}"`)
      return true
    } catch (_) {
      return false
    }
  })

  // mark users as duplicated

  duplicates.forEach((record) => {
    record.set("duplicated_temp", true)
    app.save(record)
  })
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("bool1308988099")

  return app.save(collection)
})
