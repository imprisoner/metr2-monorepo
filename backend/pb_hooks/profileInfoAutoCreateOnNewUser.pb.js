/// <reference path="../pb_data/types.d.ts" />

onRecordAfterCreateSuccess((e) => {
    const collectionName = e.record.collection().name === 'users' ? 'users_info' : 'contractors_info'
    const userRelationFieldName = e.record.collection().name === 'users' ? 'user' : 'contractor'
    const collection = $app.findCollectionByNameOrId(collectionName)

    const profileRecordData = {
      displayName: e.record.getString("name"),
      [userRelationFieldName]: e.record.id
    }

    const profileRecord = new Record(collection)

    Object.keys(profileRecordData).forEach((field) => {
      profileRecord.set(field, profileRecordData[field])
    })

    $app.save(profileRecord)

    e.next()
}, "users", "contractors")