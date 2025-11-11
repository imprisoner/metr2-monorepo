/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4205858761")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_sCrK5frrbG` ON `users_info` (`user`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("relation1587448267")

  // remove field
  collection.fields.removeById("text1731158936")

  // remove field
  collection.fields.removeById("text2710109796")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4205858761")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_sCrK5frrbG` ON `users_info` (`user`)",
      "CREATE UNIQUE INDEX `idx_39DozHxB8S` ON `users_info` (`nickname`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2793403141",
    "hidden": false,
    "id": "relation1587448267",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "location",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1731158936",
    "max": 0,
    "min": 0,
    "name": "displayName",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "User[0-9]{6}",
    "hidden": false,
    "id": "text2710109796",
    "max": 30,
    "min": 1,
    "name": "nickname",
    "pattern": "^[a-zA-Z0-9]+$",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
