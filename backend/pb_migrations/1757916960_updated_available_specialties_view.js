/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT DISTINCT new_table.specialty AS id, csc.image, csc.specialty  FROM (SELECT cs.specialtyService as id, name, specialty FROM contractors_services as cs \nLEFT JOIN dict_specialty_services as dss ON cs.`specialtyService` = dss.id) AS new_table\nLEFT JOIN contractors_specialties_cards as csc ON new_table.id = csc.specialty;\n\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_5bR3")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "_clone_1BK4",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2985719748",
    "hidden": false,
    "id": "_clone_5JKe",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "specialty",
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
    "viewQuery": "SELECT DISTINCT new_table.specialty AS id, csc.image  FROM (SELECT cs.specialtyService as id, name, specialty FROM contractors_services as cs \nLEFT JOIN dict_specialty_services as dss ON cs.`specialtyService` = dss.id) AS new_table\nLEFT JOIN contractors_specialties_cards as csc ON new_table.id = csc.specialty;\n\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "_clone_5bR3",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // remove field
  collection.fields.removeById("_clone_1BK4")

  // remove field
  collection.fields.removeById("_clone_5JKe")

  return app.save(collection)
})
