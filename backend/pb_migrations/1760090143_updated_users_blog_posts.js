/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2981554211")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number981311447",
    "max": null,
    "min": 0,
    "name": "previewImageIndex",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2981554211")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number981311447",
    "max": null,
    "min": null,
    "name": "previewImageIndex",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
