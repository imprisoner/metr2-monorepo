/// <reference path="../pb_data/types.d.ts" />
// === SEED ===
const seedData = [
  {
    "name": "Адыгея",
    "label": "adygea",
    "guid": "d8327a56-80de-4df2-815c-4f6ab1224c50",
    "code": "01",
    "iso_3166-2": "RU-AD",
    "fullname": "Республика Адыгея",
    "name_en": "Republic of Adygea",
    "district": "Южный",
    "capital": "Майкоп"
  },
  {
    "name": "Башкортостан",
    "label": "bashkortostan",
    "guid": "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
    "code": "02",
    "iso_3166-2": "RU-BA",
    "fullname": "Республика Башкортостан",
    "name_en": "Republic of Bashkortostan",
    "district": "Приволжский",
    "capital": "Уфа"
  },
  {
    "name": "Бурятия",
    "label": "buryatiya",
    "guid": "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
    "code": "03",
    "iso_3166-2": "RU-BU",
    "fullname": "Республика Бурятия",
    "name_en": "Republic of Buryatia",
    "district": "Дальневосточный",
    "capital": "Улан-Удэ"
  },
  {
    "name": "Алтай",
    "label": "altaj",
    "guid": "5c48611f-5de6-4771-9695-7e36a4e7529d",
    "code": "04",
    "iso_3166-2": "RU-AL",
    "fullname": "Республика Алтай",
    "name_en": "Altai Republic",
    "district": "Сибирский",
    "capital": "Горно-Алтайск"
  },
  {
    "name": "Дагестан",
    "label": "dagestan",
    "guid": "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
    "code": "05",
    "iso_3166-2": "RU-DA",
    "fullname": "Республика Дагестан",
    "name_en": "Dagestan",
    "district": "Северо-Кавказский",
    "capital": "Махачкала"
  },
  {
    "name": "Ингушетия",
    "label": "ingushetiya",
    "guid": "b2d8cd20-cabc-4deb-afad-f3c4b4d55821",
    "code": "06",
    "iso_3166-2": "RU-IN",
    "fullname": "Республика Ингушетия",
    "name_en": "Ingushetia",
    "district": "Северо-Кавказский",
    "capital": "Магас"
  },
  {
    "name": "Кабардино-Балкарская",
    "label": "kabardino_balkariya",
    "guid": "1781f74e-be4a-4697-9c6b-493057c94818",
    "code": "07",
    "iso_3166-2": "RU-KB",
    "fullname": "Кабардино-Балкарская Республика",
    "name_en": "Kabardino-Balkarian Republic",
    "district": "Северо-Кавказский",
    "capital": "Нальчик"
  },
  {
    "name": "Калмыкия",
    "label": "kalmykiya",
    "guid": "491cde9d-9d76-4591-ab46-ea93c079e686",
    "code": "08",
    "iso_3166-2": "RU-KL",
    "fullname": "Республика Калмыкия",
    "name_en": "Kalmykia",
    "district": "Южный",
    "capital": "Элиста"
  },
  {
    "name": "Карачаево-Черкесская",
    "label": "karachaevo_cherkesiya",
    "guid": "61b95807-388a-4cb1-9bee-889f7cf811c8",
    "code": "09",
    "iso_3166-2": "RU-KC",
    "fullname": "Карачаево-Черкесская Республика",
    "name_en": "Karachay-Cherkessia",
    "district": "Северо-Кавказский",
    "capital": "Черкесск"
  },
  {
    "name": "Карелия",
    "label": "kareliya",
    "guid": "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
    "code": 10,
    "iso_3166-2": "RU-KR",
    "fullname": "Республика Карелия",
    "name_en": "Karelia",
    "district": "Северо-Западный",
    "capital": "Петрозаводск"
  },
  {
    "name": "Коми",
    "label": "komi",
    "guid": "c20180d9-ad9c-46d1-9eff-d60bc424592a",
    "code": "11",
    "iso_3166-2": "RU-KO",
    "fullname": "Республика Коми",
    "name_en": "Komi Republic",
    "district": "Северо-Западный",
    "capital": "Сыктывкар"
  },
  {
    "name": "Марий Эл",
    "label": "marij_el",
    "guid": "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
    "code": 12,
    "iso_3166-2": "RU-ME",
    "fullname": "Республика Марий Эл",
    "name_en": "Mari El",
    "district": "Приволжский",
    "capital": "Йошкар-Ола"
  },
  {
    "name": "Мордовия",
    "label": "mordoviya",
    "guid": "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
    "code": "13",
    "iso_3166-2": "RU-MO",
    "fullname": "Республика Мордовия",
    "name_en": "Republic of Mordovia",
    "district": "Приволжский",
    "capital": "Саранск"
  },
  {
    "name": "Саха /Якутия/",
    "label": "yakutiya",
    "guid": "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
    "code": "14",
    "iso_3166-2": "RU-SA",
    "fullname": "Республика Саха /Якутия/",
    "name_en": "Republic of Sakha (Yakutia)",
    "district": "Дальневосточный",
    "capital": "Якутск"
  },
  {
    "name": "Северная Осетия - Алания",
    "label": "severnaya_osetiya",
    "guid": "de459e9c-2933-4923-83d1-9c64cfd7a817",
    "code": "15",
    "iso_3166-2": "RU-SE",
    "fullname": "Республика Северная Осетия - Алания",
    "name_en": "Republic of North Ossetia–Alania",
    "district": "Северо-Кавказский",
    "capital": "Владикавказ"
  },
  {
    "name": "Татарстан",
    "label": "tatarstan",
    "guid": "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
    "code": "16",
    "iso_3166-2": "RU-TA",
    "fullname": "Республика Татарстан",
    "name_en": "Republic of Tatarstan",
    "district": "Приволжский",
    "capital": "Казань"
  },
  {
    "name": "Тыва",
    "label": "tyva",
    "guid": "026bc56f-3731-48e9-8245-655331f596c0",
    "code": 17,
    "iso_3166-2": "RU-TY",
    "fullname": "Республика Тыва",
    "name_en": "Tuva Republic",
    "district": "Сибирский",
    "capital": "Кызыл"
  },
  {
    "name": "Удмуртская",
    "label": "udmurtskaya",
    "guid": "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
    "code": "18",
    "iso_3166-2": "RU-UD",
    "fullname": "Удмуртская Республика",
    "name_en": "Udmurtia",
    "district": "Приволжский",
    "capital": "Ижевск"
  },
  {
    "name": "Хакасия",
    "label": "hakasiya",
    "guid": "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
    "code": 19,
    "iso_3166-2": "RU-KK",
    "fullname": "Республика Хакасия",
    "name_en": "Republic of Khakassia",
    "district": "Сибирский",
    "capital": "Абакан"
  },
  {
    "name": "Чеченская",
    "label": "chechnya",
    "guid": "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
    "code": "20",
    "iso_3166-2": "RU-CE",
    "fullname": "Чеченская Республика",
    "name_en": "Chechen Republic",
    "district": "Северо-Кавказский",
    "capital": "Грозный"
  },
  {
    "name": "Чувашская",
    "label": "chuvashskaya",
    "guid": "878fc621-3708-46c7-a97f-5a13a4176b3e",
    "code": "21",
    "iso_3166-2": "RU-CU",
    "fullname": "Чувашская Республика",
    "name_en": "Chuvash Republic",
    "district": "Приволжский",
    "capital": "Чебоксары"
  },
  {
    "name": "Алтайский",
    "label": "altajskij",
    "guid": "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
    "code": "22",
    "iso_3166-2": "RU-ALT",
    "fullname": "Алтайский край",
    "name_en": "Altai Krai",
    "district": "Сибирский",
    "capital": "Барнаул"
  },
  {
    "name": "Краснодарский",
    "label": "krasnodarskij",
    "guid": "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
    "code": "23",
    "iso_3166-2": "RU-KDA",
    "fullname": "Краснодарский край",
    "name_en": "Krasnodar Krai",
    "district": "Южный",
    "capital": "Краснодар"
  },
  {
    "name": "Красноярский",
    "label": "krasnoyarskij",
    "guid": "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
    "code": "24",
    "iso_3166-2": "RU-KYA",
    "fullname": "Красноярский край",
    "name_en": "Krasnoyarsk Krai",
    "district": "Сибирский",
    "capital": "Красноярск"
  },
  {
    "name": "Приморский",
    "label": "primorskij",
    "guid": "43909681-d6e1-432d-b61f-ddac393cb5da",
    "code": "25",
    "iso_3166-2": "RU-PRI",
    "fullname": "Приморский край",
    "name_en": "Primorsky Krai",
    "district": "Дальневосточный",
    "capital": "Владивосток"
  },
  {
    "name": "Ставропольский",
    "label": "stavropolskij",
    "guid": "327a060b-878c-4fb4-8dc4-d5595871a3d8",
    "code": "26",
    "iso_3166-2": "RU-STA",
    "fullname": "Ставропольский край",
    "name_en": "Stavropol Krai",
    "district": "Северо-Кавказский",
    "capital": "Ставрополь"
  },
  {
    "name": "Хабаровский",
    "label": "habarovskij",
    "guid": "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
    "code": 27,
    "iso_3166-2": "RU-KHA",
    "fullname": "Хабаровский край",
    "name_en": "Khabarovsk Krai",
    "district": "Дальневосточный",
    "capital": "Хабаровск"
  },
  {
    "name": "Амурская",
    "label": "amurskaya",
    "guid": "844a80d6-5e31-4017-b422-4d9c01e9942c",
    "code": 28,
    "iso_3166-2": "RU-AMU",
    "fullname": "Амурская область",
    "name_en": "Amur Oblast",
    "district": "Дальневосточный",
    "capital": "Благовещенск"
  },
  {
    "name": "Архангельская",
    "label": "arhangelskaya",
    "guid": "294277aa-e25d-428c-95ad-46719c4ddb44",
    "code": 29,
    "iso_3166-2": "RU-ARK",
    "fullname": "Архангельская область",
    "name_en": "Arkhangelsk Oblast",
    "district": "Северо-Западный",
    "capital": "Архангельск"
  },
  {
    "name": "Астраханская",
    "label": "astrahanskaya",
    "guid": "83009239-25cb-4561-af8e-7ee111b1cb73",
    "code": "30",
    "iso_3166-2": "RU-AST",
    "fullname": "Астраханская область",
    "name_en": "Astrakhan Oblast",
    "district": "Южный",
    "capital": "Астрахань"
  },
  {
    "name": "Белгородская",
    "label": "belgorodskaya",
    "guid": "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
    "code": 31,
    "iso_3166-2": "RU-BEL",
    "fullname": "Белгородская область",
    "name_en": "Belgorod Oblast",
    "district": "Центральный",
    "capital": "Белгород"
  },
  {
    "name": "Брянская",
    "label": "bryanskaya",
    "guid": "f5807226-8be0-4ea8-91fc-39d053aec1e2",
    "code": 32,
    "iso_3166-2": "RU-BRY",
    "fullname": "Брянская область",
    "name_en": "Bryansk Oblast",
    "district": "Центральный",
    "capital": "Брянск"
  },
  {
    "name": "Владимирская",
    "label": "vladimirskaya",
    "guid": "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
    "code": 33,
    "iso_3166-2": "RU-VLA",
    "fullname": "Владимирская область",
    "name_en": "Vladimir Oblast",
    "district": "Центральный",
    "capital": "Владимир"
  },
  {
    "name": "Волгоградская",
    "label": "volgogradskaya",
    "guid": "da051ec8-da2e-4a66-b542-473b8d221ab4",
    "code": "34",
    "iso_3166-2": "RU-VGG",
    "fullname": "Волгоградская область",
    "name_en": "Volgograd Oblast",
    "district": "Южный",
    "capital": "Волгоград"
  },
  {
    "name": "Вологодская",
    "label": "vologodskaya",
    "guid": "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
    "code": 35,
    "iso_3166-2": "RU-VLG",
    "fullname": "Вологодская область",
    "name_en": "Vologda Oblast",
    "district": "Северо-Западный",
    "capital": "Вологда"
  },
  {
    "name": "Воронежская",
    "label": "voronezhskaya",
    "guid": "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
    "code": "36",
    "iso_3166-2": "RU-VOR",
    "fullname": "Воронежская область",
    "name_en": "Voronezh Oblast",
    "district": "Центральный",
    "capital": "Воронеж"
  },
  {
    "name": "Ивановская",
    "label": "ivanovskaya",
    "guid": "0824434f-4098-4467-af72-d4f702fed335",
    "code": 37,
    "iso_3166-2": "RU-IVA",
    "fullname": "Ивановская область",
    "name_en": "Ivanovo Oblast",
    "district": "Центральный",
    "capital": "Иваново"
  },
  {
    "name": "Иркутская",
    "label": "irkutskaya",
    "guid": "6466c988-7ce3-45e5-8b97-90ae16cb1249",
    "code": "38",
    "iso_3166-2": "RU-IRK",
    "fullname": "Иркутская область",
    "name_en": "Irkutsk Oblast",
    "district": "Сибирский",
    "capital": "Иркутск"
  },
  {
    "name": "Калининградская",
    "label": "kaliningradskaya",
    "guid": "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
    "code": "39",
    "iso_3166-2": "RU-KGD",
    "fullname": "Калининградская область",
    "name_en": "Kaliningrad Oblast",
    "district": "Северо-Западный",
    "capital": "Калининград"
  },
  {
    "name": "Калужская",
    "label": "kaluzhskaya",
    "guid": "18133adf-90c2-438e-88c4-62c41656de70",
    "code": 40,
    "iso_3166-2": "RU-KLU",
    "fullname": "Калужская область",
    "name_en": "Kaluga Oblast",
    "district": "Центральный",
    "capital": "Калуга"
  },
  {
    "name": "Камчатский",
    "label": "kamchatskij",
    "guid": "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
    "code": "41",
    "iso_3166-2": "RU-KAM",
    "fullname": "Камчатский край",
    "name_en": "Kamchatka Krai",
    "district": "Дальневосточный",
    "capital": "Петропавловск-Камчатский"
  },
  {
    "name": "Кемеровская",
    "label": "kemerovskaya",
    "guid": "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
    "code": "42",
    "iso_3166-2": "RU-KEM",
    "fullname": "Кемеровская область - Кузбасс",
    "name_en": "Kemerovo Oblast",
    "district": "Сибирский",
    "capital": "Кемерово"
  },
  {
    "name": "Кировская",
    "label": "kirovskaya",
    "guid": "0b940b96-103f-4248-850c-26b6c7296728",
    "code": 43,
    "iso_3166-2": "RU-KIR",
    "fullname": "Кировская область",
    "name_en": "Kirov Oblast",
    "district": "Приволжский",
    "capital": "Киров"
  },
  {
    "name": "Костромская",
    "label": "kostromskaya",
    "guid": "15784a67-8cea-425b-834a-6afe0e3ed61c",
    "code": 44,
    "iso_3166-2": "RU-KOS",
    "fullname": "Костромская область",
    "name_en": "Kostroma Oblast",
    "district": "Центральный",
    "capital": "Кострома"
  },
  {
    "name": "Курганская",
    "label": "kurganskaya",
    "guid": "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
    "code": 45,
    "iso_3166-2": "RU-KGN",
    "fullname": "Курганская область",
    "name_en": "Kurgan Oblast",
    "district": "Уральский",
    "capital": "Курган"
  },
  {
    "name": "Курская",
    "label": "kurskaya",
    "guid": "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
    "code": 46,
    "iso_3166-2": "RU-KRS",
    "fullname": "Курская область",
    "name_en": "Kursk Oblast",
    "district": "Центральный",
    "capital": "Курск"
  },
  {
    "name": "Ленинградская",
    "label": "leningradskaya",
    "guid": "6d1ebb35-70c6-4129-bd55-da3969658f5d",
    "code": "47",
    "iso_3166-2": "RU-LEN",
    "fullname": "Ленинградская область",
    "name_en": "Leningrad Oblast",
    "district": "Северо-Западный",
    "capital": "Гатчина"
  },
  {
    "name": "Липецкая",
    "label": "lipeckaya",
    "guid": "1490490e-49c5-421c-9572-5673ba5d80c8",
    "code": 48,
    "iso_3166-2": "RU-LIP",
    "fullname": "Липецкая область",
    "name_en": "Lipetsk Oblast",
    "district": "Центральный",
    "capital": "Липецк"
  },
  {
    "name": "Магаданская",
    "label": "magadanskaya",
    "guid": "9c05e812-8679-4710-b8cb-5e8bd43cdf48",
    "code": 49,
    "iso_3166-2": "RU-MAG",
    "fullname": "Магаданская область",
    "name_en": "Magadan Oblast",
    "district": "Дальневосточный",
    "capital": "Магадан"
  },
  {
    "name": "Московская",
    "label": "moskovskaya",
    "guid": "29251dcf-00a1-4e34-98d4-5c47484a36d4",
    "code": "50",
    "iso_3166-2": "RU-MOS",
    "fullname": "Московская область",
    "name_en": "Moscow Oblast",
    "district": "Центральный",
    "capital": "Москва"
  },
  {
    "name": "Мурманская",
    "label": "murmanskaya",
    "guid": "1c727518-c96a-4f34-9ae6-fd510da3be03",
    "code": 51,
    "iso_3166-2": "RU-MUR",
    "fullname": "Мурманская область",
    "name_en": "Murmansk Oblast",
    "district": "Северо-Западный",
    "capital": "Мурманск"
  },
  {
    "name": "Нижегородская",
    "label": "nizhegorodskaya",
    "guid": "88cd27e2-6a8a-4421-9718-719a28a0a088",
    "code": "52",
    "iso_3166-2": "RU-NIZ",
    "fullname": "Нижегородская область",
    "name_en": "Nizhny Novgorod Oblast",
    "district": "Приволжский",
    "capital": "Нижний Новгород"
  },
  {
    "name": "Новгородская",
    "label": "novgorodskaya",
    "guid": "e5a84b81-8ea1-49e3-b3c4-0528651be129",
    "code": 53,
    "iso_3166-2": "RU-NGR",
    "fullname": "Новгородская область",
    "name_en": "Novgorod Oblast",
    "district": "Северо-Западный",
    "capital": "Великий Новгород"
  },
  {
    "name": "Новосибирская",
    "label": "novosibirskaya",
    "guid": "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
    "code": "54",
    "iso_3166-2": "RU-NVS",
    "fullname": "Новосибирская область",
    "name_en": "Novosibirsk Oblast",
    "district": "Сибирский",
    "capital": "Новосибирск"
  },
  {
    "name": "Омская",
    "label": "omskaya",
    "guid": "05426864-466d-41a3-82c4-11e61cdc98ce",
    "code": "55",
    "iso_3166-2": "RU-OMS",
    "fullname": "Омская область",
    "name_en": "Omsk Oblast",
    "district": "Сибирский",
    "capital": "Омск"
  },
  {
    "name": "Оренбургская",
    "label": "orenburgskaya",
    "guid": "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
    "code": "56",
    "iso_3166-2": "RU-ORE",
    "fullname": "Оренбургская область",
    "name_en": "Orenburg Oblast",
    "district": "Приволжский",
    "capital": "Оренбург"
  },
  {
    "name": "Орловская",
    "label": "orlovskaya",
    "guid": "5e465691-de23-4c4e-9f46-f35a125b5970",
    "code": 57,
    "iso_3166-2": "RU-ORL",
    "fullname": "Орловская область",
    "name_en": "Oryol Oblast",
    "district": "Центральный",
    "capital": "Орёл"
  },
  {
    "name": "Пензенская",
    "label": "penzenskaya",
    "guid": "c99e7924-0428-4107-a302-4fd7c0cca3ff",
    "code": "58",
    "iso_3166-2": "RU-PNZ",
    "fullname": "Пензенская область",
    "name_en": "Penza Oblast",
    "district": "Приволжский",
    "capital": "Пенза"
  },
  {
    "name": "Пермский",
    "label": "permskij",
    "guid": "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
    "code": "59",
    "iso_3166-2": "RU-PER",
    "fullname": "Пермский край",
    "name_en": "Perm Krai",
    "district": "Приволжский",
    "capital": "Пермь"
  },
  {
    "name": "Псковская",
    "label": "pskovskaya",
    "guid": "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
    "code": 60,
    "iso_3166-2": "RU-PSK",
    "fullname": "Псковская область",
    "name_en": "Pskov Oblast",
    "district": "Северо-Западный",
    "capital": "Псков"
  },
  {
    "name": "Ростовская",
    "label": "rostovskaya",
    "guid": "f10763dc-63e3-48db-83e1-9c566fe3092b",
    "code": "61",
    "iso_3166-2": "RU-ROS",
    "fullname": "Ростовская область",
    "name_en": "Rostov Oblast",
    "district": "Южный",
    "capital": "Ростов-на-Дону"
  },
  {
    "name": "Рязанская",
    "label": "ryazanskaya",
    "guid": "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
    "code": 62,
    "iso_3166-2": "RU-RYA",
    "fullname": "Рязанская область",
    "name_en": "Ryazan Oblast",
    "district": "Центральный",
    "capital": "Рязань"
  },
  {
    "name": "Самарская",
    "label": "samarskaya",
    "guid": "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
    "code": "63",
    "iso_3166-2": "RU-SAM",
    "fullname": "Самарская область",
    "name_en": "Samara Oblast",
    "district": "Приволжский",
    "capital": "Самара"
  },
  {
    "name": "Саратовская",
    "label": "saratovskaya",
    "guid": "df594e0e-a935-4664-9d26-0bae13f904fe",
    "code": "64",
    "iso_3166-2": "RU-SAR",
    "fullname": "Саратовская область",
    "name_en": "Saratov Oblast",
    "district": "Приволжский",
    "capital": "Саратов"
  },
  {
    "name": "Сахалинская",
    "label": "sahalinskaya",
    "guid": "aea6280f-4648-460f-b8be-c2bc18923191",
    "code": 65,
    "iso_3166-2": "RU-SAK",
    "fullname": "Сахалинская область",
    "name_en": "Sakhalin Oblast",
    "district": "Дальневосточный",
    "capital": "Южно-Сахалинск"
  },
  {
    "name": "Свердловская",
    "label": "sverdlovskaya",
    "guid": "92b30014-4d52-4e2e-892d-928142b924bf",
    "code": "66",
    "iso_3166-2": "RU-SVE",
    "fullname": "Свердловская область",
    "name_en": "Sverdlovsk Oblast",
    "district": "Уральский",
    "capital": "Екатеринбург"
  },
  {
    "name": "Смоленская",
    "label": "smolenskaya",
    "guid": "e8502180-6d08-431b-83ea-c7038f0df905",
    "code": 67,
    "iso_3166-2": "RU-SMO",
    "fullname": "Смоленская область",
    "name_en": "Smolensk Oblast",
    "district": "Центральный",
    "capital": "Смоленск"
  },
  {
    "name": "Тамбовская",
    "label": "tambovskaya",
    "guid": "a9a71961-9363-44ba-91b5-ddf0463aebc2",
    "code": 68,
    "iso_3166-2": "RU-TAM",
    "fullname": "Тамбовская область",
    "name_en": "Tambov Oblast",
    "district": "Центральный",
    "capital": "Тамбов"
  },
  {
    "name": "Тверская",
    "label": "tverskaya",
    "guid": "61723327-1c20-42fe-8dfa-402638d9b396",
    "code": "69",
    "iso_3166-2": "RU-TVE",
    "fullname": "Тверская область",
    "name_en": "Tver Oblast",
    "district": "Центральный",
    "capital": "Тверь"
  },
  {
    "name": "Томская",
    "label": "tomskaya",
    "guid": "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
    "code": 70,
    "iso_3166-2": "RU-TOM",
    "fullname": "Томская область",
    "name_en": "Tomsk Oblast",
    "district": "Сибирский",
    "capital": "Томск"
  },
  {
    "name": "Тульская",
    "label": "tulskaya",
    "guid": "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
    "code": 71,
    "iso_3166-2": "RU-TUL",
    "fullname": "Тульская область",
    "name_en": "Tula Oblast",
    "district": "Центральный",
    "capital": "Тула"
  },
  {
    "name": "Тюменская",
    "label": "tyumenskaya",
    "guid": "54049357-326d-4b8f-b224-3c6dc25d6dd3",
    "code": "72",
    "iso_3166-2": "RU-TYU",
    "fullname": "Тюменская область",
    "name_en": "Tyumen Oblast",
    "district": "Уральский",
    "capital": "Тюмень"
  },
  {
    "name": "Ульяновская",
    "label": "ulyanovskaya",
    "guid": "fee76045-fe22-43a4-ad58-ad99e903bd58",
    "code": "73",
    "iso_3166-2": "RU-ULY",
    "fullname": "Ульяновская область",
    "name_en": "Ulyanovsk Oblast",
    "district": "Приволжский",
    "capital": "Ульяновск"
  },
  {
    "name": "Челябинская",
    "label": "chelyabinskaya",
    "guid": "27eb7c10-a234-44da-a59c-8b1f864966de",
    "code": "74",
    "iso_3166-2": "RU-CHE",
    "fullname": "Челябинская область",
    "name_en": "Chelyabinsk Oblast",
    "district": "Уральский",
    "capital": "Челябинск"
  },
  {
    "name": "Забайкальский",
    "label": "zabajkalskij",
    "guid": "b6ba5716-eb48-401b-8443-b197c9578734",
    "code": "75",
    "iso_3166-2": "RU-ZAB",
    "fullname": "Забайкальский край",
    "name_en": "Zabaykalsky Krai",
    "district": "Дальневосточный",
    "capital": "Чита"
  },
  {
    "name": "Ярославская",
    "label": "yaroslavskaya",
    "guid": "a84b2ef4-db03-474b-b552-6229e801ae9b",
    "code": 76,
    "iso_3166-2": "RU-YAR",
    "fullname": "Ярославская область",
    "name_en": "Yaroslavl Oblast",
    "district": "Центральный",
    "capital": "Ярославль"
  },
  {
    "name": "Москва",
    "label": "moscow",
    "guid": "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
    "code": "77",
    "iso_3166-2": "RU-MOW",
    "fullname": "Москва",
    "name_en": "Moscow",
    "district": "Центральный",
    "capital": "Москва"
  },
  {
    "name": "Санкт-Петербург",
    "label": "saint_petersburg",
    "guid": "c2deb16a-0330-4f05-821f-1d09c93331e6",
    "code": "78",
    "iso_3166-2": "RU-SPE",
    "fullname": "Санкт-Петербург",
    "name_en": "Saint Petersburg",
    "district": "Северо-Западный",
    "capital": "Санкт-Петербург"
  },
  {
    "name": "Еврейская",
    "label": "evrejskaya",
    "guid": "1b507b09-48c9-434f-bf6f-65066211c73e",
    "code": 79,
    "iso_3166-2": "RU-YEV",
    "fullname": "Еврейская автономная область",
    "name_en": "Jewish Autonomous Oblast",
    "district": "Дальневосточный",
    "capital": "Биробиджан"
  },
  {
    "name": "Ханты-Мансийский",
    "label": "hmao",
    "guid": "d66e5325-3a25-4d29-ba86-4ca351d9704b",
    "code": "81",
    "iso_3166-2": "RU-KHM",
    "fullname": "Ханты-Мансийский Автономный округ - Югра",
    "name_en": "Khanty-Mansi Autonomous Okrug",
    "district": "Уральский",
    "capital": "Тюмень"
  },
  {
    "name": "Ненецкий",
    "label": "neneckij",
    "guid": "89db3198-6803-4106-9463-cbf781eff0b8",
    "code": 83,
    "iso_3166-2": "RU-NEN",
    "fullname": "Ненецкий автономный округ",
    "name_en": "Nenets Autonomous Okrug",
    "district": "Северо-Западный",
    "capital": "Архангельск"
  },
  {
    "name": "Чукотский",
    "label": "chukotskij",
    "guid": "f136159b-404a-4f1f-8d8d-d169e1374d5c",
    "code": 87,
    "iso_3166-2": "RU-CHU",
    "fullname": "Чукотский автономный округ",
    "name_en": "Chukotka Autonomous Okrug",
    "district": "Дальневосточный",
    "capital": "Анадырь"
  },
  {
    "name": "Ямало-Ненецкий",
    "label": "yanao",
    "guid": "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
    "code": 89,
    "iso_3166-2": "RU-YAN",
    "fullname": "Ямало-Ненецкий автономный округ",
    "name_en": "Yamalo-Nenets Autonomous Okrug",
    "district": "Уральский",
    "capital": "Тюмень"
  }
];

