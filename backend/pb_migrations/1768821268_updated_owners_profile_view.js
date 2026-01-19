/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3779310844")

  // update collection data
  unmarshal({
    "name": "users_profile_view"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_Q6O8")

  // remove field
  collection.fields.removeById("_clone_4VAF")

  // remove field
  collection.fields.removeById("_clone_XS46")

  // remove field
  collection.fields.removeById("_clone_oiYy")

  // remove field
  collection.fields.removeById("_clone_0b07")

  // remove field
  collection.fields.removeById("_clone_CcXz")

  // remove field
  collection.fields.removeById("_clone_HcPx")

  // remove field
  collection.fields.removeById("_clone_A8yT")

  // remove field
  collection.fields.removeById("_clone_lImd")

  // remove field
  collection.fields.removeById("_clone_UcM7")

  // remove field
  collection.fields.removeById("_clone_J8wv")

  // remove field
  collection.fields.removeById("_clone_M5nc")

  // remove field
  collection.fields.removeById("_clone_qSTW")

  // remove field
  collection.fields.removeById("_clone_cAxR")

  // remove field
  collection.fields.removeById("_clone_xULn")

  // remove field
  collection.fields.removeById("_clone_0jhg")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_GfQi",
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
    "id": "_clone_fouQ",
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
    "id": "_clone_wKOf",
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
    "id": "_clone_PAQG",
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
    "id": "_clone_P23k",
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
    "id": "_clone_sOlP",
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
    "id": "_clone_NueQ",
    "name": "verified",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_moQZ",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": false,
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
    "id": "_clone_jvpL",
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
    "id": "_clone_QHov",
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
    "id": "_clone_IzHr",
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
    "id": "_clone_pDNW",
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
    "id": "_clone_IAF4",
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
    "id": "_clone_gaSi",
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
    "id": "_clone_ncfE",
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
    "id": "_clone_UFrs",
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
    "name": "owners_profile_view"
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_Q6O8",
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
    "id": "_clone_4VAF",
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
    "id": "_clone_XS46",
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
    "id": "_clone_oiYy",
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
    "id": "_clone_0b07",
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
    "id": "_clone_CcXz",
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
    "id": "_clone_HcPx",
    "name": "verified",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_A8yT",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": false,
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
    "id": "_clone_lImd",
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
    "id": "_clone_UcM7",
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
    "id": "_clone_J8wv",
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
    "id": "_clone_M5nc",
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
    "id": "_clone_qSTW",
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
    "id": "_clone_cAxR",
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
    "id": "_clone_xULn",
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
    "id": "_clone_0jhg",
    "name": "profileUpdated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // remove field
  collection.fields.removeById("_clone_GfQi")

  // remove field
  collection.fields.removeById("_clone_fouQ")

  // remove field
  collection.fields.removeById("_clone_wKOf")

  // remove field
  collection.fields.removeById("_clone_PAQG")

  // remove field
  collection.fields.removeById("_clone_P23k")

  // remove field
  collection.fields.removeById("_clone_sOlP")

  // remove field
  collection.fields.removeById("_clone_NueQ")

  // remove field
  collection.fields.removeById("_clone_moQZ")

  // remove field
  collection.fields.removeById("_clone_jvpL")

  // remove field
  collection.fields.removeById("_clone_QHov")

  // remove field
  collection.fields.removeById("_clone_IzHr")

  // remove field
  collection.fields.removeById("_clone_pDNW")

  // remove field
  collection.fields.removeById("_clone_IAF4")

  // remove field
  collection.fields.removeById("_clone_gaSi")

  // remove field
  collection.fields.removeById("_clone_ncfE")

  // remove field
  collection.fields.removeById("_clone_UFrs")

  return app.save(collection)
})
