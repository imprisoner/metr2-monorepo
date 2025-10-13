/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2985719748")

  // update collection data
  unmarshal({
    "name": "dict_specialties"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2985719748")

  // update collection data
  unmarshal({
    "name": "specialties"
  }, collection)

  return app.save(collection)
})