migrate((app) => {
  // === системные поля ===
  const sysIdField = () => ({
    autogeneratePattern: "[a-z0-9]{15}",
    hidden: false,
    id: "text_pk_" + Math.random().toString(36).slice(2, 10),
    max: 15,
    min: 15,
    name: "id",
    pattern: "^[a-z0-9]+$",
    presentable: false,
    primaryKey: true,
    required: true,
    system: true,
    type: "text",
  });

  // const sysCreatedField = () => ({
  //   hidden: false,
  //   id: "autodate_created_" + Math.random().toString(36).slice(2, 10),
  //   name: "created",
  //   onCreate: true,
  //   onUpdate: false,
  //   presentable: false,
  //   system: true,
  //   type: "autodate",
  // });

  // const sysUpdatedField = () => ({
  //   hidden: false,
  //   id: "autodate_updated_" + Math.random().toString(36).slice(2, 10),
  //   name: "updated",
  //   onCreate: true,
  //   onUpdate: true,
  //   presentable: false,
  //   system: true,
  //   type: "autodate",
  // });

  // === создаём коллекцию dict_regions ===
  const citiesColl = app.findCollectionByNameOrId("dict_cities");

  const collection = new Collection({
    name: "dict_regions",
    type: "base",
    system: false,
    listRule: "",
    viewRule: "",
    createRule: null,
    updateRule: null,
    deleteRule: null,
    indexes: [
      // "CREATE UNIQUE INDEX idx_dict_regions_guid ON dict_regions (guid)"
    ],
    fields: [
      sysIdField(),
      // sysCreatedField(),
      // sysUpdatedField(),

      {
        id: "text_guid_" + Math.random().toString(36).slice(2, 10),
        name: "guid",
        type: "text",
        required: true,
        system: false,
        hidden: false,
      },
      {
        id: "text_name_" + Math.random().toString(36).slice(2, 10),
        name: "name",
        type: "text",
        required: true,
        system: false,
        hidden: false,
      },
      {
        id: "text_label_" + Math.random().toString(36).slice(2, 10),
        name: "label",
        type: "text",
        required: false,
        system: false,
        hidden: false,
      },
      {
        id: "number_code_" + Math.random().toString(36).slice(2, 10),
        name: "code",
        type: "number",
        required: false,
        system: false,
        hidden: false,
      },
      {
        id: "text_iso_" + Math.random().toString(36).slice(2, 10),
        name: "iso_3166_2",
        type: "text",
        required: false,
        system: false,
        hidden: false,
      },
      {
        id: "text_fullname_" + Math.random().toString(36).slice(2, 10),
        name: "fullname",
        type: "text",
        required: false,
        system: false,
        hidden: false,
      },
      {
        id: "text_name_en_" + Math.random().toString(36).slice(2, 10),
        name: "name_en",
        type: "text",
        required: false,
        system: false,
        hidden: false,
      },
      {
        id: "text_district_" + Math.random().toString(36).slice(2, 10),
        name: "district",
        type: "text",
        required: false,
        system: false,
        hidden: false,
      },
      {
        id: "rel_capital_" + Math.random().toString(36).slice(2, 10),
        name: "capital",
        type: "relation",
        required: false,
        system: false,
        hidden: false,
        collectionId: citiesColl.id,
        cascadeDelete: false,
        minSelect: null,
        maxSelect: 1,
        displayFields: ["name"],
      },
    ],
  });

  app.save(collection);

  const coll = app.findCollectionByNameOrId("dict_regions");
  
  for (const item of seedData) {
    const regionRecord = new Record(coll);

    // ищем столицу по имени
    let capitalId = null;
    try {
      const city = app.findFirstRecordByFilter(
        "dict_cities",
        "name = {:name}",
        { name: item.capital }
      );
      capitalId = city?.id || null;
    } catch (e) {
      capitalId = null;
    }

    regionRecord.set("guid", item.guid);
    regionRecord.set("name", item.name);
    regionRecord.set("label", item.label);
    regionRecord.set("code", item.code);
    regionRecord.set("iso_3166_2", item["iso_3166-2"]);
    regionRecord.set("fullname", item.fullname);
    regionRecord.set("name_en", item.name_en);
    regionRecord.set("district", item.district);
    regionRecord.set("capital", capitalId);

    app.save(regionRecord);
  }

  return;
}, (app) => {
  const collection = app.findCollectionByNameOrId("dict_regions");
  if (collection) return app.delete(collection);
});
