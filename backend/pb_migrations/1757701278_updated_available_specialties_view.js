/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT cs.id, specialtyService, dss.name, dss.specialty FROM contractors_services as cs\nINNER JOIN dict_specialty_services as dss on cs.`specialtyService` = dss.id;\n\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_mOey")

  // remove field
  collection.fields.removeById("_clone_NL7Z")

  // remove field
  collection.fields.removeById("_clone_NR0M")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2044573258",
    "hidden": false,
    "id": "_clone_Eta4",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "specialtyService",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_puYU",
    "max": 0,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2985719748",
    "hidden": false,
    "id": "_clone_arwS",
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
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT DISTINCT cs.id, specialtyService, dss.name, dss.specialty FROM contractors_services as cs\nINNER JOIN dict_specialty_services as dss on cs.`specialtyService` = dss.id;\n\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2044573258",
    "hidden": false,
    "id": "_clone_mOey",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "specialtyService",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_NL7Z",
    "max": 0,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2985719748",
    "hidden": false,
    "id": "_clone_NR0M",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "specialty",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("_clone_Eta4")

  // remove field
  collection.fields.removeById("_clone_puYU")

  // remove field
  collection.fields.removeById("_clone_arwS")

  return app.save(collection)
})
