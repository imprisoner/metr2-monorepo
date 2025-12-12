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
export type IsoAutoDateString = string & { readonly autodate: unique symbol }
export type RecordIdString = string
export type FileNameString = string & { readonly filename: unique symbol }
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
	created: IsoAutoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated: IsoAutoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated: IsoAutoDateString
}

export type MfasRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	method: string
	recordRef: string
	updated: IsoAutoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated: IsoAutoDateString
}

export type SuperusersRecord = {
	created: IsoAutoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated: IsoAutoDateString
	verified?: boolean
}

export type BlogPostsRecord = {
	content: HTMLString
	created: IsoAutoDateString
	id: string
	images?: FileNameString[]
	previewImageIndex?: number
	publishDate?: IsoDateString
	published?: boolean
	title: string
	updated: IsoAutoDateString
	user: RecordIdString
}

export type ContractorsCitiesRecord = {
	city: RecordIdString
	created: IsoAutoDateString
	id: string
	updated: IsoAutoDateString
	user: RecordIdString
}

export type ContractorsPostsRecord = {
	content: HTMLString
	contractorServices?: RecordIdString[]
	created: IsoAutoDateString
	id: string
	images?: FileNameString[]
	previewImageIndex?: number
	publishDate?: IsoDateString
	published?: boolean
	title: string
	updated: IsoAutoDateString
	user: RecordIdString
}

export type ContractorsServicesRecord = {
	created: IsoAutoDateString
	description?: string
	id: string
	priceMax?: number
	priceMin?: number
	specialtyService: RecordIdString
	updated: IsoAutoDateString
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
	created: IsoAutoDateString
	description?: string
	id: string
	name?: string
	updated: IsoAutoDateString
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
	image: FileNameString
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
	created: IsoAutoDateString
	description: string
	elevator?: RecordIdString
	finishing: RecordIdString
	flatType: RecordIdString
	floor?: RecordIdString
	floorStructure?: RecordIdString
	houseSeries: RecordIdString
	id: string
	images?: FileNameString[]
	journals?: RecordIdString[]
	layout?: RecordIdString
	nickname: string
	objectStatus: RecordIdString
	pricePerM2?: RecordIdString
	squareM2: RecordIdString
	storeys?: RecordIdString
	updated: IsoAutoDateString
	user: RecordIdString
}

export type HouseSeriesCardsRecord = {
	created: IsoAutoDateString
	description?: string
	houseSeries: RecordIdString
	id: string
	image?: FileNameString
	updated: IsoAutoDateString
}

export type JournalsRecord = {
	content: HTMLString
	created: IsoAutoDateString
	flat: RecordIdString
	id: string
	images?: FileNameString[]
	previewImageIndex?: number
	publishDate?: IsoDateString
	published?: boolean
	title: string
	updated: IsoAutoDateString
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
export type PostsRecord<Tcontent_json = unknown> = {
	author?: RecordIdString
	content?: HTMLString
	content_json?: null | Tcontent_json
	created: IsoAutoDateString
	id: string
	images?: FileNameString[]
	journal?: RecordIdString
	portfolio?: RecordIdString
	publishDate?: IsoDateString
	status: PostsStatusOptions
	tags?: RecordIdString[]
	title: string
	type?: PostsTypeOptions
	updated: IsoAutoDateString
	videos?: FileNameString[]
}

export enum UserProfilesGenderOptions {
	"male" = "male",
	"female" = "female",
}
export type UserProfilesRecord = {
	about?: string
	age?: number
	created: IsoAutoDateString
	gender?: UserProfilesGenderOptions
	id: string
	updated: IsoAutoDateString
	user: RecordIdString
}

export enum UsersRoleOptions {
	"owner" = "owner",
	"contractor" = "contractor",
}
export type UsersRecord = {
	avatar?: FileNameString
	created: IsoAutoDateString
	email: string
	emailVisibility?: boolean
	id: string
	location?: RecordIdString
	name: string
	password: string
	role?: UsersRoleOptions
	tokenKey: string
	updated: IsoAutoDateString
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
export type PostsResponse<Tcontent_json = unknown, Texpand = unknown> = Required<PostsRecord<Tcontent_json>> & BaseSystemFields<Texpand>
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

// Utility types for create/update operations

type ProcessCreateAndUpdateFields<T> = Omit<{
	// Omit AutoDate fields
	[K in keyof T as Extract<T[K], IsoAutoDateString> extends never ? K : never]: 
		// Convert FileNameString to File
		T[K] extends infer U ? 
			U extends (FileNameString | FileNameString[]) ? 
				U extends any[] ? File[] : File 
			: U
		: never
}, 'id'>

// Create type for Auth collections
export type CreateAuth<T> = {
	id?: RecordIdString
	email: string
	emailVisibility?: boolean
	password: string
	passwordConfirm: string
	verified?: boolean
} & ProcessCreateAndUpdateFields<T>

// Create type for Base collections
export type CreateBase<T> = {
	id?: RecordIdString
} & ProcessCreateAndUpdateFields<T>

// Update type for Auth collections
export type UpdateAuth<T> = Partial<
	Omit<ProcessCreateAndUpdateFields<T>, keyof AuthSystemFields>
> & {
	email?: string
	emailVisibility?: boolean
	oldPassword?: string
	password?: string
	passwordConfirm?: string
	verified?: boolean
}

// Update type for Base collections
export type UpdateBase<T> = Partial<
	Omit<ProcessCreateAndUpdateFields<T>, keyof BaseSystemFields>
>

// Get the correct create type for any collection
export type Create<T extends keyof CollectionResponses> =
	CollectionResponses[T] extends AuthSystemFields
		? CreateAuth<CollectionRecords[T]>
		: CreateBase<CollectionRecords[T]>

// Get the correct update type for any collection
export type Update<T extends keyof CollectionResponses> =
	CollectionResponses[T] extends AuthSystemFields
		? UpdateAuth<CollectionRecords[T]>
		: UpdateBase<CollectionRecords[T]>

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = {
	collection<T extends keyof CollectionResponses>(
		idOrName: T
	): RecordService<CollectionResponses[T]>
} & PocketBase
