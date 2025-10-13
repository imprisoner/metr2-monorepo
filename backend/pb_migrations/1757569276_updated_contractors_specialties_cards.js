/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2663949550")

  // update collection data
  unmarshal({
    "listRule": "",
    "viewRule": ""
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2985719748",
    "hidden": false,
    "id": "relation3764823788",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "specialty",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file3309110367",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2663949550")

  // update collection data
  unmarshal({
    "listRule": null,
    "viewRule": null
  }, collection)

  // remove field
  collection.fields.removeById("relation3764823788")

  // remove field
  collection.fields.removeById("file3309110367")

  return app.save(collection)
})
