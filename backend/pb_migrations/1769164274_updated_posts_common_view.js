/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3110997537")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n    p.id,\n    p.author,\n    p.created,\n    p.images,\n    p.publishDate,\n    p.status,\n    p.title,\n    p.type,\n    p.updated,\n    p.tags,\n    p.content_json,\n    p.videos,\n    p.lastComments,\n    CAST(\n        (\n            SELECT COUNT(*)\n            FROM likes_posts lp\n            WHERE lp.post = p.id\n        ) AS INTEGER\n    ) AS likesCount,\n    CAST(\n        (\n            SELECT COUNT(*)\n            FROM comments_posts cp\n            WHERE cp.post = p.id\n        ) AS INTEGER\n    ) AS commentsCount,\n    CAST(\n        (\n            SELECT f.id\n            FROM post_flats pf\n            JOIN flats f ON pf.flat = f.id\n            WHERE pf.post = p.id\n            LIMIT 1\n        ) AS TEXT\n    ) AS flatId,\n    CAST(\n        (\n            SELECT f.nickname\n            FROM post_flats pf\n            JOIN flats f ON pf.flat = f.id\n            WHERE pf.post = p.id\n            LIMIT 1\n        ) AS TEXT\n    ) AS flatName,\n    CAST(\n        (\n            SELECT u.username\n            FROM users u\n            WHERE u.id = p.author\n        ) AS TEXT\n    ) AS authorUsername,\n    CAST(\n        (\n            SELECT u.avatar\n            FROM users u\n            WHERE u.id = p.author\n        ) AS TEXT\n    ) AS authorAvatar,\n    (\n        SELECT JSON_GROUP_ARRAY(ss.name)\n        FROM post_services ps,\n             json_each(ps.services) AS je\n        JOIN dict_specialty_services ss ON je.value = ss.id\n        WHERE ps.post = p.id\n    ) AS services\nFROM\n    posts p\nORDER BY\n    likesCount DESC;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_xLyC")

  // remove field
  collection.fields.removeById("_clone_hpSI")

  // remove field
  collection.fields.removeById("_clone_U719")

  // remove field
  collection.fields.removeById("_clone_guLR")

  // remove field
  collection.fields.removeById("_clone_F5Hr")

  // remove field
  collection.fields.removeById("_clone_yqti")

  // remove field
  collection.fields.removeById("_clone_nDfc")

  // remove field
  collection.fields.removeById("_clone_uZZj")

  // remove field
  collection.fields.removeById("_clone_vGBh")

  // remove field
  collection.fields.removeById("_clone_XKLw")

  // remove field
  collection.fields.removeById("_clone_uVIp")

  // remove field
  collection.fields.removeById("_clone_Mh5F")

  // remove field
  collection.fields.removeById("json2199029708")

  // remove field
  collection.fields.removeById("json2649503450")

  // remove field
  collection.fields.removeById("json2292962895")

  // remove field
  collection.fields.removeById("json790610960")

  // remove field
  collection.fields.removeById("json811211295")

  // remove field
  collection.fields.removeById("json2372647752")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_WsA9",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "author",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_ZDia",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_PDcB",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "images",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_Sz4O",
    "max": "",
    "min": "",
    "name": "publishDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_ZdZl",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "draft",
      "published",
      "pending"
    ]
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "Без названия",
    "hidden": false,
    "id": "_clone_LPej",
    "max": 0,
    "min": 0,
    "name": "title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_XdZ8",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "blog",
      "journal",
      "portfolio"
    ]
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_Dzqx",
    "name": "updated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2455737217",
    "hidden": false,
    "id": "_clone_vgO8",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "tags",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_uOkF",
    "maxSize": 10485760,
    "name": "content_json",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "_clone_SuDL",
    "maxSelect": 99,
    "maxSize": 419430400,
    "mimeTypes": [
      "video/ogg",
      "video/mpeg",
      "video/quicktime",
      "video/mp4",
      "video/3gpp",
      "video/3gpp2",
      "video/quicktime",
      "video/x-m4v",
      "video/mj2",
      "video/vnd.dvb.file",
      "video/webm",
      "video/x-msvideo",
      "video/x-flv",
      "video/x-matroska",
      "video/x-ms-asf"
    ],
    "name": "videos",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3883935755",
    "hidden": false,
    "id": "_clone_9fUD",
    "maxSelect": 2,
    "minSelect": 0,
    "name": "lastComments",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "number2199029708",
    "max": null,
    "min": null,
    "name": "likesCount",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "number2649503450",
    "max": null,
    "min": null,
    "name": "commentsCount",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2292962895",
    "max": 0,
    "min": 0,
    "name": "flatId",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text790610960",
    "max": 0,
    "min": 0,
    "name": "flatName",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text811211295",
    "max": 0,
    "min": 0,
    "name": "authorUsername",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(18, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2372647752",
    "max": 0,
    "min": 0,
    "name": "authorAvatar",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3110997537")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT\n    p.id,\n    p.author,\n    p.created,\n    p.images,\n    p.publishDate,\n    p.status,\n    p.title,\n    p.type,\n    p.updated,\n    p.tags,\n    p.content_json,\n    p.videos,\n    p.lastComments,\n    (\n        SELECT COUNT(*)\n        FROM likes_posts lp\n        WHERE lp.post = p.id\n    ) AS likesCount,\n    (\n        SELECT COUNT(*)\n        FROM comments_posts cp\n        WHERE cp.post = p.id\n    ) AS commentsCount,\n    (\n        SELECT f.id\n        FROM post_flats pf\n        JOIN flats f ON pf.flat = f.id\n        WHERE pf.post = p.id\n        LIMIT 1\n    ) AS flatId,\n    (\n        SELECT f.nickname\n        FROM post_flats pf\n        JOIN flats f ON pf.flat = f.id\n        WHERE pf.post = p.id\n        LIMIT 1\n    ) AS flatName,\n    (\n        SELECT u.username\n        FROM users u\n        WHERE u.id = p.author\n    ) AS authorUsername,\n    (\n        SELECT u.avatar\n        FROM users u\n        WHERE u.id = p.author\n    ) AS authorAvatar,\n    (\n        SELECT JSON_GROUP_ARRAY(ss.name)\n        FROM post_services ps,\n             json_each(ps.services) AS je\n        JOIN dict_specialty_services ss ON je.value = ss.id\n        WHERE ps.post = p.id\n    ) AS services\nFROM\n    posts p\nORDER BY\n    likesCount DESC;\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_xLyC",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "author",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_hpSI",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_U719",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "images",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_guLR",
    "max": "",
    "min": "",
    "name": "publishDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_F5Hr",
    "maxSelect": 1,
    "name": "status",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "draft",
      "published",
      "pending"
    ]
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "Без названия",
    "hidden": false,
    "id": "_clone_yqti",
    "max": 0,
    "min": 0,
    "name": "title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_nDfc",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "blog",
      "journal",
      "portfolio"
    ]
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_uZZj",
    "name": "updated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2455737217",
    "hidden": false,
    "id": "_clone_vGBh",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "tags",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_XKLw",
    "maxSize": 10485760,
    "name": "content_json",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "_clone_uVIp",
    "maxSelect": 99,
    "maxSize": 419430400,
    "mimeTypes": [
      "video/ogg",
      "video/mpeg",
      "video/quicktime",
      "video/mp4",
      "video/3gpp",
      "video/3gpp2",
      "video/quicktime",
      "video/x-m4v",
      "video/mj2",
      "video/vnd.dvb.file",
      "video/webm",
      "video/x-msvideo",
      "video/x-flv",
      "video/x-matroska",
      "video/x-ms-asf"
    ],
    "name": "videos",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3883935755",
    "hidden": false,
    "id": "_clone_Mh5F",
    "maxSelect": 2,
    "minSelect": 0,
    "name": "lastComments",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "json2199029708",
    "maxSize": 1,
    "name": "likesCount",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "json2649503450",
    "maxSize": 1,
    "name": "commentsCount",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "hidden": false,
    "id": "json2292962895",
    "maxSize": 1,
    "name": "flatId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "hidden": false,
    "id": "json790610960",
    "maxSize": 1,
    "name": "flatName",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "json811211295",
    "maxSize": 1,
    "name": "authorUsername",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(18, new Field({
    "hidden": false,
    "id": "json2372647752",
    "maxSize": 1,
    "name": "authorAvatar",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // remove field
  collection.fields.removeById("_clone_WsA9")

  // remove field
  collection.fields.removeById("_clone_ZDia")

  // remove field
  collection.fields.removeById("_clone_PDcB")

  // remove field
  collection.fields.removeById("_clone_Sz4O")

  // remove field
  collection.fields.removeById("_clone_ZdZl")

  // remove field
  collection.fields.removeById("_clone_LPej")

  // remove field
  collection.fields.removeById("_clone_XdZ8")

  // remove field
  collection.fields.removeById("_clone_Dzqx")

  // remove field
  collection.fields.removeById("_clone_vgO8")

  // remove field
  collection.fields.removeById("_clone_uOkF")

  // remove field
  collection.fields.removeById("_clone_SuDL")

  // remove field
  collection.fields.removeById("_clone_9fUD")

  // remove field
  collection.fields.removeById("number2199029708")

  // remove field
  collection.fields.removeById("number2649503450")

  // remove field
  collection.fields.removeById("text2292962895")

  // remove field
  collection.fields.removeById("text790610960")

  // remove field
  collection.fields.removeById("text811211295")

  // remove field
  collection.fields.removeById("text2372647752")

  return app.save(collection)
})
