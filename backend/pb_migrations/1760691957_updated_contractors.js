/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1454814972")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey_pbc_1454814972` ON `contractors` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email_pbc_1454814972` ON `contractors` (`email`) WHERE `email` != ''",
      "CREATE UNIQUE INDEX `idx_4UpFXxTcxS` ON `contractors` (`hrid`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1454814972")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey_pbc_1454814972` ON `contractors` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email_pbc_1454814972` ON `contractors` (`email`) WHERE `email` != ''"
    ]
  }, collection)

  return app.save(collection)
})
