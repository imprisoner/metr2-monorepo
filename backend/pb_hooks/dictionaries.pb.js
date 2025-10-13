/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/api/dictionaries", (c) => {
  // список всех справочников
  function snakeToCamel(str) {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
  }

  const dicts = require(`${__hooks}/const/dictNames.js`).names

  const filters = [];

  dicts.forEach((name) => {
    const records = $app.findAllRecords(name);

    const mapField = name.replace("dict_", "");

    const camelCaseMapField = snakeToCamel(mapField);

    const result = {
      field: camelCaseMapField,
      values: records.map((r) => ({ id: r.getString("id"), name: r.getString("name") })),
    };

    filters.push(result);
  });

  return c.json(200, filters);
});