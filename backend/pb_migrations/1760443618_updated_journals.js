/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1407978968")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number1130471929",
    "max": null,
    "min": null,
    "name": "imagePreviewIndex",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1407978968")

  // remove field
  collection.fields.removeById("number1130471929")

  return app.save(collection)
})
