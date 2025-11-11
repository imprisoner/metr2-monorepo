/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const _records = app.findAllRecords("_pb_users_auth_")

  const [contractors, owners] = [
    _records.filter((record => record.get("role") === "contractor")),
    _records.filter((record => record.get("role") === "owner"))
  ]

  contractors.forEach((record) => {
    try {
      const profile = app.findFirstRecordByFilter("contractors_info", `user = "${record.id}"`)

      record.set("location", profile.get("location"))
      app.save(record)
    } catch { }
  })

  owners.forEach((record) => {
    try {
      const profile = app.findFirstRecordByFilter("users_info", `user = "${record.id}"`)
  
      record.set("location", profile.get("location"))
      app.save(record)
    } catch {}

  })

}, (app) => {
  // add down queries...
})
