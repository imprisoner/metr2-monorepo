/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3433200267")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = @request.body.contractor",
    "listRule": "",
    "updateRule": "@request.auth.id = contractor",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3433200267")

  // update collection data
  unmarshal({
    "createRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
