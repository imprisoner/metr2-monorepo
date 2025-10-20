/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3275405259")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = @request.body.contractor && @request.body.published:isset = false && @request.body.publishDate:isset = false",
    "deleteRule": "@request.auth.id = contractor ",
    "updateRule": "@request.auth.id = contractor && @request.body.published:isset = false && @request.body.publishDate:isset = false"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3275405259")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = @request.body.contractor",
    "deleteRule": "@request.auth.id = contractor",
    "updateRule": "@request.auth.id = contractor"
  }, collection)

  return app.save(collection)
})
