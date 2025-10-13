import {
  Collections,
  type AvailableSpecialtiesViewRecord,
  type ContractorsServicesResponse,
  type ContractorsSpecialtiesCardsResponse,
  type DictHouseSeriesRecord,
  type DictSpecialtiesRecord,
  type HouseSeriesCardsResponse,
  type JournalsResponse,
  type UsersResponse,
} from "~/types/pocketbase-types";
import { pb } from "./pocketbase-client";
import type {
  ContractorsPostWithContractor,
  ContractorWithUserInfoAndServices,
  ServiceCategorysWithSpecialties,
  SpecialtyRecordWithServices,
} from "~/types/api.types";

export const getJournalsResponse = async <E>({
  page = 1,
  perPage = 10,
  sortBy = undefined,
  expand = undefined,
  fields = ["*"],
  isShortContent = false,
  filter = undefined,
}: {
  page?: number;
  perPage?: number;
  sortBy?: string[];
  expand?: string[];
  fields?: string[];
  isShortContent?: boolean;
  filter?: string;
}) => {
  if (isShortContent) {
    fields.push("content:excerpt(100,true)");
  }

  const params = {
    sort: sortBy?.join(","),
    expand: expand?.join(","),
    fields: fields?.join(","),
    filter,
  };

  const response = await pb
    .collection(Collections.Journals)
    .getList<JournalsResponse<E>>(page, perPage, params);

  return response;
};

export const getOneJournal = async (id: string) => {
  const response = await pb.collection(Collections.Journals).getOne(id);

  return response;
};

export const getAllHouseSeriesCards = async () => {
  const response = await pb
    .collection(Collections.HouseSeriesCards)
    .getFullList<
      HouseSeriesCardsResponse<{ houseSeries: DictHouseSeriesRecord }>
    >({ expand: "houseSeries" });

  const recordsWithFullImageLink = response.map((record) => ({
    ...record,
    image: pb.files.getURL(record, record.image),
  }));

  return recordsWithFullImageLink;
};

export const getOneHouseSeriesCard = async (id: string) => {
  const response = await pb
    .collection(Collections.HouseSeriesCards)
    .getOne<HouseSeriesCardsResponse<{ houseSeries: DictHouseSeriesRecord }>>(
      id,
      { expand: "houseSeries" }
    );
  return response;
};

export const getOneUser = async <E>(id: string) => {
  const response = await pb
    .collection(Collections.Users)
    .getOne<UsersResponse<E>>(id, {
      expand: "flats_via_user",
    });

  return response;
};

export const getAllContractorServices = async <E>(id: string) => {
  const response = await pb
    .collection(Collections.ContractorsServices)
    .getFullList<ContractorsServicesResponse<E>>({
      filter: `contractor="${id}"`,
      expand: "specialtyService",
    });

  return response;
};

export const getOneContractorsPost = async (id: string) => {
  const response = await pb
    .collection(Collections.ContractorsPosts)
    .getOne<ContractorsPostWithContractor>(id, {
      expand: "contractor",
    });
  return response;
};

export const getAvailableContractorsSpecialtiesCards = async () => {
  const response = await pb
    .collection(Collections.AvailableSpecialtiesView)
    .getFullList<AvailableSpecialtiesViewRecord>();

  const recordsWithFullImageLink = response.map((record) => ({
    ...record,
    image: pb.files.getURL(record, record.image!),
  }));

  return recordsWithFullImageLink;
};

export const getAllContractorsSpecialtiesCards = async () => {
  const response = await pb
    .collection(Collections.ContractorsSpecialtiesCards)
    .getFullList<
      ContractorsSpecialtiesCardsResponse<{ specialty: DictSpecialtiesRecord }>
    >({ expand: "specialty" });

  const recordsWithFullImageLink = response.map((record) => ({
    ...record,
    image: pb.files.getURL(record, record.image),
  }));

  return recordsWithFullImageLink;
};

export const getAllContractorsServicesCategoriesWithSpecialties = async () => {
  const response = await pb
    .collection(Collections.DictServiceCategories)
    .getFullList<ServiceCategorysWithSpecialties>({
      expand: "dict_specialties_via_serviceCategory",
    });

  const recordsWithFullImageLink = response.map((record) => ({
    ...record,
    image: pb.files.getURL(record, record.image),
  }));

  return recordsWithFullImageLink;
};

export const getOneServiceCategoryWithSpecialties = async (id: string) => {
  const response = await pb
    .collection(Collections.DictServiceCategories)
    .getOne<ServiceCategorysWithSpecialties>(id, {
      expand: "dict_specialties_via_serviceCategory",
    });

  return response;
};

export const getFilteredContractorsList = async (filter: string) => {
  const response = await pb
    .collection(Collections.Contractors)
    .getList<ContractorWithUserInfoAndServices>(1, 10, {
      filter: filter,
      expand: "user,contractors_services_via_contractor.specialtyService",
    });

  return response;
};

export const getOneSpecialtyWithServices = async (id: string) => {
  const response = await pb
    .collection(Collections.DictSpecialties)
    .getOne<SpecialtyRecordWithServices>(id, {
      expand: "dict_specialty_services_via_specialty",
    });

  return response;
};
