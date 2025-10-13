/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4205858761")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = @request.body.user",
    "listRule": "",
    "updateRule": "@request.auth.id = user",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4205858761")

  // update collection data
  unmarshal({
    "createRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
