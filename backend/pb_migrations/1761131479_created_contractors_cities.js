/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "@request.auth.id = @request.body.contractor",
    "deleteRule": "@request.auth.id = contractor",
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
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
        "collectionId": "pbc_1454814972",
        "hidden": false,
        "id": "relation1132188399",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "contractor",
        "presentable": true,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_2793403141",
        "hidden": false,
        "id": "relation760939060",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "city",
        "presentable": true,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_2294863452",
    "indexes": [],
    "listRule": "",
    "name": "contractors_cities",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.id = contractor",
    "viewRule": ""
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2294863452");

  return app.delete(collection);
})
