import type {
  ContractorsPostsResponse,
  ContractorsServicesResponse,
  DictCitiesRecord,
  DictServiceCategoriesResponse,
  DictSpecialtiesRecord,
  DictSpecialtiesResponse,
  DictSpecialtyServicesRecord,
  FlatsRecord,
  UserProfilesRecord,
  BlogPostsRecord,
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

export type UsersPageResponse = UsersResponse<{
  location: DictCitiesRecord | undefined;
  flats_via_user: FlatsRecord[] | undefined;
  user_profiles_via_user: UserProfilesRecord;
  blog_posts_via_user: BlogPostsRecord[] | undefined;
}>;

export type UserProfileExpandLocation = UsersResponse<{
  user_profiles_via_user: UserProfilesRecord;
  location: DictCitiesRecord;
}>;

export type ContractorProfile = UsersResponse<{
  location: DictCitiesRecord | undefined;
  user_profiles_via_user: UserProfilesRecord;
}>;
