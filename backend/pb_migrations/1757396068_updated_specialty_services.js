/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2044573258")

  // update collection data
  unmarshal({
    "name": "dict_specialty_services"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2044573258")

  // update collection data
  unmarshal({
    "name": "specialty_services"
  }, collection)

  return app.save(collection)
})
