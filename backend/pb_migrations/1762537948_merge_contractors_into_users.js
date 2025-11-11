/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // получить всех подрядчиков
  const contractors = app.findAllRecords("contractors")

  // если есть пользователь с таким же именем - выбросить
  const actualContractors = contractors.filter((record) => {
    const email = record.get("email")

    try {
      const matchedUser = app.findFirstRecordByFilter("users", `email = "${email}"`)
      return false
    } catch (_) {
      return true
    }
  })

  const DEFAULT_PASSWORD = "aaaa1111"
  const usersCollection = app.findCollectionByNameOrId("users")

  // создать новых пользователей из подрядчиков 

  actualContractors.forEach((record) => {
    const newRec = new Record(usersCollection)

    newRec.set("email", record.get("email"))
    newRec.set("verified", record.get("verified"))
    newRec.set("emailVisibility", record.get("emailVisibility"))
    newRec.set("name", record.get("name"))
    newRec.set("avatar", null)
    newRec.set("password", record.get("password") || DEFAULT_PASSWORD)
    newRec.set("role", "contractor")

    app.save(newRec)
  })

  // выставить у дублирующихся юзеров role = "contractor"

  const duplicated = app.findRecordsByFilter("users", `duplicated_temp = true`)

  console.log(duplicated.length)

  duplicated.forEach((record) => {
    record.set("role", "contractor")
    app.save(record)
  })

}, (app) => {
  const contractors = app.findRecordsByFilter("users", 'role="contractor" && duplicated_temp != true')

  contractors.forEach((record) => {
    app.delete(record)
  })

  const duplicated = app.findRecordsByFilter("users", `duplicated_temp = true`)

  duplicated.forEach((record) => {
    record.set("role", "owner")
    app.save(record)
  })
})
