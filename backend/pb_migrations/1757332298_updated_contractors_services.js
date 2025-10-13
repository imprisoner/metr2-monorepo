/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_820241459")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number694376935",
    "max": null,
    "min": null,
    "name": "priceMin",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_820241459")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number694376935",
    "max": null,
    "min": null,
    "name": "priceMin",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
