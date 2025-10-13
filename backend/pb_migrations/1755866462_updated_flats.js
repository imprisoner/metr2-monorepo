/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2712452803")

  // add field
  collection.fields.addAt(17, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1407978968",
    "hidden": false,
    "id": "relation329405889",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "journals",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2712452803")

  // remove field
  collection.fields.removeById("relation329405889")

  return app.save(collection)
})
