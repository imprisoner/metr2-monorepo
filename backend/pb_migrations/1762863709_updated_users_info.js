/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4205858761")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_sCrK5frrbG` ON `user_profiles` (`user`)"
    ],
    "name": "user_profiles"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4205858761")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_sCrK5frrbG` ON `users_info` (`user`)"
    ],
    "name": "users_info"
  }, collection)

  return app.save(collection)
})
