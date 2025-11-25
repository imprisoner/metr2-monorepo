/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2455737217")

  // update collection data
  unmarshal({
    "name": "dict_post_tags"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2455737217")

  // update collection data
  unmarshal({
    "name": "dict_tags"
  }, collection)

  return app.save(collection)
})
