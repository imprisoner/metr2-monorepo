/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3779310844")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n    u.username AS id,\n    u.id AS userId,\n    u.avatar,\n    u.name,\n    u.email,\n    u.emailVisibility,\n    u.password,\n    u.tokenKey,\n    u.verified,\n    u.role,\n    u.location,\n    u.created AS userCreated,\n    u.updated AS userUpdated,\n    up.about,\n    up.age,\n    up.gender,\n    up.id AS profileId,\n    up.created AS profileCreated,\n    up.updated AS profileUpdated,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id\n    ) AS postCount,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id AND p.type = 'portfolio'\n    ) AS portfolioCount,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id AND p.type = 'blog'\n    ) AS blogCount,\n    (\n        SELECT COUNT(*)\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS serviceCount,\n    (\n        SELECT JSON_GROUP_ARRAY(\n            JSON_OBJECT(\n                'id', cs.id,\n                'specialtyService', cs.specialtyService,\n                'priceMin', cs.priceMin,\n                'priceMax', cs.priceMax,\n                'description', cs.description\n            )\n        )\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS services,\n    (\n        SELECT COUNT(*)\n        FROM flats f\n        WHERE f.user = u.id\n    ) AS flatsCount\nFROM\n    users u\nLEFT JOIN\n    user_profiles up ON u.id = up.user;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_teBr")

  // remove field
  collection.fields.removeById("_clone_k8gM")

  // remove field
  collection.fields.removeById("_clone_0pbc")

  // remove field
  collection.fields.removeById("_clone_w4h2")

  // remove field
  collection.fields.removeById("_clone_chnM")

  // remove field
  collection.fields.removeById("_clone_vRN0")

  // remove field
  collection.fields.removeById("_clone_cn8w")

  // remove field
  collection.fields.removeById("_clone_QTbG")

  // remove field
  collection.fields.removeById("_clone_9FmS")

  // remove field
  collection.fields.removeById("_clone_YQD5")

  // remove field
  collection.fields.removeById("_clone_2cI2")

  // remove field
  collection.fields.removeById("_clone_LpRX")

  // remove field
  collection.fields.removeById("_clone_yT1Q")

  // remove field
  collection.fields.removeById("_clone_yGeH")

  // remove field
  collection.fields.removeById("_clone_tauf")

  // remove field
  collection.fields.removeById("_clone_22Bp")

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

  // add field
  collection.fields.addAt(20, new Field({
    "hidden": false,
    "id": "json688675975",
    "maxSize": 1,
    "name": "portfolioCount",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(21, new Field({
    "hidden": false,
    "id": "json4193097709",
    "maxSize": 1,
    "name": "blogCount",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(22, new Field({
    "hidden": false,
    "id": "json3615403921",
    "maxSize": 1,
    "name": "serviceCount",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(23, new Field({
    "hidden": false,
    "id": "json1932714345",
    "maxSize": 1,
    "name": "services",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(24, new Field({
    "hidden": false,
    "id": "json2395920888",
    "maxSize": 1,
    "name": "flatsCount",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3779310844")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n    u.username AS id,\n    u.id AS userId,\n    u.avatar,\n    u.name,\n    u.email,\n    u.emailVisibility,\n    u.password,\n    u.tokenKey,\n    u.verified,\n    u.role,\n    u.location,\n    u.created AS userCreated,\n    u.updated AS userUpdated,\n    up.about,\n    up.age,\n    up.gender,\n    up.id AS profileId,\n    up.created AS profileCreated,\n    up.updated AS profileUpdated,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id\n    ) AS postCount\nFROM\n    users u\nLEFT JOIN\n    user_profiles up ON u.id = up.user;"
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_teBr",
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
    "id": "_clone_k8gM",
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
    "id": "_clone_0pbc",
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
    "id": "_clone_w4h2",
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
    "id": "_clone_chnM",
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
    "id": "_clone_vRN0",
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
    "id": "_clone_cn8w",
    "name": "verified",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_QTbG",
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
    "id": "_clone_9FmS",
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
    "id": "_clone_YQD5",
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
    "id": "_clone_2cI2",
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
    "id": "_clone_LpRX",
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
    "id": "_clone_yT1Q",
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
    "id": "_clone_yGeH",
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
    "id": "_clone_tauf",
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
    "id": "_clone_22Bp",
    "name": "profileUpdated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

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

  // remove field
  collection.fields.removeById("json688675975")

  // remove field
  collection.fields.removeById("json4193097709")

  // remove field
  collection.fields.removeById("json3615403921")

  // remove field
  collection.fields.removeById("json1932714345")

  // remove field
  collection.fields.removeById("json2395920888")

  return app.save(collection)
})
