/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3779310844")

  // update collection data
  unmarshal({
    "listRule": "",
    "viewRule": ""
  }, collection)

  // remove field
  collection.fields.removeById("_clone_6CJF")

  // remove field
  collection.fields.removeById("_clone_WCGz")

  // remove field
  collection.fields.removeById("_clone_jPUN")

  // remove field
  collection.fields.removeById("_clone_A9hf")

  // remove field
  collection.fields.removeById("_clone_BLDT")

  // remove field
  collection.fields.removeById("_clone_12Fy")

  // remove field
  collection.fields.removeById("_clone_XGy4")

  // remove field
  collection.fields.removeById("_clone_yMvH")

  // remove field
  collection.fields.removeById("_clone_fxXN")

  // remove field
  collection.fields.removeById("_clone_lkih")

  // remove field
  collection.fields.removeById("_clone_irdS")

  // remove field
  collection.fields.removeById("_clone_jG2D")

  // remove field
  collection.fields.removeById("_clone_xwCP")

  // remove field
  collection.fields.removeById("_clone_zRa6")

  // remove field
  collection.fields.removeById("_clone_g5NN")

  // remove field
  collection.fields.removeById("_clone_W6lg")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_XSLk",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/gif",
      "image/webp"
    ],
    "name": "avatar",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_mAOE",
    "max": 255,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "_clone_7jNP",
    "name": "email",
    "onlyDomains": null,
    "presentable": false,
    "required": true,
    "system": true,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_GMgE",
    "name": "emailVisibility",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "cost": 0,
    "hidden": true,
    "id": "_clone_zxNE",
    "max": 0,
    "min": 8,
    "name": "password",
    "pattern": "",
    "presentable": false,
    "required": true,
    "system": true,
    "type": "password"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "[a-zA-Z0-9]{50}",
    "hidden": true,
    "id": "_clone_7qwf",
    "max": 60,
    "min": 30,
    "name": "tokenKey",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": true,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_Riqy",
    "name": "verified",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_gPik",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "owner",
      "contractor"
    ]
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2793403141",
    "hidden": false,
    "id": "_clone_LqHX",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "location",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "_clone_GxDC",
    "name": "userCreated",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "_clone_Yf3l",
    "name": "userUpdated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_Cr5n",
    "max": 0,
    "min": 0,
    "name": "about",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "_clone_3RAv",
    "max": null,
    "min": null,
    "name": "age",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "hidden": false,
    "id": "_clone_UQKC",
    "maxSelect": 1,
    "name": "gender",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "male",
      "female"
    ]
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "_clone_QTx3",
    "name": "profileCreated",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(18, new Field({
    "hidden": false,
    "id": "_clone_4KJq",
    "name": "profileUpdated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3779310844")

  // update collection data
  unmarshal({
    "listRule": null,
    "viewRule": null
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_6CJF",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/gif",
      "image/webp"
    ],
    "name": "avatar",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_WCGz",
    "max": 255,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "_clone_jPUN",
    "name": "email",
    "onlyDomains": null,
    "presentable": false,
    "required": true,
    "system": true,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_A9hf",
    "name": "emailVisibility",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "cost": 0,
    "hidden": true,
    "id": "_clone_BLDT",
    "max": 0,
    "min": 8,
    "name": "password",
    "pattern": "",
    "presentable": false,
    "required": true,
    "system": true,
    "type": "password"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "[a-zA-Z0-9]{50}",
    "hidden": true,
    "id": "_clone_12Fy",
    "max": 60,
    "min": 30,
    "name": "tokenKey",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": true,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_XGy4",
    "name": "verified",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_yMvH",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "owner",
      "contractor"
    ]
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2793403141",
    "hidden": false,
    "id": "_clone_fxXN",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "location",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "_clone_lkih",
    "name": "userCreated",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "_clone_irdS",
    "name": "userUpdated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_jG2D",
    "max": 0,
    "min": 0,
    "name": "about",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "_clone_xwCP",
    "max": null,
    "min": null,
    "name": "age",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "hidden": false,
    "id": "_clone_zRa6",
    "maxSelect": 1,
    "name": "gender",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "male",
      "female"
    ]
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "_clone_g5NN",
    "name": "profileCreated",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(18, new Field({
    "hidden": false,
    "id": "_clone_W6lg",
    "name": "profileUpdated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // remove field
  collection.fields.removeById("_clone_XSLk")

  // remove field
  collection.fields.removeById("_clone_mAOE")

  // remove field
  collection.fields.removeById("_clone_7jNP")

  // remove field
  collection.fields.removeById("_clone_GMgE")

  // remove field
  collection.fields.removeById("_clone_zxNE")

  // remove field
  collection.fields.removeById("_clone_7qwf")

  // remove field
  collection.fields.removeById("_clone_Riqy")

  // remove field
  collection.fields.removeById("_clone_gPik")

  // remove field
  collection.fields.removeById("_clone_LqHX")

  // remove field
  collection.fields.removeById("_clone_GxDC")

  // remove field
  collection.fields.removeById("_clone_Yf3l")

  // remove field
  collection.fields.removeById("_clone_Cr5n")

  // remove field
  collection.fields.removeById("_clone_3RAv")

  // remove field
  collection.fields.removeById("_clone_UQKC")

  // remove field
  collection.fields.removeById("_clone_QTx3")

  // remove field
  collection.fields.removeById("_clone_4KJq")

  return app.save(collection)
})
