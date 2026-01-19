/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3779310844")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n    u.id,\n    u.avatar,\n    u.name,\n    u.email,\n    u.emailVisibility,\n    u.password,\n    u.tokenKey,\n    u.verified,\n    u.role,\n    u.username,\n    u.location,\n    u.created AS userCreated,\n    u.updated AS userUpdated,\n    up.about,\n    up.age,\n    up.gender,\n    up.id AS profileId,\n    up.created AS profileCreated,\n    up.updated AS profileUpdated,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id\n    ) AS postCount\nFROM\n    users u\nLEFT JOIN\n    user_profiles up ON u.id = up.user;"
  }, collection)

  // remove field
  collection.fields.removeById("json1689669068")

  // remove field
  collection.fields.removeById("json2032230621")

  // remove field
  collection.fields.removeById("json3789648538")

  // remove field
  collection.fields.removeById("json32993186")

  // remove field
  collection.fields.removeById("json1669186222")

  // remove field
  collection.fields.removeById("json1483516233")

  // remove field
  collection.fields.removeById("json3773946868")

  // remove field
  collection.fields.removeById("json1081168609")

  // remove field
  collection.fields.removeById("json2504479701")

  // remove field
  collection.fields.removeById("json3665191480")

  // remove field
  collection.fields.removeById("json1361468709")

  // remove field
  collection.fields.removeById("json762157910")

  // remove field
  collection.fields.removeById("json2343376106")

  // remove field
  collection.fields.removeById("json2681795176")

  // remove field
  collection.fields.removeById("json868647386")

  // remove field
  collection.fields.removeById("json3969453760")

  // remove field
  collection.fields.removeById("json3171384378")

  // remove field
  collection.fields.removeById("json2602996892")

  // remove field
  collection.fields.removeById("json2554277775")

  // remove field
  collection.fields.removeById("json3462973874")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "_clone_CBvd",
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
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_139a",
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
  collection.fields.addAt(3, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "_clone_NvsJ",
    "name": "email",
    "onlyDomains": null,
    "presentable": false,
    "required": true,
    "system": true,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_8dNr",
    "name": "emailVisibility",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "cost": 0,
    "hidden": true,
    "id": "_clone_2kOy",
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
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "[a-zA-Z0-9]{50}",
    "hidden": true,
    "id": "_clone_Cn9S",
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
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_G3W9",
    "name": "verified",
    "presentable": false,
    "required": false,
    "system": true,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_6vJ2",
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
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "user[0-9]{6}",
    "hidden": false,
    "id": "_clone_jFKX",
    "max": 30,
    "min": 3,
    "name": "username",
    "pattern": "^[a-z0-9]+$",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2793403141",
    "hidden": false,
    "id": "_clone_rg8s",
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
    "id": "_clone_XH4h",
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
    "id": "_clone_SBbf",
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
    "id": "_clone_6pl5",
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
    "id": "_clone_QJlL",
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
    "id": "_clone_m4hm",
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
  collection.fields.addAt(16, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4205858761",
    "hidden": false,
    "id": "relation2602996892",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "profileId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "_clone_72Yg",
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
    "id": "_clone_nfe4",
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
    "viewQuery": "WITH user_details AS (\n    SELECT\n        u.id AS userId,\n        u.avatar AS userAvatar,\n        u.created AS userCreated,\n        u.email AS userEmail,\n        u.emailVisibility AS userEmailVisibility,\n        u.name AS userName,\n        u.password AS userPassword,\n        u.tokenKey AS userTokenKey,\n        u.updated AS userUpdated,\n        u.verified AS userVerified,\n        u.role AS userRole,\n        u.username AS userUsername,\n        u.location AS userLocation,\n        up.about AS profileAbout,\n        up.age AS profileAge,\n        up.created AS profileCreated,\n        up.gender AS profileGender,\n        up.id AS profileId,\n        up.updated AS profileUpdated,\n        up.user AS profileUser,\n        (\n            SELECT COUNT(*)\n            FROM posts p\n            WHERE p.author = u.id\n        ) AS postCount,\n        (ROW_NUMBER() OVER()) AS id\n    FROM\n        users u\n    LEFT JOIN\n        user_profiles up ON u.id = up.user\n)\nSELECT\n    id,\n    userId,\n    userAvatar,\n    userCreated,\n    userEmail,\n    userEmailVisibility,\n    userName,\n    userPassword,\n    userTokenKey,\n    userUpdated,\n    userVerified,\n    userRole,\n    userUsername,\n    userLocation,\n    profileAbout,\n    profileAge,\n    profileCreated,\n    profileGender,\n    profileId,\n    profileUpdated,\n    profileUser,\n    postCount\nFROM\n    user_details;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "json1689669068",
    "maxSize": 1,
    "name": "userId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "json2032230621",
    "maxSize": 1,
    "name": "userAvatar",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "json3789648538",
    "maxSize": 1,
    "name": "userCreated",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "json32993186",
    "maxSize": 1,
    "name": "userEmail",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "json1669186222",
    "maxSize": 1,
    "name": "userEmailVisibility",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "json1483516233",
    "maxSize": 1,
    "name": "userName",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "json3773946868",
    "maxSize": 1,
    "name": "userPassword",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "json1081168609",
    "maxSize": 1,
    "name": "userTokenKey",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "json2504479701",
    "maxSize": 1,
    "name": "userUpdated",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "json3665191480",
    "maxSize": 1,
    "name": "userVerified",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "json1361468709",
    "maxSize": 1,
    "name": "userRole",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "json762157910",
    "maxSize": 1,
    "name": "userUsername",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "json2343376106",
    "maxSize": 1,
    "name": "userLocation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "json2681795176",
    "maxSize": 1,
    "name": "profileAbout",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "hidden": false,
    "id": "json868647386",
    "maxSize": 1,
    "name": "profileAge",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "hidden": false,
    "id": "json3969453760",
    "maxSize": 1,
    "name": "profileCreated",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "json3171384378",
    "maxSize": 1,
    "name": "profileGender",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(18, new Field({
    "hidden": false,
    "id": "json2602996892",
    "maxSize": 1,
    "name": "profileId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(19, new Field({
    "hidden": false,
    "id": "json2554277775",
    "maxSize": 1,
    "name": "profileUpdated",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(20, new Field({
    "hidden": false,
    "id": "json3462973874",
    "maxSize": 1,
    "name": "profileUser",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // remove field
  collection.fields.removeById("_clone_CBvd")

  // remove field
  collection.fields.removeById("_clone_139a")

  // remove field
  collection.fields.removeById("_clone_NvsJ")

  // remove field
  collection.fields.removeById("_clone_8dNr")

  // remove field
  collection.fields.removeById("_clone_2kOy")

  // remove field
  collection.fields.removeById("_clone_Cn9S")

  // remove field
  collection.fields.removeById("_clone_G3W9")

  // remove field
  collection.fields.removeById("_clone_6vJ2")

  // remove field
  collection.fields.removeById("_clone_jFKX")

  // remove field
  collection.fields.removeById("_clone_rg8s")

  // remove field
  collection.fields.removeById("_clone_XH4h")

  // remove field
  collection.fields.removeById("_clone_SBbf")

  // remove field
  collection.fields.removeById("_clone_6pl5")

  // remove field
  collection.fields.removeById("_clone_QJlL")

  // remove field
  collection.fields.removeById("_clone_m4hm")

  // remove field
  collection.fields.removeById("relation2602996892")

  // remove field
  collection.fields.removeById("_clone_72Yg")

  // remove field
  collection.fields.removeById("_clone_nfe4")

  return app.save(collection)
})
