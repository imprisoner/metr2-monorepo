/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const citiesColl = app.findCollectionByNameOrId("dict_cities");
  const regionsColl = app.findCollectionByNameOrId("dict_regions");

  if (!citiesColl) {
    throw new Error("Collection dict_cities not found");
  }

  const getAllCities = () => app.findRecordsByFilter("dict_cities", "", "", 2000, 0)

  const oldCities = getAllCities();
  // удаляем старое текстовое поле region (если есть)
  citiesColl.fields = citiesColl.fields.filter(f => f.name !== "region");

  // добавляем relation-поле region → dict_regions
  citiesColl.fields.add(new Field(
    {
      id: "rel_region_" + Math.random().toString(36).slice(2, 10),
      name: "region",
      type: "relation",
      required: false,
      system: false,
      hidden: false,
      collectionId: regionsColl.id,
      cascadeDelete: false,
      minSelect: null,
      maxSelect: 1,
      displayFields: ["name"],
    }
  ));

  app.save(citiesColl);

  // пытаемся связать города с их регионами по guid, если совпадает
  try {
    const newCities = getAllCities();
    
    for (const city of newCities) {
      const oldCity = oldCities.find((oldCity) => oldCity.id === city.id);

      // console.log(JSON.stringify(oldCity))

      const regionGuid = oldCity.get("region")
      // const blabla = oldCity.region; // старое значение guid региона
      // console.log("REGION GUID from city record: ", regionGuid)
      // console.log("CITY NAME ", JSON.stringify(city))
      if (!regionGuid) continue;

      try {
        const region = app.findFirstRecordByFilter(
          "dict_regions",
          "guid = {:guid}",
          { guid: regionGuid }
        );
        console.log(region.id)
        if (region) {
          city.set("region", region.id);
          app.save(city);
        }
      } catch (_) {
        console.log("REGION IS NOT FOUND")
        // если регион не найден — пропускаем
      }
    }
  } catch (e) {
    console.log("Error linking cities with regions:", e);
  }

  return;
}, (app) => {
  const collection = app.findCollectionByNameOrId("dict_cities");

  if (!collection) {
    throw new Error("Collection dict_cities not found");
  }

  // возвращаем текстовое поле region
  collection.fields.removeByName('region')

  collection.fields.add(new Field(
    {
      id: "text_region_" + Math.random().toString(36).slice(2, 10),
      name: "region",
      type: "text",
      required: false,
      system: false,
      hidden: false,
    }
  ));

  app.save(collection);
});
