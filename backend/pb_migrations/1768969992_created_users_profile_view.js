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
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "relation1689669068",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "userId",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "_clone_LFIY",
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
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_IWip",
        "max": 255,
        "min": 0,
        "name": "name",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "exceptDomains": null,
        "hidden": false,
        "id": "_clone_0tVW",
        "name": "email",
        "onlyDomains": null,
        "presentable": false,
        "required": true,
        "system": true,
        "type": "email"
      },
      {
        "hidden": false,
        "id": "_clone_0wJU",
        "name": "emailVisibility",
        "presentable": false,
        "required": false,
        "system": true,
        "type": "bool"
      },
      {
        "hidden": false,
        "id": "_clone_Nx47",
        "name": "verified",
        "presentable": false,
        "required": false,
        "system": true,
        "type": "bool"
      },
      {
        "hidden": false,
        "id": "_clone_kFSE",
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
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_2793403141",
        "hidden": false,
        "id": "_clone_c7E1",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "location",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "_clone_JDjl",
        "name": "userCreated",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "_clone_MnhY",
        "name": "userUpdated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_QRPq",
        "max": 0,
        "min": 0,
        "name": "about",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "_clone_FEyR",
        "max": null,
        "min": null,
        "name": "age",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "_clone_8PdZ",
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
      },
      {
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
      },
      {
        "hidden": false,
        "id": "_clone_h9wu",
        "name": "profileCreated",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "_clone_x1jp",
        "name": "profileUpdated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
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
      },
      {
        "hidden": false,
        "id": "json688675975",
        "maxSize": 1,
        "name": "portfolioCount",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json4193097709",
        "maxSize": 1,
        "name": "blogCount",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json3615403921",
        "maxSize": 1,
        "name": "serviceCount",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json1932714345",
        "maxSize": 1,
        "name": "services",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json2395920888",
        "maxSize": 1,
        "name": "flatsCount",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json197600475",
        "maxSize": 1,
        "name": "contractorCitiesList",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      }
    ],
    "id": "pbc_2733323712",
    "indexes": [],
    "listRule": null,
    "name": "users_profile_view",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT\n    u.username AS id,\n    u.id AS userId,\n    u.avatar,\n    u.name,\n    u.email,\n    u.emailVisibility,\n    u.verified,\n    u.role,\n    u.location,\n    u.created AS userCreated,\n    u.updated AS userUpdated,\n    up.about,\n    up.age,\n    up.gender,\n    up.id AS profileId,\n    up.created AS profileCreated,\n    up.updated AS profileUpdated,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id\n    ) AS postCount,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id AND p.type = 'portfolio'\n    ) AS portfolioCount,\n    (\n        SELECT COUNT(*)\n        FROM posts p\n        WHERE p.author = u.id AND p.type = 'blog'\n    ) AS blogCount,\n    (\n        SELECT COUNT(*)\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS serviceCount,\n    (\n        SELECT JSON_GROUP_ARRAY(\n            JSON_OBJECT(\n                'id', cs.id,\n                'specialtyService', cs.specialtyService,\n                'priceMin', cs.priceMin,\n                'priceMax', cs.priceMax,\n                'description', cs.description\n            )\n        )\n        FROM contractors_services cs\n        WHERE cs.user = u.id\n    ) AS services,\n    (\n        SELECT COUNT(*)\n        FROM flats f\n        WHERE f.user = u.id\n    ) AS flatsCount,\n    (\n        SELECT JSON_GROUP_ARRAY(\n            JSON_OBJECT(\n                'id', dc.id,\n                'guid', dc.guid,\n                'label', dc.label,\n                'name', dc.name,\n                'name_en', dc.name_en,\n                'region', dc.region,\n                'isCapital', dc.isCapital,\n                'coords', dc.coords\n            )\n        )\n        FROM contractors_cities cc\n        JOIN dict_cities dc ON cc.city = dc.id\n        WHERE cc.user = u.id\n    ) AS contractorCitiesList\nFROM\n    users u\nLEFT JOIN\n    user_profiles up ON u.id = up.user;",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2733323712");

  return app.delete(collection);
})
