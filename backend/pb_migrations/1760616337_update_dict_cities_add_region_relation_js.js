/// <reference path="../pb_data/types.d.ts" />

migrate((app) => {
  const getAllCities = () => app.findRecordsByFilter("dict_cities", "", "", 2000, 0)

  const citiesColl = app.findCollectionByNameOrId("dict_cities");
  const regionsColl = app.findCollectionByNameOrId("dict_regions");

  if (!citiesColl) {
    throw new Error("Collection dict_cities not found");
  }

  const oldCities = getAllCities(app);
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
    const newCities = getAllCities(app);
    
    for (const city of newCities) {
      const oldCity = oldCities.find((oldCity) => oldCity.id === city.id);
      const regionGuid = oldCity.get("region")
      
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
  const getAllCities = () => app.findRecordsByFilter("dict_cities", "", "", 2000, 0)
  const citiesColl = app.findCollectionByNameOrId("dict_cities");

  if (!citiesColl) {
    throw new Error("Collection dict_cities not found");
  }

  const oldCities = getAllCities(app)

  // возвращаем текстовое поле region
  citiesColl.fields.removeByName('region')

  citiesColl.fields.add(new Field(
    {
      id: "text_region_" + Math.random().toString(36).slice(2, 10),
      name: "region",
      type: "text",
      required: false,
      system: false,
      hidden: false,
    }
  ));

  app.save(citiesColl);

  try {
    const newCities = getAllCities(app);
    
    for (const city of newCities) {
      const oldCity = oldCities.find((oldCity) => oldCity.id === city.id);
      const regionId = oldCity.get("region")
      if (!regionId) continue;
      try {
        const region = app.findRecordById('dict_regions', regionId)
        if (region) {
          city.set("region", region.getString('guid'));
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
});
