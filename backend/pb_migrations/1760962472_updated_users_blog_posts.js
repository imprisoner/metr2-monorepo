/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2981554211")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = @request.body.user && @request.body.published:isset = false && @request.body.publishDate:isset = false",
    "updateRule": "@request.auth.id = user && @request.body.published:isset = false && @request.body.publishDate:isset = false"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2981554211")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = @request.body.user",
    "updateRule": "@request.auth.id = user"
  }, collection)

  return app.save(collection)
})
