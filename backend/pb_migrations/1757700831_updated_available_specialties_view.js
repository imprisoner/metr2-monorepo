/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT cs.id, specialtyService FROM contractors_services as cs\nLEFT JOIN dict_specialty_services as dss ON dss.id = cs.id;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_Y4KR")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2044573258",
    "hidden": false,
    "id": "_clone_2qZr",
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
    "viewQuery": "SELECT id, specialtyService FROM contractors_services;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2044573258",
    "hidden": false,
    "id": "_clone_Y4KR",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "specialtyService",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("_clone_2qZr")

  return app.save(collection)
})
