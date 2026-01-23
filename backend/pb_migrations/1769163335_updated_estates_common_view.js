/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2870019824")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n    f.id,\n    f.nickname,\n    f.images,\n    f.description,\n    f.user,\n    (\n        SELECT CAST(COUNT(*) AS INTEGER)\n        FROM likes_flats lf\n        WHERE lf.flat = f.id\n    ) AS likesCount,\n    (\n        SELECT CAST(COUNT(*) AS INTEGER)\n        FROM post_flats pf\n        WHERE pf.flat = f.id\n    ) AS postsCount\nFROM\n    flats f;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_2ouv")

  // remove field
  collection.fields.removeById("_clone_sVTt")

  // remove field
  collection.fields.removeById("_clone_TFln")

  // remove field
  collection.fields.removeById("_clone_23p8")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_AxT2",
    "max": 0,
    "min": 0,
    "name": "nickname",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_22nd",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/webp"
    ],
    "name": "images",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_EdXx",
    "max": 0,
    "min": 0,
    "name": "description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_c8HV",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2870019824")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n    f.id,\n    f.nickname,\n    f.images,\n    f.description,\n    f.user,\n    (\n        SELECT COUNT(*)\n        FROM likes_flats lf\n        WHERE lf.flat = f.id\n    ) AS likesCount,\n    (\n        SELECT COUNT(*)\n        FROM post_flats pf\n        WHERE pf.flat = f.id\n    ) AS postsCount\nFROM\n    flats f;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_2ouv",
    "max": 0,
    "min": 0,
    "name": "nickname",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_sVTt",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/webp"
    ],
    "name": "images",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_TFln",
    "max": 0,
    "min": 0,
    "name": "description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_23p8",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("_clone_AxT2")

  // remove field
  collection.fields.removeById("_clone_22nd")

  // remove field
  collection.fields.removeById("_clone_EdXx")

  // remove field
  collection.fields.removeById("_clone_c8HV")

  return app.save(collection)
})
