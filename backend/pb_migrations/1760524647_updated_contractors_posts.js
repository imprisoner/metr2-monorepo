/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3275405259")

  // update field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_820241459",
    "hidden": false,
    "id": "relation2455664901",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "contractorServices",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3275405259")

  // update field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_820241459",
    "hidden": false,
    "id": "relation2455664901",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "contractorServices",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
