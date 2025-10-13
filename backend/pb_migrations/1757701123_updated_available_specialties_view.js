/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "listRule": "",
    "viewQuery": "SELECT cs.id, specialtyService FROM contractors_services as cs;\n\n",
    "viewRule": ""
  }, collection)

  // remove field
  collection.fields.removeById("_clone_XRaD")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2044573258",
    "hidden": false,
    "id": "_clone_MMm6",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "specialtyService",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "listRule": null,
    "viewQuery": "SELECT DISTINCT cs.id, specialtyService FROM contractors_services as cs;\n\n",
    "viewRule": null
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2044573258",
    "hidden": false,
    "id": "_clone_XRaD",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "specialtyService",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("_clone_MMm6")

  return app.save(collection)
})
