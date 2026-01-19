/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3779310844")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n    u.username AS id,\n    u.id AS userId,\n    u.avatar,\n    u.name,\n    u.email,\n    u.emailVisibility,\n    u.verified,\n    u.role,\n    u.location,\n    u.created AS userCreated,\n    u.updated AS userUpdated,\n    up.about,\n    up.age,\n    up.gender,\n    up.id AS profileId,\n    up.created AS profileCreated,\n    up.updated AS profileUpdated,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id\n    ) AS postCount,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id AND p.type = 'portfolio'\n    ) AS portfolioCount,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id AND p.type = 'blog'\n    ) AS blogCount,\n    (\n        SELECT COUNT(*)\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS serviceCount,\n    (\n        SELECT JSON_GROUP_ARRAY(\n            JSON_OBJECT(\n                'id', cs.id,\n                'specialtyService', cs.specialtyService,\n                'priceMin', cs.priceMin,\n                'priceMax', cs.priceMax,\n                'description', cs.description\n            )\n        )\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS services,\n    (\n        SELECT COUNT(*)\n        FROM flats f\n        WHERE f.user = u.id\n    ) AS flatsCount,\n    (\n        SELECT JSON_GROUP_ARRAY(\n            JSON_OBJECT(\n                'id', dc.id,\n                'guid', dc.guid,\n                'label', dc.label,\n                'name', dc.name,\n                'name_en', dc.name_en,\n                'region', dc.region,\n                'isCapital', dc.isCapital,\n                'coords', dc.coords\n            )\n        )\n        FROM contractors_cities cc\n        JOIN dict_cities dc ON cc.city = dc.id\n        WHERE cc.user = u.id\n    ) AS contractorCitiesList\nFROM\n    users u\nLEFT JOIN\n    user_profiles up ON u.id = up.user;"
  }, collection)

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

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_tryQ",
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
    "id": "_clone_QfVb",
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
    "id": "_clone_m6Q5",
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
    "id": "_clone_2YIK",
    "name": "emailVisibility",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_F4nY",
    "name": "verified",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_EPSH",
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
    "id": "_clone_TbqK",
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
    "id": "_clone_tlLs",
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
    "id": "_clone_k47N",
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
    "id": "_clone_Z5Ex",
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
    "id": "_clone_cudO",
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
    "id": "_clone_TGIO",
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
    "id": "_clone_8mbw",
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
    "id": "_clone_eGLq",
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
    "viewQuery": "SELECT\n    u.username AS id,\n    u.id AS userId,\n    u.avatar,\n    u.name,\n    u.email,\n    u.emailVisibility,\n    u.password,\n    u.tokenKey,\n    u.verified,\n    u.role,\n    u.location,\n    u.created AS userCreated,\n    u.updated AS userUpdated,\n    up.about,\n    up.age,\n    up.gender,\n    up.id AS profileId,\n    up.created AS profileCreated,\n    up.updated AS profileUpdated,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id\n    ) AS postCount,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id AND p.type = 'portfolio'\n    ) AS portfolioCount,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id AND p.type = 'blog'\n    ) AS blogCount,\n    (\n        SELECT COUNT(*)\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS serviceCount,\n    (\n        SELECT JSON_GROUP_ARRAY(\n            JSON_OBJECT(\n                'id', cs.id,\n                'specialtyService', cs.specialtyService,\n                'priceMin', cs.priceMin,\n                'priceMax', cs.priceMax,\n                'description', cs.description\n            )\n        )\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS services,\n    (\n        SELECT COUNT(*)\n        FROM flats f\n        WHERE f.user = u.id\n    ) AS flatsCount,\n    (\n        SELECT JSON_GROUP_ARRAY(\n            JSON_OBJECT(\n                'id', dc.id,\n                'guid', dc.guid,\n                'label', dc.label,\n                'name', dc.name,\n                'name_en', dc.name_en,\n                'region', dc.region,\n                'isCapital', dc.isCapital,\n                'coords', dc.coords\n            )\n        )\n        FROM contractors_cities cc\n        JOIN dict_cities dc ON cc.city = dc.id\n        WHERE cc.user = u.id\n    ) AS contractorCitiesList\nFROM\n    users u\nLEFT JOIN\n    user_profiles up ON u.id = up.user;"
  }, collection)

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

  // remove field
  collection.fields.removeById("_clone_tryQ")

  // remove field
  collection.fields.removeById("_clone_QfVb")

  // remove field
  collection.fields.removeById("_clone_m6Q5")

  // remove field
  collection.fields.removeById("_clone_2YIK")

  // remove field
  collection.fields.removeById("_clone_F4nY")

  // remove field
  collection.fields.removeById("_clone_EPSH")

  // remove field
  collection.fields.removeById("_clone_TbqK")

  // remove field
  collection.fields.removeById("_clone_tlLs")

  // remove field
  collection.fields.removeById("_clone_k47N")

  // remove field
  collection.fields.removeById("_clone_Z5Ex")

  // remove field
  collection.fields.removeById("_clone_cudO")

  // remove field
  collection.fields.removeById("_clone_TGIO")

  // remove field
  collection.fields.removeById("_clone_8mbw")

  // remove field
  collection.fields.removeById("_clone_eGLq")

  return app.save(collection)
})
