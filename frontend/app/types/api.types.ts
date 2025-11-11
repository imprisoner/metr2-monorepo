import type {
  ContractorsPostsResponse,
  ContractorsServicesResponse,
  DictServiceCategoriesResponse,
  DictSpecialtiesRecord,
  DictSpecialtiesResponse,
  DictSpecialtyServicesRecord,
  UsersRecord,
  UsersResponse,
} from "./pocketbase-types";

export type ContractorsPostWithContractor = ContractorsPostsResponse<{
  user: UsersRecord;
}>;

export type ServiceCategorysWithSpecialties = DictServiceCategoriesResponse<{
  dict_specialties_via_serviceCategory: DictSpecialtiesRecord[];
}>;

export type ContractorWithUserInfoAndServices = UsersResponse<{
  user: UsersRecord;
  contractors_services_via_user: ContractorsServicesResponse<{
    specialtyService: DictSpecialtyServicesRecord;
  }>[];
}>;

export type SpecialtyRecordWithServices = DictSpecialtiesResponse<{
  dict_specialty_services_via_specialty: DictSpecialtyServicesRecord[];
}>;

export type ContractorsPostsResponseWithExpand = ContractorsPostsResponse<{
  contractorServices: ContractorsServicesResponse<
    DictSpecialtyServicesRecord[]
  >;
}>;
