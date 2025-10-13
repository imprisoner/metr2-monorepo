/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909");

  return app.delete(collection);
}, (app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_uUHo",
        "max": 0,
        "min": 0,
        "name": "name",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "_clone_RIUt",
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
      }
    ],
    "id": "pbc_3211450909",
    "indexes": [],
    "listRule": "",
    "name": "available_specialties_view",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT DISTINCT new_table.specialty AS id, ds.name, csc.image FROM (SELECT cs.specialtyService as id, name, specialty FROM contractors_services as cs \nLEFT JOIN dict_specialty_services as dss ON cs.`specialtyService` = dss.id) AS new_table\nLEFT JOIN dict_specialties AS ds ON ds.id = new_table.specialty\nLEFT JOIN contractors_specialties_cards AS csc ON new_table.specialty = csc.specialty;\n\n",
    "viewRule": ""
  });

  return app.save(collection);
})
