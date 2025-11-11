/// <reference path="../pb_data/types.d.ts" />
// @request.auth.id = @request.body.contractor && @request.body.published:isset = false && @request.body.publishDate:isset = false
// @request.auth.id = contractor && @request.body.published:isset = false && @request.body.publishDate:isset = false
const relatedCollectionsNames = [
  // "contractors_services", 
  // "contractors_cities", 
  "contractors_blog_posts",
  // "contractors_posts", 
  // "contractors_info"
]

const tempEmailFieldName = "temp_user_email"

migrate((app) => {
  const collection = app.findCollectionByNameOrId("contractors_blog_posts")

  // удаляем невалидное правило на UPDATE

  unmarshal({
    "updateRule": null
  }, collection)

  // Создать мапу [post.id]: contractor.id

  const idToContractorMap = app.findAllRecords(collection).reduce((acc, record) => {
    acc[record.get("id")] = record.get("contractor")
    return acc
  }, {})

  // пересоздаём поле contractor
  collection.fields.removeByName("contractor")

  const contractorsCollection = app.findCollectionByNameOrId("contractors")

  collection.fields.add(new Field({
    "cascadeDelete": false,
    "collectionId": contractorsCollection.id,
    "hidden": false,
    "maxSelect": 1,
    "minSelect": 0,
    "name": "contractor",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  app.save(collection)

  // записываем в поле contractor айдишники из мапы

  const records = app.findAllRecords(collection)


  records.forEach((record) => {
    const value = idToContractorMap[record.get("id")]

    record.set("contractor", value)

    app.save(record)
  })

  // создаём новое поле пользователя

  collection.fields.add(new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("contractors_blog_posts")

  unmarshal({
    "updateRule": "@request.auth.id = contractor && @request.body.published:isset = false && @request.body.publishDate:isset = false"
  }, collection)

  collection.fields.removeByName("user")

  app.save(collection)
})
