/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1407978968")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number1130471929",
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
  const collection = app.findCollectionByNameOrId("pbc_1407978968")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number1130471929",
    "max": null,
    "min": 0,
    "name": "imagePreviewIndex",
    "onlyInt": true,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
