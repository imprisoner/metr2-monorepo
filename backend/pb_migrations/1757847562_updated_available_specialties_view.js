/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT DISTINCT specialty as id FROM (SELECT cs.specialtyService as id, name, specialty FROM contractors_services as cs \nLEFT JOIN dict_specialty_services as dss ON cs.`specialtyService` = dss.id) as available_specialties;\n\n"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3211450909")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT DISTINCT specialty as id FROM (SELECT cs.specialtyService as id, name, specialty FROM contractors_services as cs \nLEFT JOIN dict_specialty_services as dss ON cs.`specialtyService` = dss.id);\n\n"
  }, collection)

  return app.save(collection)
})
