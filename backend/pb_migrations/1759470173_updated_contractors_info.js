/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3433200267")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "number1811708021",
    "max": null,
    "min": null,
    "name": "experienceYears",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3433200267")

  // remove field
  collection.fields.removeById("number1811708021")

  return app.save(collection)
})
