import type {
  ContractorsPostsResponse,
  ContractorsRecord,
  ContractorsResponse,
  ContractorsServicesResponse,
  DictServiceCategoriesResponse,
  DictSpecialtiesRecord,
  DictSpecialtiesResponse,
  DictSpecialtyServicesRecord,
  UsersRecord,
} from "./pocketbase-types";

export type ContractorsPostWithContractor = ContractorsPostsResponse<{
  contractor: ContractorsRecord;
}>;

export type ServiceCategorysWithSpecialties = DictServiceCategoriesResponse<{
  dict_specialties_via_serviceCategory: DictSpecialtiesRecord[];
}>;

export type ContractorWithUserInfoAndServices = ContractorsResponse<{
  user: UsersRecord;
  contractors_services_via_contractor: ContractorsServicesResponse<{
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
