/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2712452803")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = @request.body.user",
    "deleteRule": "@request.auth.id = user",
    "updateRule": "@request.auth.id = user"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2712452803")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "updateRule": ""
  }, collection)

  return app.save(collection)
})
