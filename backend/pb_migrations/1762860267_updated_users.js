/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey__pb_users_auth_` ON `users` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email__pb_users_auth_` ON `users` (`email`) WHERE `email` != ''",
      "CREATE UNIQUE INDEX `idx_T5ftFAM8Iv` ON `users` (`username`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("text1984153953")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "id[0-9]{10}",
    "hidden": false,
    "id": "text1984153953",
    "max": 12,
    "min": 12,
    "name": "hrid",
    "pattern": "^id[0-9]{10}$",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  app.save(collection)

  const records = app.findAllRecords(collection)

  records.forEach((record) => {
    record.set("hrid", generateStringByPattern("id", 10))
    app.save(record)
  })

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey__pb_users_auth_` ON `users` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email__pb_users_auth_` ON `users` (`email`) WHERE `email` != ''",
      "CREATE UNIQUE INDEX `idx_V7v6zKAXXP` ON `users` (`hrid`)",
      "CREATE UNIQUE INDEX `idx_T5ftFAM8Iv` ON `users` (`username`)"
    ]
  }, collection)

  return app.save(collection)
})

function generateStringByPattern(prefix = 'user', digitCount = 6) {
    if (digitCount <= 0) {
        throw new Error('Digit count must be positive');
    }
    
    const randomDigits = Array.from({length: digitCount}, () => 
        Math.floor(Math.random() * 10)
    ).join('');
    
    return `${prefix}${randomDigits}`;
}