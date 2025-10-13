/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2044573258")

  // update field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2985719748",
    "hidden": false,
    "id": "relation3764823788",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "specialty",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2044573258")

  // update field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2985719748",
    "hidden": false,
    "id": "relation3764823788",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "specialty",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
