/// <reference path="../pb_data/types.d.ts" />

onRecordAfterCreateSuccess((e) => {
  const collection = $app.findCollectionByNameOrId("user_profiles")

  const profileRecord = new Record(collection)

  profileRecord.set('user', e.record.id)

  $app.save(profileRecord)

  e.next()
}, "users")