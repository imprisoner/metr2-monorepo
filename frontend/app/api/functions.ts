import {
  Collections,
  type BlogPostsResponse,
  type ContractorsCitiesResponse,
  type ContractorsServicesResponse,
  type DictCitiesRecord,
  type DictHouseSeriesRecord,
  type DictSpecialtyServicesRecord,
  type HouseSeriesCardsResponse,
  type PostsResponse,
  type UsersRecord,
  type UsersResponse,
} from "~/types/pocketbase-types";
import { pb } from "./pocketbase-client";
import type {
  UserProfileExpandLocation,
  ContractorWithUserInfoAndServices,
  ServiceCategorysWithSpecialties,
  SpecialtyRecordWithServices,
} from "~/types/api.types";
import type { FlatFilter } from "~/types/common.types";
import type { LoginSchema, RegisterSchema } from "~/schemas";
import type { OAUTH_PROVIDERS } from "~/constants";

export const getOneJournal_DEPRECATED = async (id: string) => {
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
    image: getPocketbaseFilePath(record, record.image),
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
  const expand = [
    "flats_via_user",
    "users_info_via_user",
    "users_info_via_user.location",
  ].join(",");

  const response = await pb
    .collection(Collections.Users)
    .getOne<UsersResponse<E>>(id, {
      expand,
    });

  if (response.avatar !== "") {
    response.avatar = getPocketbaseFilePath(response, response.avatar);
  }

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

export const getAllContractorsServicesCategoriesWithSpecialties = async () => {
  const response = await pb
    .collection(Collections.DictServiceCategories)
    .getFullList<ServiceCategorysWithSpecialties>({
      expand: "dict_specialties_via_serviceCategory",
    });

  const recordsWithFullImageLink = response.map((record) => ({
    ...record,
    image: getPocketbaseFilePath(record, record.image),
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

export const getContractorsResponse = async ({
  page = 1,
  perPage = 10,
  sortBy = undefined,
  expand = undefined,
  fields = ["*"],
  filter = undefined,
}: {
  page?: number;
  perPage?: number;
  sortBy?: string[];
  expand?: string[];
  fields?: string[];
  filter?: string;
}) => {
  const expandWithDefaults = [
    "contractors_services_via_user.specialtyService",
  ].concat(expand ?? []);

  const computedFilter =
    'role = "contractor"' + (filter ? ` && ${filter}` : "");

  const params = {
    sort: sortBy?.join(","),
    expand: expandWithDefaults.join(","),
    fields: fields?.join(","),
    filter: computedFilter,
  };

  const response = await pb
    .collection(Collections.Users)
    .getList<ContractorWithUserInfoAndServices>(page, perPage, params);

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

export const getFlatFilters = async () => {
  const response: FlatFilter[] = await pb.send("/api/flat-props", {});
  return response;
};

export const getAllCities = async () => {
  const response = await pb.collection("dict_cities").getFullList();
  return response;
};

export const saveUserAvatar = async (
  userId: string,
  collection: string,
  file: File
) => {
  const response = await pb.collection(collection).update(userId, {
    avatar: file,
  });
  return response;
};

export const authenticateWithEmail = async ({
  email,
  password,
}: LoginSchema) => {
  await pb
    .collection("users")
    .authWithPassword(email, password, { expand: "location" });
};

export const authenticateWithProvider = async (
  provider: (typeof OAUTH_PROVIDERS)[number]
) => {
  await pb.collection("_pb_users_auth_").authWithOAuth2({
    provider,
    query: {
      expand: "location",
    },
  });
};

export const registerWithEmailAndPassword = async ({
  email,
  name,
  password,
  passwordConfirm: repeatPassword,
  role,
}: RegisterSchema) => {
  await pb.collection("users").create({
    email: email,
    name: name,
    password: password,
    passwordConfirm: repeatPassword,
    role,
  });
};

export const getContractorServices = async (userId: string) => {
  const expand = ["specialtyService"].join(",");

  const response = await pb.collection("contractors_services").getFullList<
    ContractorsServicesResponse<{
      specialtyService: DictSpecialtyServicesRecord;
    }>
  >({
    filter: `user = "${userId}"`,
    expand,
  });

  return response;
};

export const getContractorCities = async (userId: string) => {
  const expand = ["city"].join(",");

  const response = await pb
    .collection("contractors_cities")
    .getFullList<ContractorsCitiesResponse<{ city: DictCitiesRecord }>>({
      filter: `user = "${userId}"`,
      expand,
    });

  return response;
};

export const getUserProfile = async (username: string) => {
  const expand = ["location", "user_profiles_via_user"].join(",");

  const response = await pb
    .collection(Collections.Users)
    .getFirstListItem<UserProfileExpandLocation>(`username = "${username}"`, {
      expand,
    });

  if (response.avatar !== "") {
    response.avatar = getPocketbaseFilePath(response, response.avatar);
  }
  return response;
};

export const getFlatsByUser = async (userId: string) => {
  const response = await pb.collection("flats").getFullList({
    filter: `user = "${userId}"`,
  });

  const withImages = response.map((flat) => ({
    ...flat,
    images: flat.images?.map((filename) =>
      getPocketbaseFilePath(flat, filename)
    ),
  }));

  return withImages;
};

export const getBlogPosts_DEPRECATED = async (userId: string) => {
  const response = await pb
    .collection("blog_posts")
    .getFullList<BlogPostsResponse<{ users_via_user: UsersRecord }>>({
      expand: "users_via_user",
      filter: `user="${userId}"`,
    });

  const withPreviewImages = response.map((article) => {
    let previewImage;

    if (article.images) {
      previewImage = getPocketbaseFilePath(
        article,
        article.images[article.previewImageIndex]!
      );
    }

    return {
      ...article,
      previewImage,
    };
  });

  return withPreviewImages;
};

export const updateUser = async (id: string, data: Partial<UsersRecord>) => {
  const response = await pb.collection("users").update(id, { ...data });

  return response;
};

export const tryToRefreshToken = async () => {
  if (pb.authStore.isValid) {
    await pb.collection("users").authRefresh({ expand: "location" });
  }
};

export const getPostsList = async <E>({
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
    .collection(Collections.Posts)
    .getList<PostsResponse<E>>(page, perPage, params);

  return response;
};

export const getOnePost = async (id: string) => {
  const response = await pb.collection(Collections.Posts).getOne(id);

  return response;
};