/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3275405259")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = @request.body.contractor",
    "deleteRule": "@request.auth.id = contractor",
    "updateRule": "@request.auth.id = contractor"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3275405259")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "updateRule": ""
  }, collection)

  return app.save(collection)
})
