/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Authorigins = "_authOrigins",
	Externalauths = "_externalAuths",
	Mfas = "_mfas",
	Otps = "_otps",
	Superusers = "_superusers",
	BlogPosts = "blog_posts",
	ContractorsCities = "contractors_cities",
	ContractorsPosts = "contractors_posts",
	ContractorsServices = "contractors_services",
	DictBalcony = "dict_balcony",
	DictBuildYear = "dict_build_year",
	DictBuildingCategory = "dict_building_category",
	DictCeilingHeight = "dict_ceiling_height",
	DictCities = "dict_cities",
	DictElevator = "dict_elevator",
	DictFinishing = "dict_finishing",
	DictFlatType = "dict_flat_type",
	DictFloor = "dict_floor",
	DictFloorStructure = "dict_floor_structure",
	DictHouseSeries = "dict_house_series",
	DictLayout = "dict_layout",
	DictObjectStatus = "dict_object_status",
	DictParking = "dict_parking",
	DictPostTags = "dict_post_tags",
	DictPricePerM2 = "dict_price_per_m2",
	DictRegions = "dict_regions",
	DictServiceCategories = "dict_service_categories",
	DictSpecialties = "dict_specialties",
	DictSpecialtyServices = "dict_specialty_services",
	DictSquareM2 = "dict_square_m2",
	DictStoreys = "dict_storeys",
	Flats = "flats",
	HouseSeriesCards = "house_series_cards",
	Journals = "journals",
	PostFlats = "post_flats",
	PostServices = "post_services",
	Posts = "posts",
	UserProfiles = "user_profiles",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

type ExpandType<T> = unknown extends T
	? T extends unknown
		? { expand?: unknown }
		: { expand: T }
	: { expand: T }

// System fields
export type BaseSystemFields<T = unknown> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
} & ExpandType<T>

export type AuthSystemFields<T = unknown> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AuthoriginsRecord = {
	collectionRef: string
	created?: IsoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated?: IsoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated?: IsoDateString
}

export type MfasRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	method: string
	recordRef: string
	updated?: IsoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated?: IsoDateString
}

