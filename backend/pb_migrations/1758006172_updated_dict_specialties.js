/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2985719748")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2270674701",
    "hidden": false,
    "id": "relation1157023862",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "serviceCategory",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2985719748")

  // remove field
  collection.fields.removeById("relation1157023862")

  return app.save(collection)
})
