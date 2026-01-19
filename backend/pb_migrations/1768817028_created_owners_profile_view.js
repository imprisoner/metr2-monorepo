/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "json1689669068",
        "maxSize": 1,
        "name": "userId",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json2032230621",
        "maxSize": 1,
        "name": "userAvatar",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json3789648538",
        "maxSize": 1,
        "name": "userCreated",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json32993186",
        "maxSize": 1,
        "name": "userEmail",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json1669186222",
        "maxSize": 1,
        "name": "userEmailVisibility",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json1483516233",
        "maxSize": 1,
        "name": "userName",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json3773946868",
        "maxSize": 1,
        "name": "userPassword",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json1081168609",
        "maxSize": 1,
        "name": "userTokenKey",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json2504479701",
        "maxSize": 1,
        "name": "userUpdated",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json3665191480",
        "maxSize": 1,
        "name": "userVerified",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json1361468709",
        "maxSize": 1,
        "name": "userRole",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json762157910",
        "maxSize": 1,
        "name": "userUsername",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json2343376106",
        "maxSize": 1,
        "name": "userLocation",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json2681795176",
        "maxSize": 1,
        "name": "profileAbout",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json868647386",
        "maxSize": 1,
        "name": "profileAge",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json3969453760",
        "maxSize": 1,
        "name": "profileCreated",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json3171384378",
        "maxSize": 1,
        "name": "profileGender",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json2602996892",
        "maxSize": 1,
        "name": "profileId",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json2554277775",
        "maxSize": 1,
        "name": "profileUpdated",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json3462973874",
        "maxSize": 1,
        "name": "profileUser",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json3496508534",
        "maxSize": 1,
        "name": "postCount",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      }
    ],
    "id": "pbc_3779310844",
    "indexes": [],
    "listRule": null,
    "name": "owners_profile_view",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "WITH user_details AS (\n    SELECT\n        u.id AS userId,\n        u.avatar AS userAvatar,\n        u.created AS userCreated,\n        u.email AS userEmail,\n        u.emailVisibility AS userEmailVisibility,\n        u.name AS userName,\n        u.password AS userPassword,\n        u.tokenKey AS userTokenKey,\n        u.updated AS userUpdated,\n        u.verified AS userVerified,\n        u.role AS userRole,\n        u.username AS userUsername,\n        u.location AS userLocation,\n        up.about AS profileAbout,\n        up.age AS profileAge,\n        up.created AS profileCreated,\n        up.gender AS profileGender,\n        up.id AS profileId,\n        up.updated AS profileUpdated,\n        up.user AS profileUser,\n        (\n            SELECT COUNT(*)\n            FROM posts p\n            WHERE p.author = u.id\n        ) AS postCount,\n        (ROW_NUMBER() OVER()) AS id\n    FROM\n        users u\n    LEFT JOIN\n        user_profiles up ON u.id = up.user\n)\nSELECT\n    id,\n    userId,\n    userAvatar,\n    userCreated,\n    userEmail,\n    userEmailVisibility,\n    userName,\n    userPassword,\n    userTokenKey,\n    userUpdated,\n    userVerified,\n    userRole,\n    userUsername,\n    userLocation,\n    profileAbout,\n    profileAge,\n    profileCreated,\n    profileGender,\n    profileId,\n    profileUpdated,\n    profileUser,\n    postCount\nFROM\n    user_details;",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3779310844");

  return app.delete(collection);
})
