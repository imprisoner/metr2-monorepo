/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1125843985")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file699032626",
    "maxSelect": 99,
    "maxSize": 419430400,
    "mimeTypes": [
      "video/ogg",
      "video/mpeg",
      "video/quicktime",
      "video/mp4",
      "video/3gpp",
      "video/3gpp2",
      "video/quicktime",
      "video/x-m4v",
      "video/mj2",
      "video/vnd.dvb.file",
      "video/webm",
      "video/x-msvideo",
      "video/x-flv",
      "video/x-matroska",
      "video/x-ms-asf"
    ],
    "name": "videos",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1125843985")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file699032626",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "videos",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
