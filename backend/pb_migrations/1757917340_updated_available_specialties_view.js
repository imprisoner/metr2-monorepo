/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT DISTINCT new_table.specialty AS id, ds.name FROM (SELECT cs.specialtyService as id, name, specialty FROM contractors_services as cs \nLEFT JOIN dict_specialty_services as dss ON cs.`specialtyService` = dss.id) AS new_table\nLEFT JOIN dict_specialties AS ds ON ds.id = new_table.specialty;\n\n"
  }, collection)

  // remove field
  collection.fields.removeById("json3764823788")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_x9ly",
    "max": 0,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT DISTINCT new_table.specialty, ds.name AS id FROM (SELECT cs.specialtyService as id, name, specialty FROM contractors_services as cs \nLEFT JOIN dict_specialty_services as dss ON cs.`specialtyService` = dss.id) AS new_table\nLEFT JOIN dict_specialties AS ds ON ds.id = new_table.specialty;\n\n"
  }, collection)

  // add field
  collection.fields.addAt(0, new Field({
    "hidden": false,
    "id": "json3764823788",
    "maxSize": 1,
    "name": "specialty",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // remove field
  collection.fields.removeById("_clone_x9ly")

  return app.save(collection)
})
