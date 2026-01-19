/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3779310844")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n    u.username AS id,\n    u.id AS userId,\n    u.avatar,\n    u.name,\n    u.email,\n    u.emailVisibility,\n    u.password,\n    u.tokenKey,\n    u.verified,\n    u.role,\n    u.location,\n    u.created AS userCreated,\n    u.updated AS userUpdated,\n    up.about,\n    up.age,\n    up.gender,\n    up.id AS profileId,\n    up.created AS profileCreated,\n    up.updated AS profileUpdated,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id\n    ) AS postCount,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id AND p.type = 'portfolio'\n    ) AS portfolioCount,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id AND p.type = 'blog'\n    ) AS blogCount,\n    (\n        SELECT COUNT(*)\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS serviceCount,\n    (\n        SELECT JSON_GROUP_ARRAY(\n            JSON_OBJECT(\n                'id', cs.id,\n                'specialtyService', cs.specialtyService,\n                'priceMin', cs.priceMin,\n                'priceMax', cs.priceMax,\n                'description', cs.description\n            )\n        )\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS services,\n    (\n        SELECT COUNT(*)\n        FROM flats f\n        WHERE f.user = u.id\n    ) AS flatsCount,\n    (\n        SELECT JSON_GROUP_ARRAY(\n            JSON_OBJECT(\n                'id', dc.id,\n                'guid', dc.guid,\n                'label', dc.label,\n                'name', dc.name,\n                'name_en', dc.name_en,\n                'region', dc.region,\n                'isCapital', dc.isCapital,\n                'coords', dc.coords\n            )\n        )\n        FROM contractors_cities cc\n        JOIN dict_cities dc ON cc.city = dc.id\n        WHERE cc.user = u.id\n    ) AS contractorCitiesList\nFROM\n    users u\nLEFT JOIN\n    user_profiles up ON u.id = up.user;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_DClM")

  // remove field
  collection.fields.removeById("_clone_LfDb")

  // remove field
  collection.fields.removeById("_clone_a40f")

  // remove field
  collection.fields.removeById("_clone_AFzI")

  // remove field
  collection.fields.removeById("_clone_amRb")

  // remove field
  collection.fields.removeById("_clone_mja4")

  // remove field
  collection.fields.removeById("_clone_npCc")

  // remove field
  collection.fields.removeById("_clone_JKRi")

  // remove field
  collection.fields.removeById("_clone_BvlT")

  // remove field
  collection.fields.removeById("_clone_vC3F")

  // remove field
  collection.fields.removeById("_clone_oCxQ")

  // remove field
  collection.fields.removeById("_clone_QmAy")

  // remove field
  collection.fields.removeById("_clone_gtu9")

  // remove field
  collection.fields.removeById("_clone_QJqJ")

  // remove field
  collection.fields.removeById("_clone_q5nT")

  // remove field
  collection.fields.removeById("_clone_Lf9u")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_r58A",
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
    "id": "_clone_PGun",
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
    "id": "_clone_oW43",
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
    "id": "_clone_0i5i",
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
    "id": "_clone_afsv",
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
    "id": "_clone_5F8t",
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
    "id": "_clone_91kl",
    "name": "verified",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_Dfy4",
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
    "id": "_clone_ufRz",
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
    "id": "_clone_DwUe",
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
    "id": "_clone_zfVJ",
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
    "id": "_clone_Kk8t",
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
    "id": "_clone_kutb",
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
    "id": "_clone_gJgG",
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
    "id": "_clone_c918",
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
    "id": "_clone_8sbh",
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
    "viewQuery": "SELECT\n    u.username AS id,\n    u.id AS userId,\n    u.avatar,\n    u.name,\n    u.email,\n    u.emailVisibility,\n    u.password,\n    u.tokenKey,\n    u.verified,\n    u.role,\n    u.location,\n    u.created AS userCreated,\n    u.updated AS userUpdated,\n    up.about,\n    up.age,\n    up.gender,\n    up.id AS profileId,\n    up.created AS profileCreated,\n    up.updated AS profileUpdated,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id\n    ) AS postCount,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id AND p.type = 'portfolio'\n    ) AS portfolioCount,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id AND p.type = 'blog'\n    ) AS blogCount,\n    (\n        SELECT COUNT(*)\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS serviceCount,\n    (\n        SELECT JSON_GROUP_ARRAY(\n            JSON_OBJECT(\n                'id', cs.id,\n                'specialtyService', cs.specialtyService,\n                'priceMin', cs.priceMin,\n                'priceMax', cs.priceMax,\n                'description', cs.description\n            )\n        )\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS services,\n    (\n        SELECT COUNT(*)\n        FROM flats f\n        WHERE f.user = u.id\n    ) AS flatsCount,\n    (\n        SELECT JSON_GROUP_ARRAY(dc.name)\n        FROM contractors_cities cc\n        JOIN dict_cities dc ON cc.city = dc.id\n        WHERE cc.user = u.id\n    ) AS contractorCitiesList\nFROM\n    users u\nLEFT JOIN\n    user_profiles up ON u.id = up.user;"
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_DClM",
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
    "id": "_clone_LfDb",
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
    "id": "_clone_a40f",
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
    "id": "_clone_AFzI",
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
    "id": "_clone_amRb",
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
    "id": "_clone_mja4",
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
    "id": "_clone_npCc",
    "name": "verified",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_JKRi",
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
    "id": "_clone_BvlT",
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
    "id": "_clone_vC3F",
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
    "id": "_clone_oCxQ",
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
    "id": "_clone_QmAy",
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
    "id": "_clone_gtu9",
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
    "id": "_clone_QJqJ",
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
    "id": "_clone_q5nT",
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
    "id": "_clone_Lf9u",
    "name": "profileUpdated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // remove field
  collection.fields.removeById("_clone_r58A")

  // remove field
  collection.fields.removeById("_clone_PGun")

  // remove field
  collection.fields.removeById("_clone_oW43")

  // remove field
  collection.fields.removeById("_clone_0i5i")

  // remove field
  collection.fields.removeById("_clone_afsv")

  // remove field
  collection.fields.removeById("_clone_5F8t")

  // remove field
  collection.fields.removeById("_clone_91kl")

  // remove field
  collection.fields.removeById("_clone_Dfy4")

  // remove field
  collection.fields.removeById("_clone_ufRz")

  // remove field
  collection.fields.removeById("_clone_DwUe")

  // remove field
  collection.fields.removeById("_clone_zfVJ")

  // remove field
  collection.fields.removeById("_clone_Kk8t")

  // remove field
  collection.fields.removeById("_clone_kutb")

  // remove field
  collection.fields.removeById("_clone_gJgG")

  // remove field
  collection.fields.removeById("_clone_c918")

  // remove field
  collection.fields.removeById("_clone_8sbh")

  return app.save(collection)
})
