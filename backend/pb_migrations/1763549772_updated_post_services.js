/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_636179897")

  // remove field
  collection.fields.removeById("relation2455664901")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2044573258",
    "hidden": false,
    "id": "relation1932714345",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "services",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_636179897")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_820241459",
    "hidden": false,
    "id": "relation2455664901",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "contractorServices",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("relation1932714345")

  return app.save(collection)
})
