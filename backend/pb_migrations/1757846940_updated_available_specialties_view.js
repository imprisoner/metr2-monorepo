/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT specialtyService as id FROM contractors_services as cs \nJOIN (SELECT specialty as id FROM dict_specialty_services as dss JOIN dict_specialties as ds on dss.specialty = ds.id);\n\n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT specialtyService as id FROM contractors_services as cs \nJOIN dict_specialty_services as dss ON dss.id = cs.`specialtyService`;\n\n"
  }, collection)

  return app.save(collection)
})
