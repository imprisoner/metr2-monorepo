/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1454814972")

  // update collection data
  unmarshal({
    "oauth2": {
      "mappedFields": {
        "avatarURL": "avatar",
        "name": "name"
      }
    }
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1454814972")

  // update collection data
  unmarshal({
    "oauth2": {
      "mappedFields": {
        "avatarURL": "",
        "name": ""
      }
    }
  }, collection)

  return app.save(collection)
})
