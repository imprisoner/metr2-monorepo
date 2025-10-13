/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT id, specialtyService FROM contractors_services;\n\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2044573258",
    "hidden": false,
    "id": "_clone_DWzt",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "specialtyService",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT DISTINCT specialty as id FROM dict_specialty_services;\n\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_DWzt")

  return app.save(collection)
})
