/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3883935755")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = @request.body.author",
    "deleteRule": "@request.auth.id = author",
    "listRule": "",
    "updateRule": "@request.auth.id = author",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3883935755")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
