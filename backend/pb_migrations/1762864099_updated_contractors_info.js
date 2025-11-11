/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3433200267")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_IackqcigQL` ON `deprecated_contractors_info` (`contractor`)",
      "CREATE UNIQUE INDEX `idx_hFNE3QvfYv` ON `deprecated_contractors_info` (`nickname`)"
    ],
    "name": "deprecated_contractors_info"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3433200267")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_IackqcigQL` ON `contractors_info` (`contractor`)",
      "CREATE UNIQUE INDEX `idx_hFNE3QvfYv` ON `contractors_info` (`nickname`)"
    ],
    "name": "contractors_info"
  }, collection)

  return app.save(collection)
})
