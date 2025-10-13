/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
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
      }
    ],
    "id": "pbc_3211450909",
    "indexes": [],
    "listRule": null,
    "name": "available_specialties_view",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT id, specialtyService FROM contractors_services;",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909");

  return app.delete(collection);
})
