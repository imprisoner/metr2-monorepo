/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2981554211")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2981554211")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_gABnmqoYZQ` ON `users_blog_posts` (`user`)"
    ]
  }, collection)

  return app.save(collection)
})
