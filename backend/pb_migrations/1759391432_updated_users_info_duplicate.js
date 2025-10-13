/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3433200267")

  // update collection data
  unmarshal({
    "name": "contractors_info"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1454814972",
    "hidden": false,
    "id": "relation1132188399",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "contractor",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3433200267")

  // update collection data
  unmarshal({
    "name": "users_info_duplicate"
  }, collection)

  // remove field
  collection.fields.removeById("relation1132188399")

  return app.save(collection)
})