export type SuperusersRecord = {
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

export type BlogPostsRecord = {
	content: HTMLString
	created?: IsoDateString
	id: string
	images?: string[]
	previewImageIndex?: number
	publishDate?: IsoDateString
	published?: boolean
	title: string
	updated?: IsoDateString
	user: RecordIdString
}

export type ContractorsCitiesRecord = {
	city: RecordIdString
	created?: IsoDateString
	id: string
	updated?: IsoDateString
	user: RecordIdString
}

export type ContractorsPostsRecord = {
	content: HTMLString
	contractorServices?: RecordIdString[]
	created?: IsoDateString
	id: string
	images?: string[]
	previewImageIndex?: number
	publishDate?: IsoDateString
	published?: boolean
	title: string
	updated?: IsoDateString
	user: RecordIdString
}

export type ContractorsServicesRecord = {
	created?: IsoDateString
	description?: string
	id: string
	priceMax?: number
	priceMin?: number
	specialtyService: RecordIdString
	updated?: IsoDateString
	user: RecordIdString
}

export type DictBalconyRecord = {
	id: string
	name: string
}

export type DictBuildYearRecord = {
	id: string
	name: string
}

export type DictBuildingCategoryRecord = {
	id: string
	name: string
}

export type DictCeilingHeightRecord = {
	id: string
	name: string
}

export type DictCitiesRecord<Tcoords = unknown> = {
	coords?: null | Tcoords
	guid: string
	id: string
	isCapital?: boolean
	label?: string
	name: string
	name_en?: string
	region?: RecordIdString
}

export type DictElevatorRecord = {
	id: string
	name: string
}

export type DictFinishingRecord = {
	id: string
	name: string
}

export type DictFlatTypeRecord = {
	id: string
	name: string
}

export type DictFloorRecord = {
	id: string
	name: string
}

export type DictFloorStructureRecord = {
	id: string
	name: string
}

export type DictHouseSeriesRecord = {
	id: string
	name: string
}

export type DictLayoutRecord = {
	id: string
	name: string
}

export type DictObjectStatusRecord = {
	id: string
	name: string
}

export type DictParkingRecord = {
	id: string
	name: string
}

export type DictPostTagsRecord = {
	created?: IsoDateString
	description?: string
	id: string
	name?: string
	updated?: IsoDateString
}

export type DictPricePerM2Record = {
	id: string
	name: string
}

export type DictRegionsRecord = {
	capital?: RecordIdString
	code?: number
	district?: string
	fullname?: string
	guid: string
	id: string
	iso_3166_2?: string
	label?: string
	name: string
	name_en?: string
}

export type DictServiceCategoriesRecord = {
	id: string
	image: string
	name: string
}

export type DictSpecialtiesRecord = {
	id: string
	name: string
	serviceCategory: RecordIdString
}

export type DictSpecialtyServicesRecord = {
	id: string
	name: string
	specialty: RecordIdString
}

export type DictSquareM2Record = {
	id: string
	name: string
}

export type DictStoreysRecord = {
	id: string
	name: string
}

export type FlatsRecord = {
	balcony?: RecordIdString
	buildYear?: RecordIdString
	buildingCategory: RecordIdString
	ceilingHeight?: RecordIdString
	created?: IsoDateString
	description: string
	elevator?: RecordIdString
	finishing: RecordIdString
	flatType: RecordIdString
	floor?: RecordIdString
	floorStructure?: RecordIdString
	houseSeries: RecordIdString
	id: string
	images?: string[]
	journals?: RecordIdString[]
	layout?: RecordIdString
	nickname: string
	objectStatus: RecordIdString
	pricePerM2?: RecordIdString
	squareM2: RecordIdString
	storeys?: RecordIdString
	updated?: IsoDateString
	user: RecordIdString
}

export type HouseSeriesCardsRecord = {
	created?: IsoDateString
	description?: string
	houseSeries: RecordIdString
	id: string
	image?: string
	updated?: IsoDateString
}

export type JournalsRecord = {
	content: HTMLString
	created?: IsoDateString
	flat: RecordIdString
	id: string
	images?: string[]
	previewImageIndex?: number
	publishDate?: IsoDateString
	published?: boolean
	title: string
	updated?: IsoDateString
	user: RecordIdString
}

export type PostFlatsRecord = {
	flat: RecordIdString
	id: string
	post: RecordIdString
}

export type PostServicesRecord = {
	id: string
	post: RecordIdString
	services?: RecordIdString[]
}

export enum PostsTypeOptions {
	"blog" = "blog",
	"journal" = "journal",
	"portfolio" = "portfolio",
}

export enum PostsStatusOptions {
	"draft" = "draft",
	"published" = "published",
	"pending" = "pending",
}
export type PostsRecord = {
	author?: RecordIdString
	content?: HTMLString
	created?: IsoDateString
	id: string
	images?: string[]
	journal?: RecordIdString
	portfolio?: RecordIdString
	publishDate?: IsoDateString
	status?: PostsStatusOptions
	tags?: RecordIdString[]
	title?: string
	type?: PostsTypeOptions
	updated?: IsoDateString
}

export enum UserProfilesGenderOptions {
	"male" = "male",
	"female" = "female",
}
export type UserProfilesRecord = {
	about?: string
	age?: number
	created?: IsoDateString
	gender?: UserProfilesGenderOptions
	id: string
	updated?: IsoDateString
	user: RecordIdString
}

export enum UsersRoleOptions {
	"owner" = "owner",
	"contractor" = "contractor",
}
export type UsersRecord = {
	avatar?: string
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	location?: RecordIdString
	name: string
	password: string
	role?: UsersRoleOptions
	tokenKey: string
	updated?: IsoDateString
	username: string
	verified?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type BlogPostsResponse<Texpand = unknown> = Required<BlogPostsRecord> & BaseSystemFields<Texpand>
export type ContractorsCitiesResponse<Texpand = unknown> = Required<ContractorsCitiesRecord> & BaseSystemFields<Texpand>
export type ContractorsPostsResponse<Texpand = unknown> = Required<ContractorsPostsRecord> & BaseSystemFields<Texpand>
export type ContractorsServicesResponse<Texpand = unknown> = Required<ContractorsServicesRecord> & BaseSystemFields<Texpand>
export type DictBalconyResponse<Texpand = unknown> = Required<DictBalconyRecord> & BaseSystemFields<Texpand>
export type DictBuildYearResponse<Texpand = unknown> = Required<DictBuildYearRecord> & BaseSystemFields<Texpand>
export type DictBuildingCategoryResponse<Texpand = unknown> = Required<DictBuildingCategoryRecord> & BaseSystemFields<Texpand>
export type DictCeilingHeightResponse<Texpand = unknown> = Required<DictCeilingHeightRecord> & BaseSystemFields<Texpand>
export type DictCitiesResponse<Tcoords = unknown, Texpand = unknown> = Required<DictCitiesRecord<Tcoords>> & BaseSystemFields<Texpand>
export type DictElevatorResponse<Texpand = unknown> = Required<DictElevatorRecord> & BaseSystemFields<Texpand>
export type DictFinishingResponse<Texpand = unknown> = Required<DictFinishingRecord> & BaseSystemFields<Texpand>
export type DictFlatTypeResponse<Texpand = unknown> = Required<DictFlatTypeRecord> & BaseSystemFields<Texpand>
export type DictFloorResponse<Texpand = unknown> = Required<DictFloorRecord> & BaseSystemFields<Texpand>
export type DictFloorStructureResponse<Texpand = unknown> = Required<DictFloorStructureRecord> & BaseSystemFields<Texpand>
export type DictHouseSeriesResponse<Texpand = unknown> = Required<DictHouseSeriesRecord> & BaseSystemFields<Texpand>
export type DictLayoutResponse<Texpand = unknown> = Required<DictLayoutRecord> & BaseSystemFields<Texpand>
export type DictObjectStatusResponse<Texpand = unknown> = Required<DictObjectStatusRecord> & BaseSystemFields<Texpand>
export type DictParkingResponse<Texpand = unknown> = Required<DictParkingRecord> & BaseSystemFields<Texpand>
export type DictPostTagsResponse<Texpand = unknown> = Required<DictPostTagsRecord> & BaseSystemFields<Texpand>
export type DictPricePerM2Response<Texpand = unknown> = Required<DictPricePerM2Record> & BaseSystemFields<Texpand>
export type DictRegionsResponse<Texpand = unknown> = Required<DictRegionsRecord> & BaseSystemFields<Texpand>
export type DictServiceCategoriesResponse<Texpand = unknown> = Required<DictServiceCategoriesRecord> & BaseSystemFields<Texpand>
export type DictSpecialtiesResponse<Texpand = unknown> = Required<DictSpecialtiesRecord> & BaseSystemFields<Texpand>
export type DictSpecialtyServicesResponse<Texpand = unknown> = Required<DictSpecialtyServicesRecord> & BaseSystemFields<Texpand>
export type DictSquareM2Response<Texpand = unknown> = Required<DictSquareM2Record> & BaseSystemFields<Texpand>
export type DictStoreysResponse<Texpand = unknown> = Required<DictStoreysRecord> & BaseSystemFields<Texpand>
export type FlatsResponse<Texpand = unknown> = Required<FlatsRecord> & BaseSystemFields<Texpand>
export type HouseSeriesCardsResponse<Texpand = unknown> = Required<HouseSeriesCardsRecord> & BaseSystemFields<Texpand>
export type JournalsResponse<Texpand = unknown> = Required<JournalsRecord> & BaseSystemFields<Texpand>
export type PostFlatsResponse<Texpand = unknown> = Required<PostFlatsRecord> & BaseSystemFields<Texpand>
export type PostServicesResponse<Texpand = unknown> = Required<PostServicesRecord> & BaseSystemFields<Texpand>
export type PostsResponse<Texpand = unknown> = Required<PostsRecord> & BaseSystemFields<Texpand>
export type UserProfilesResponse<Texpand = unknown> = Required<UserProfilesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	blog_posts: BlogPostsRecord
	contractors_cities: ContractorsCitiesRecord
	contractors_posts: ContractorsPostsRecord
	contractors_services: ContractorsServicesRecord
	dict_balcony: DictBalconyRecord
	dict_build_year: DictBuildYearRecord
	dict_building_category: DictBuildingCategoryRecord
	dict_ceiling_height: DictCeilingHeightRecord
	dict_cities: DictCitiesRecord
	dict_elevator: DictElevatorRecord
	dict_finishing: DictFinishingRecord
	dict_flat_type: DictFlatTypeRecord
	dict_floor: DictFloorRecord
	dict_floor_structure: DictFloorStructureRecord
	dict_house_series: DictHouseSeriesRecord
	dict_layout: DictLayoutRecord
	dict_object_status: DictObjectStatusRecord
	dict_parking: DictParkingRecord
	dict_post_tags: DictPostTagsRecord
	dict_price_per_m2: DictPricePerM2Record
	dict_regions: DictRegionsRecord
	dict_service_categories: DictServiceCategoriesRecord
	dict_specialties: DictSpecialtiesRecord
	dict_specialty_services: DictSpecialtyServicesRecord
	dict_square_m2: DictSquareM2Record
	dict_storeys: DictStoreysRecord
	flats: FlatsRecord
	house_series_cards: HouseSeriesCardsRecord
	journals: JournalsRecord
	post_flats: PostFlatsRecord
	post_services: PostServicesRecord
	posts: PostsRecord
	user_profiles: UserProfilesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	blog_posts: BlogPostsResponse
	contractors_cities: ContractorsCitiesResponse
	contractors_posts: ContractorsPostsResponse
	contractors_services: ContractorsServicesResponse
	dict_balcony: DictBalconyResponse
	dict_build_year: DictBuildYearResponse
	dict_building_category: DictBuildingCategoryResponse
	dict_ceiling_height: DictCeilingHeightResponse
	dict_cities: DictCitiesResponse
	dict_elevator: DictElevatorResponse
	dict_finishing: DictFinishingResponse
	dict_flat_type: DictFlatTypeResponse
	dict_floor: DictFloorResponse
	dict_floor_structure: DictFloorStructureResponse
	dict_house_series: DictHouseSeriesResponse
	dict_layout: DictLayoutResponse
	dict_object_status: DictObjectStatusResponse
	dict_parking: DictParkingResponse
	dict_post_tags: DictPostTagsResponse
	dict_price_per_m2: DictPricePerM2Response
	dict_regions: DictRegionsResponse
	dict_service_categories: DictServiceCategoriesResponse
	dict_specialties: DictSpecialtiesResponse
	dict_specialty_services: DictSpecialtyServicesResponse
	dict_square_m2: DictSquareM2Response
	dict_storeys: DictStoreysResponse
	flats: FlatsResponse
	house_series_cards: HouseSeriesCardsResponse
	journals: JournalsResponse
	post_flats: PostFlatsResponse
	post_services: PostServicesResponse
	posts: PostsResponse
	user_profiles: UserProfilesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: '_authOrigins'): RecordService<AuthoriginsResponse>
	collection(idOrName: '_externalAuths'): RecordService<ExternalauthsResponse>
	collection(idOrName: '_mfas'): RecordService<MfasResponse>
	collection(idOrName: '_otps'): RecordService<OtpsResponse>
	collection(idOrName: '_superusers'): RecordService<SuperusersResponse>
	collection(idOrName: 'blog_posts'): RecordService<BlogPostsResponse>
	collection(idOrName: 'contractors_cities'): RecordService<ContractorsCitiesResponse>
	collection(idOrName: 'contractors_posts'): RecordService<ContractorsPostsResponse>
	collection(idOrName: 'contractors_services'): RecordService<ContractorsServicesResponse>
	collection(idOrName: 'dict_balcony'): RecordService<DictBalconyResponse>
	collection(idOrName: 'dict_build_year'): RecordService<DictBuildYearResponse>
	collection(idOrName: 'dict_building_category'): RecordService<DictBuildingCategoryResponse>
	collection(idOrName: 'dict_ceiling_height'): RecordService<DictCeilingHeightResponse>
	collection(idOrName: 'dict_cities'): RecordService<DictCitiesResponse>
	collection(idOrName: 'dict_elevator'): RecordService<DictElevatorResponse>
	collection(idOrName: 'dict_finishing'): RecordService<DictFinishingResponse>
	collection(idOrName: 'dict_flat_type'): RecordService<DictFlatTypeResponse>
	collection(idOrName: 'dict_floor'): RecordService<DictFloorResponse>
	collection(idOrName: 'dict_floor_structure'): RecordService<DictFloorStructureResponse>
	collection(idOrName: 'dict_house_series'): RecordService<DictHouseSeriesResponse>
	collection(idOrName: 'dict_layout'): RecordService<DictLayoutResponse>
	collection(idOrName: 'dict_object_status'): RecordService<DictObjectStatusResponse>
	collection(idOrName: 'dict_parking'): RecordService<DictParkingResponse>
	collection(idOrName: 'dict_post_tags'): RecordService<DictPostTagsResponse>
	collection(idOrName: 'dict_price_per_m2'): RecordService<DictPricePerM2Response>
	collection(idOrName: 'dict_regions'): RecordService<DictRegionsResponse>
	collection(idOrName: 'dict_service_categories'): RecordService<DictServiceCategoriesResponse>
	collection(idOrName: 'dict_specialties'): RecordService<DictSpecialtiesResponse>
	collection(idOrName: 'dict_specialty_services'): RecordService<DictSpecialtyServicesResponse>
	collection(idOrName: 'dict_square_m2'): RecordService<DictSquareM2Response>
	collection(idOrName: 'dict_storeys'): RecordService<DictStoreysResponse>
	collection(idOrName: 'flats'): RecordService<FlatsResponse>
	collection(idOrName: 'house_series_cards'): RecordService<HouseSeriesCardsResponse>
	collection(idOrName: 'journals'): RecordService<JournalsResponse>
	collection(idOrName: 'post_flats'): RecordService<PostFlatsResponse>
	collection(idOrName: 'post_services'): RecordService<PostServicesResponse>
	collection(idOrName: 'posts'): RecordService<PostsResponse>
	collection(idOrName: 'user_profiles'): RecordService<UserProfilesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
