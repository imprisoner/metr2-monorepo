migrate((app) => {
  /**
   * Хелпер: создаёт базовый справочник {id, name} + UNIQUE индекс
   * и заполняет начальными значениями.
   */
  function createDict(name, values) {
    const collection = new Collection({
      type: "base",
      name,
      system: false,
      listRule: "",      // читать всем
      viewRule: "",      // читать запись всем
      createRule: null,  // запрещено через API
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: "name", type: "text", required: true }
      ],
      indexes: [
        `CREATE UNIQUE INDEX idx_${name}_name ON ${name} (name)`
      ],
    });

    // создаём коллекцию
    app.save(collection);

    // наполняем
    const coll = app.findCollectionByNameOrId(name);
    for (const v of values) {
      const rec = new Record(coll);
      rec.set("name", v);
      app.save(rec);
    }
  }

  // === Справочники ===
  createDict("dict_house_series", [
    "Старый фонд", "Сталинка", "Хрущёвка", "Брежневка", "90-е", "Современный",
  ]);

  createDict("dict_build_year", [
    "до 1957", "1958–1968", "1969–1985", "1990–2000", "2000–н.в.",
  ]);

  createDict("dict_floor_structure", [
    "Деревянные", "Ж/Б", "Монолит", "Комбинированные",
  ]);

  createDict("dict_storeys", [
    "1–4", "5–9", "10–16", "16+ этажей",
  ]);

  createDict("dict_elevator", [
    "Есть", "Нет",
  ]);

  createDict("dict_building_category", [
    "Многоквартирный", "Апарт-комплекс", "Клубный дом",
  ]);

  createDict("dict_object_status", [
    "Жилое", "Апартамент", "Коммерческое", "Нежилое",
  ]);

  createDict("dict_parking", [
    "Подземная", "Наземная", "Во дворе", "Закрытый двор",
  ]);

  createDict("dict_flat_type", [
    "Студия", "1-комн", "2-комн", "3-комн", "4+",
  ]);

  createDict("dict_square_m2", [
    "<20 м²", "20–30", "30–45", "45–60", "60+ м²",
  ]);

  createDict("dict_finishing", [
    "Без отделки", "White box", "Косметика", "Отделка от застройщика", "Дизайнерская", "В процессе ремонта",
  ]);

  createDict("dict_layout", [
    "Смежные", "Изолированные", "Евроформат",
  ]);

  createDict("dict_ceiling_height", [
    "<2.5 м", "2.5–2.7 м", "2.8–3.2 м", "3.2+ м",
  ]);

  createDict("dict_floor", [
    "1", "2–4", "5–9", "10+",
  ]);

  createDict("dict_balcony", [
    "Есть", "Нет",
  ]);

  createDict("dict_price_per_m2", [
    "140–190 тыс.", "200–250 тыс.", "300+ тыс. ₽/м²",
  ]);

  return;
}, (app) => {
  // Откат: удаляем коллекции (порядок не критичен, но оставим явным)
  const names = [
    "dict_price_per_m2",
    "dict_balcony",
    "dict_floor",
    "dict_ceiling_height",
    "dict_layout",
    "dict_finishing",
    "dict_area",
    "dict_flat_type",
    "dict_parking",
    "dict_object_status",
    "dict_building_category",
    "dict_elevator",
    "dict_storeys",
    "dict_floor_structure",
    "dict_build_year",
    "dict_house_series",
  ];
  for (const n of names) {
    const c = app.findCollectionByNameOrId(n);
    app.delete(c);
  }
  return;
});