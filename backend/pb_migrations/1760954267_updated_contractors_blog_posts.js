/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1217199026")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = @request.body.contractor",
    "updateRule": "@request.auth.id = contractor"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1217199026")

  // update collection data
  unmarshal({
    "createRule": "",
    "updateRule": ""
  }, collection)

  return app.save(collection)
})
