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
        "id": "_clone_QaId",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "author",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "_clone_4Atp",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "_clone_UTYC",
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
      },
      {
        "hidden": false,
        "id": "_clone_le9b",
        "max": "",
        "min": "",
        "name": "publishDate",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "_clone_oA1s",
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
      },
      {
        "autogeneratePattern": "Без названия",
        "hidden": false,
        "id": "_clone_wIa3",
        "max": 0,
        "min": 0,
        "name": "title",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "_clone_paTz",
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
      },
      {
        "hidden": false,
        "id": "_clone_0BTy",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_2455737217",
        "hidden": false,
        "id": "_clone_IDsr",
        "maxSelect": 999,
        "minSelect": 0,
        "name": "tags",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "_clone_U7IW",
        "maxSize": 10485760,
        "name": "content_json",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "_clone_ne5O",
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
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_3883935755",
        "hidden": false,
        "id": "_clone_UVaN",
        "maxSelect": 2,
        "minSelect": 0,
        "name": "lastComments",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "json2199029708",
        "maxSize": 1,
        "name": "likesCount",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json2649503450",
        "maxSize": 1,
        "name": "commentsCount",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json2292962895",
        "maxSize": 1,
        "name": "flatId",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json790610960",
        "maxSize": 1,
        "name": "flatName",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json811211295",
        "maxSize": 1,
        "name": "authorUsername",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json2372647752",
        "maxSize": 1,
        "name": "authorAvatar",
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
      }
    ],
    "id": "pbc_3110997537",
    "indexes": [],
    "listRule": "",
    "name": "popular_posts_view",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT\n    p.id,\n    p.author,\n    p.created,\n    p.images,\n    p.publishDate,\n    p.status,\n    p.title,\n    p.type,\n    p.updated,\n    p.tags,\n    p.content_json,\n    p.videos,\n    p.lastComments,\n    (\n        SELECT COUNT(*)\n        FROM likes_posts lp\n        WHERE lp.post = p.id\n    ) AS likesCount,\n    (\n        SELECT COUNT(*)\n        FROM comments_posts cp\n        WHERE cp.post = p.id\n    ) AS commentsCount,\n    (\n        SELECT f.id\n        FROM post_flats pf\n        JOIN flats f ON pf.flat = f.id\n        WHERE pf.post = p.id\n        LIMIT 1\n    ) AS flatId,\n    (\n        SELECT f.nickname\n        FROM post_flats pf\n        JOIN flats f ON pf.flat = f.id\n        WHERE pf.post = p.id\n        LIMIT 1\n    ) AS flatName,\n    (\n        SELECT u.username\n        FROM users u\n        WHERE u.id = p.author\n    ) AS authorUsername,\n    (\n        SELECT u.avatar\n        FROM users u\n        WHERE u.id = p.author\n    ) AS authorAvatar,\n    (\n        SELECT JSON_GROUP_ARRAY(ss.name)\n        FROM post_services ps,\n             json_each(ps.services) AS je\n        JOIN dict_specialty_services ss ON je.value = ss.id\n        WHERE ps.post = p.id\n    ) AS services\nFROM\n    posts p\nORDER BY\n    likesCount DESC;\n",
    "viewRule": ""
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3110997537");

  return app.delete(collection);
})
