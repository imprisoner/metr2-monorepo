/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_820241459")

  // remove field
  collection.fields.removeById("relation1132188399")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_820241459")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3674826820",
    "hidden": false,
    "id": "relation1132188399",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "contractor",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
