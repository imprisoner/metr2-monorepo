/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3275405259")

  // add field
  collection.fields.addAt(6, new Field({
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
  const collection = app.findCollectionByNameOrId("pbc_3275405259")

  // remove field
  collection.fields.removeById("number981311447")

  return app.save(collection)
})
