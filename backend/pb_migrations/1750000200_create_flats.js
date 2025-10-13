/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // Получаем id справочников для relation полей
  const idOf = (name) => app.findCollectionByNameOrId(name).id;

  const dict = {
    series: idOf("dict_house_series"),
    buildYear: idOf("dict_build_year"),
    floorStructure: idOf("dict_floor_structure"),
    storeys: idOf("dict_storeys"),
    elevator: idOf("dict_elevator"),
    buildingCategory: idOf("dict_building_category"),
    objectStatus: idOf("dict_object_status"),
    flatType: idOf("dict_flat_type"),
    squareM2: idOf("dict_square_m2"),
    finishing: idOf("dict_finishing"),
    layout: idOf("dict_layout"),
    ceilingHeight: idOf("dict_ceiling_height"),
    floor: idOf("dict_floor"),
    balcony: idOf("dict_balcony"),
    pricePerM2: idOf("dict_price_per_m2"),
  };

  const collection = new Collection({
    type: "base",
    name: "flats",
    system: false,
    listRule: "",      // читать всем
    viewRule: "",      // читать запись всем
    createRule: null,  // запрещено через публичный API (меняй по необходимости)
    updateRule: null,
    deleteRule: null,

    // только прикладные поля — системные (id, created, updated) добавятся сами
    fields: [
      // одиночные справочники (максимум 1 ссылка)
      { name: "series",           type: "relation", collectionId: dict.series,           required: false, maxSelect: 1, cascadeDelete: false },
      { name: "buildYear",        type: "relation", collectionId: dict.buildYear,        required: false, maxSelect: 1, cascadeDelete: false },
      { name: "floorStructure",   type: "relation", collectionId: dict.floorStructure,   required: false, maxSelect: 1, cascadeDelete: false },
      { name: "storeys",          type: "relation", collectionId: dict.storeys,          required: false, maxSelect: 1, cascadeDelete: false },
      { name: "elevator",         type: "relation", collectionId: dict.elevator,         required: false, maxSelect: 1, cascadeDelete: false },
      { name: "buildingCategory", type: "relation", collectionId: dict.buildingCategory, required: false, maxSelect: 1, cascadeDelete: false },
      { name: "objectStatus",     type: "relation", collectionId: dict.objectStatus,     required: false, maxSelect: 1, cascadeDelete: false },
      { name: "flatType",         type: "relation", collectionId: dict.flatType,         required: false, maxSelect: 1, cascadeDelete: false },
      { name: "squareM2",         type: "relation", collectionId: dict.squareM2,         required: false, maxSelect: 1, cascadeDelete: false },
      { name: "finishing",        type: "relation", collectionId: dict.finishing,        required: false, maxSelect: 1, cascadeDelete: false },
      { name: "layout",           type: "relation", collectionId: dict.layout,           required: false, maxSelect: 1, cascadeDelete: false },
      { name: "ceilingHeight",    type: "relation", collectionId: dict.ceilingHeight,    required: false, maxSelect: 1, cascadeDelete: false },
      { name: "floor",            type: "relation", collectionId: dict.floor,            required: false, maxSelect: 1, cascadeDelete: false },
      { name: "balcony",          type: "relation", collectionId: dict.balcony,          required: false, maxSelect: 1, cascadeDelete: false },
      { name: "pricePerM2",       type: "relation", collectionId: dict.pricePerM2,       required: false, maxSelect: 1, cascadeDelete: false },

      // множественный справочник (парковка/двор)
      // { name: "parking",          type: "relation", collectionId: dict.parking,          required: false, maxSelect: 4, cascadeDelete: false },

      // при необходимости можно добавить "сырые" поля, напр. адрес или площадь
      // { name: "address", type: "text", required: false, max: 500 },
      // { name: "area_m2_exact", type: "number", required: false, min: 0 },
    ],

    // Индексы для ускорения фильтрации (на single-relation полях)
    // indexes: [
    //   "CREATE INDEX idx_flats_series           ON flats (series)",
    //   "CREATE INDEX idx_flats_build_year       ON flats (build_year)",
    //   "CREATE INDEX idx_flats_floor_structure  ON flats (floor_structure)",
    //   "CREATE INDEX idx_flats_storeys          ON flats (storeys)",
    //   "CREATE INDEX idx_flats_elevator         ON flats (elevator)",
    //   "CREATE INDEX idx_flats_building_categoryON flats (building_category)",
    //   "CREATE INDEX idx_flats_object_status    ON flats (object_status)",
    //   "CREATE INDEX idx_flats_flat_type        ON flats (flat_type)",
    //   "CREATE INDEX idx_flats_area             ON flats (area)",
    //   "CREATE INDEX idx_flats_finishing        ON flats (condition)",
    //   "CREATE INDEX idx_flats_layout           ON flats (layout)",
    //   "CREATE INDEX idx_flats_ceiling_height   ON flats (ceiling_height)",
    //   "CREATE INDEX idx_flats_floor            ON flats (floor)",
    //   "CREATE INDEX idx_flats_balcony          ON flats (balcony)",
    //   "CREATE INDEX idx_flats_price_per_m2     ON flats (price_per_m2)",
    //   // индекс на parking (multi-relation) не добавляем — хранится во внутренней rel-таблице
    // ],
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("flats");
  return app.delete(collection);
});