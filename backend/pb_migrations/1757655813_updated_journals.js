/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1407978968")

  // remove field
  collection.fields.removeById("url1829049001")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1407978968")

  // add field
  collection.fields.addAt(6, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url1829049001",
    "name": "coverImage",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  return app.save(collection)
})
