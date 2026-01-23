/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3110997537")

  // update collection data
  unmarshal({
    "name": "posts_common_view"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_QaId")

  // remove field
  collection.fields.removeById("_clone_4Atp")

  // remove field
  collection.fields.removeById("_clone_UTYC")

  // remove field
  collection.fields.removeById("_clone_le9b")

  // remove field
  collection.fields.removeById("_clone_oA1s")

  // remove field
  collection.fields.removeById("_clone_wIa3")

  // remove field
  collection.fields.removeById("_clone_paTz")

  // remove field
  collection.fields.removeById("_clone_0BTy")

  // remove field
  collection.fields.removeById("_clone_IDsr")

  // remove field
  collection.fields.removeById("_clone_U7IW")

  // remove field
  collection.fields.removeById("_clone_ne5O")

  // remove field
  collection.fields.removeById("_clone_UVaN")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_xLyC",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "author",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_hpSI",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_U719",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "images",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_guLR",
    "max": "",
    "min": "",
    "name": "publishDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_F5Hr",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "draft",
      "published",
      "pending"
    ]
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "Без названия",
    "hidden": false,
    "id": "_clone_yqti",
    "max": 0,
    "min": 0,
    "name": "title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_nDfc",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "blog",
      "journal",
      "portfolio"
    ]
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_uZZj",
    "name": "updated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2455737217",
    "hidden": false,
    "id": "_clone_vGBh",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "tags",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_XKLw",
    "maxSize": 10485760,
    "name": "content_json",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "_clone_uVIp",
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

  // add field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3883935755",
    "hidden": false,
    "id": "_clone_Mh5F",
    "maxSelect": 2,
    "minSelect": 0,
    "name": "lastComments",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3110997537")

  // update collection data
  unmarshal({
    "name": "popular_posts_view"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_QaId",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "author",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_4Atp",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_UTYC",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "images",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_le9b",
    "max": "",
    "min": "",
    "name": "publishDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_oA1s",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "draft",
      "published",
      "pending"
    ]
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "Без названия",
    "hidden": false,
    "id": "_clone_wIa3",
    "max": 0,
    "min": 0,
    "name": "title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_paTz",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "blog",
      "journal",
      "portfolio"
    ]
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_0BTy",
    "name": "updated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2455737217",
    "hidden": false,
    "id": "_clone_IDsr",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "tags",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_U7IW",
    "maxSize": 10485760,
    "name": "content_json",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "_clone_ne5O",
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

  // add field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3883935755",
    "hidden": false,
    "id": "_clone_UVaN",
    "maxSelect": 2,
    "minSelect": 0,
    "name": "lastComments",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("_clone_xLyC")

  // remove field
  collection.fields.removeById("_clone_hpSI")

  // remove field
  collection.fields.removeById("_clone_U719")

  // remove field
  collection.fields.removeById("_clone_guLR")

  // remove field
  collection.fields.removeById("_clone_F5Hr")

  // remove field
  collection.fields.removeById("_clone_yqti")

  // remove field
  collection.fields.removeById("_clone_nDfc")

  // remove field
  collection.fields.removeById("_clone_uZZj")

  // remove field
  collection.fields.removeById("_clone_vGBh")

  // remove field
  collection.fields.removeById("_clone_XKLw")

  // remove field
  collection.fields.removeById("_clone_uVIp")

  // remove field
  collection.fields.removeById("_clone_Mh5F")

  return app.save(collection)
})
