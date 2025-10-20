/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2981554211")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "bool1748787223",
    "name": "published",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "date1629928600",
    "max": "",
    "min": "",
    "name": "publishDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2981554211")

  // remove field
  collection.fields.removeById("bool1748787223")

  // remove field
  collection.fields.removeById("date1629928600")

  return app.save(collection)
})
