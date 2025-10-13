/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT DISTINCT new_table.specialty AS id, csc.image, new_table.name  FROM (SELECT cs.specialtyService as id, name, specialty FROM contractors_services as cs \nLEFT JOIN dict_specialty_services as dss ON cs.`specialtyService` = dss.id) AS new_table\nLEFT JOIN contractors_specialties_cards as csc ON new_table.id = csc.specialty;\n\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "_clone_p0eg",
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
    "hidden": false,
    "id": "json1579384326",
    "maxSize": 1,
    "name": "name",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT DISTINCT new_table.specialty AS id FROM (SELECT cs.specialtyService as id, name, specialty FROM contractors_services as cs \nLEFT JOIN dict_specialty_services as dss ON cs.`specialtyService` = dss.id) AS new_table\nLEFT JOIN contractors_specialties_cards ON new_table.id = contractors_specialties_cards.specialty;\n\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_p0eg")

  // remove field
  collection.fields.removeById("json1579384326")

  return app.save(collection)
})
