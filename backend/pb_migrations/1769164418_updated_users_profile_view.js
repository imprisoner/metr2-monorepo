/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2733323712")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n    u.username AS id,\n    u.id AS userId,\n    u.avatar,\n    u.name,\n    u.email,\n    u.emailVisibility,\n    u.verified,\n    u.role,\n    u.location,\n    u.created AS userCreated,\n    u.updated AS userUpdated,\n    up.about,\n    up.age,\n    up.gender,\n    up.id AS profileId,\n    up.created AS profileCreated,\n    up.updated AS profileUpdated,\n    CAST(\n        (\n            SELECT COUNT(*)\n            FROM posts p\n            WHERE p.author = u.id\n        ) AS INTEGER\n    ) AS postCount,\n    CAST(\n        (\n            SELECT COUNT(*)\n            FROM posts p\n            WHERE p.author = u.id AND p.type = 'portfolio'\n        ) AS INTEGER\n    ) AS portfolioCount,\n    CAST(\n        (\n            SELECT COUNT(*)\n            FROM posts p\n            WHERE p.author = u.id AND p.type = 'blog'\n        ) AS INTEGER\n    ) AS blogCount,\n    CAST(\n        (\n            SELECT COUNT(*)\n            FROM contractors_services cs\n            WHERE cs.user = u.id\n        ) AS INTEGER\n    ) AS serviceCount,\n    (\n        SELECT JSON_GROUP_ARRAY(\n            JSON_OBJECT(\n                'id', cs.id,\n                'specialtyService', cs.specialtyService,\n                'priceMin', cs.priceMin,\n                'priceMax', cs.priceMax,\n                'description', cs.description\n            )\n        )\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS services,\n    CAST(\n        (\n            SELECT COUNT(*)\n            FROM flats f\n            WHERE f.user = u.id\n        ) AS INTEGER\n    ) AS flatsCount,\n    (\n        SELECT JSON_GROUP_ARRAY(\n            JSON_OBJECT(\n                'id', dc.id,\n                'guid', dc.guid,\n                'label', dc.label,\n                'name', dc.name,\n                'name_en', dc.name_en,\n                'region', dc.region,\n                'isCapital', dc.isCapital,\n                'coords', dc.coords\n            )\n        )\n        FROM contractors_cities cc\n        JOIN dict_cities dc ON cc.city = dc.id\n        WHERE cc.user = u.id\n    ) AS contractorCitiesList\nFROM\n    users u\nLEFT JOIN\n    user_profiles up ON u.id = up.user;\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_1hUz")

  // remove field
  collection.fields.removeById("_clone_RBvn")

  // remove field
  collection.fields.removeById("_clone_uuwu")

  // remove field
  collection.fields.removeById("_clone_sQ2u")

  // remove field
  collection.fields.removeById("_clone_HAnA")

  // remove field
  collection.fields.removeById("_clone_3nvl")

  // remove field
  collection.fields.removeById("_clone_NZW2")

  // remove field
  collection.fields.removeById("_clone_GFnw")

  // remove field
  collection.fields.removeById("_clone_wBqM")

  // remove field
  collection.fields.removeById("_clone_qT6H")

  // remove field
  collection.fields.removeById("_clone_zd5V")

  // remove field
  collection.fields.removeById("_clone_VPBG")

  // remove field
  collection.fields.removeById("_clone_74LZ")

  // remove field
  collection.fields.removeById("_clone_9KLX")

  // remove field
  collection.fields.removeById("json3496508534")

  // remove field
  collection.fields.removeById("json688675975")

  // remove field
  collection.fields.removeById("json4193097709")

  // remove field
  collection.fields.removeById("json3615403921")

  // remove field
  collection.fields.removeById("json2395920888")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_XCoq",
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
    "id": "_clone_8xut",
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
    "id": "_clone_zUK0",
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
    "id": "_clone_dw5U",
    "name": "emailVisibility",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_0KeF",
    "name": "verified",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_7bJR",
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
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2793403141",
    "hidden": false,
    "id": "_clone_8rHN",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "location",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_086g",
    "name": "userCreated",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_aYUi",
    "name": "userUpdated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_OBe3",
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
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "_clone_9l30",
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
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "_clone_lHUO",
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
  collection.fields.addAt(15, new Field({
    "hidden": false,
    "id": "_clone_i1NX",
    "name": "profileCreated",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "hidden": false,
    "id": "_clone_qDv8",
    "name": "profileUpdated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "number3496508534",
    "max": null,
    "min": null,
    "name": "postCount",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(18, new Field({
    "hidden": false,
    "id": "number688675975",
    "max": null,
    "min": null,
    "name": "portfolioCount",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(19, new Field({
    "hidden": false,
    "id": "number4193097709",
    "max": null,
    "min": null,
    "name": "blogCount",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(20, new Field({
    "hidden": false,
    "id": "number3615403921",
    "max": null,
    "min": null,
    "name": "serviceCount",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(22, new Field({
    "hidden": false,
    "id": "number2395920888",
    "max": null,
    "min": null,
    "name": "flatsCount",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2733323712")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n    u.username AS id,\n    u.id AS userId,\n    u.avatar,\n    u.name,\n    u.email,\n    u.emailVisibility,\n    u.verified,\n    u.role,\n    u.location,\n    u.created AS userCreated,\n    u.updated AS userUpdated,\n    up.about,\n    up.age,\n    up.gender,\n    up.id AS profileId,\n    up.created AS profileCreated,\n    up.updated AS profileUpdated,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id\n    ) AS postCount,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id AND p.type = 'portfolio'\n    ) AS portfolioCount,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id AND p.type = 'blog'\n    ) AS blogCount,\n    (\n        SELECT COUNT(*)\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS serviceCount,\n    (\n        SELECT JSON_GROUP_ARRAY(\n            JSON_OBJECT(\n                'id', cs.id,\n                'specialtyService', cs.specialtyService,\n                'priceMin', cs.priceMin,\n                'priceMax', cs.priceMax,\n                'description', cs.description\n            )\n        )\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS services,\n    (\n        SELECT COUNT(*)\n        FROM flats f\n        WHERE f.user = u.id\n    ) AS flatsCount,\n    (\n        SELECT JSON_GROUP_ARRAY(\n            JSON_OBJECT(\n                'id', dc.id,\n                'guid', dc.guid,\n                'label', dc.label,\n                'name', dc.name,\n                'name_en', dc.name_en,\n                'region', dc.region,\n                'isCapital', dc.isCapital,\n                'coords', dc.coords\n            )\n        )\n        FROM contractors_cities cc\n        JOIN dict_cities dc ON cc.city = dc.id\n        WHERE cc.user = u.id\n    ) AS contractorCitiesList\nFROM\n    users u\nLEFT JOIN\n    user_profiles up ON u.id = up.user;"
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_1hUz",
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
    "id": "_clone_RBvn",
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
    "id": "_clone_uuwu",
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
    "id": "_clone_sQ2u",
    "name": "emailVisibility",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_HAnA",
    "name": "verified",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_3nvl",
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
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2793403141",
    "hidden": false,
    "id": "_clone_NZW2",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "location",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_GFnw",
    "name": "userCreated",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_wBqM",
    "name": "userUpdated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_qT6H",
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
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "_clone_zd5V",
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
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "_clone_VPBG",
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
  collection.fields.addAt(15, new Field({
    "hidden": false,
    "id": "_clone_74LZ",
    "name": "profileCreated",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "hidden": false,
    "id": "_clone_9KLX",
    "name": "profileUpdated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "json3496508534",
    "maxSize": 1,
    "name": "postCount",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(18, new Field({
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
  collection.fields.addAt(19, new Field({
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
  collection.fields.addAt(20, new Field({
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
  collection.fields.addAt(22, new Field({
    "hidden": false,
    "id": "json2395920888",
    "maxSize": 1,
    "name": "flatsCount",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // remove field
  collection.fields.removeById("_clone_XCoq")

  // remove field
  collection.fields.removeById("_clone_8xut")

  // remove field
  collection.fields.removeById("_clone_zUK0")

  // remove field
  collection.fields.removeById("_clone_dw5U")

  // remove field
  collection.fields.removeById("_clone_0KeF")

  // remove field
  collection.fields.removeById("_clone_7bJR")

  // remove field
  collection.fields.removeById("_clone_8rHN")

  // remove field
  collection.fields.removeById("_clone_086g")

  // remove field
  collection.fields.removeById("_clone_aYUi")

  // remove field
  collection.fields.removeById("_clone_OBe3")

  // remove field
  collection.fields.removeById("_clone_9l30")

  // remove field
  collection.fields.removeById("_clone_lHUO")

  // remove field
  collection.fields.removeById("_clone_i1NX")

  // remove field
  collection.fields.removeById("_clone_qDv8")

  // remove field
  collection.fields.removeById("number3496508534")

  // remove field
  collection.fields.removeById("number688675975")

  // remove field
  collection.fields.removeById("number4193097709")

  // remove field
  collection.fields.removeById("number3615403921")

  // remove field
  collection.fields.removeById("number2395920888")

  return app.save(collection)
})
