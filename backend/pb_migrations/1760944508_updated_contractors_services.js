/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_820241459")

  // update collection data
  unmarshal({
    "createRule": "@request.body.contractor = @request.auth.id",
    "deleteRule": "contractor = @request.auth.id",
    "updateRule": "contractor = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_820241459")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": null,
    "updateRule": null
  }, collection)

  return app.save(collection)
})
