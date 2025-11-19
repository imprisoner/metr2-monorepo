/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
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
        "collectionId": "pbc_1125843985",
        "hidden": false,
        "id": "relation1519021197",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "post",
        "presentable": true,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
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
      }
    ],
    "id": "pbc_636179897",
    "indexes": [],
    "listRule": null,
    "name": "post_services",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_636179897");

  return app.delete(collection);
})
