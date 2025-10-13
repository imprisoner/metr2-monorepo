import type {
  DictFinishingRecord,
  DictFlatTypeRecord,
  DictHouseSeriesRecord,
  DictSquareM2Record,
} from "./pocketbase-types";

export type HouseSeriesNames =
  | "брежневка"
  | "сталинка"
  | "современный"
  | "90-е"
  | "хрущёвка"
  | "старый фонд";

export type BuildingCategoryNames =
  | "клубный дом"
  | "апарт-комплекс"
  | "многоквартирный";

export type ObjectStatusNames =
  | "нежилое"
  | "коммерческое"
  | "апартамент"
  | "жилое";

export type FlatTypeNames = "студия" | "1-комн" | "2-комн" | "3-комн" | "4+";

export type SquareM2Names = "<20 м²" | "20–30" | "30–45" | "45–60" | "60+ м²";

export type FinishingNames =
  | "white box"
  | "без отделки"
  | "в процессе ремонта"
  | "дизайнерская"
  | "косметика"
  | "отделка от застройщика";

export type FlatFields =
  | "id"
  | "houseSeries"
  | "buildingCategory"
  | "objectStatus"
  | "flatType"
  | "squareM2"
  | "finishing"
  | "user"
  | "created"
  | "updated";

export type FlatDictionaryFields = Extract<
  FlatFields,
  "finishing" | "houseSeries" | "flatType" | "squareM2"
>;

export interface FlatFilter {
  field: FlatDictionaryFields;
  values: (
    | DictHouseSeriesRecord
    | DictFlatTypeRecord
    | DictSquareM2Record
    | DictFinishingRecord
  )[];
}

