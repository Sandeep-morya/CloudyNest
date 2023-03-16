export interface SellerType {
	image: string;
	name: string;
	email: string;
	password: string;
	mobile: string;
	address: string;
	gst: string;
}

export interface authInputType {
	email: string;
	password: string;
}

export interface sellerProfileType {
	_id: string;
	image: string;
	name: string;
	email: string;
	mobile: string;
	address: string;
	gst: string;
	isPrime: boolean;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface productType {
	title?: string;
	brand?: string;
	description?: string;
	thumbnail?: string;
	images?: string[];
	price?: number;
	tags?: string[];

	quantity?: number;
	discount?: number;
	seller?: string;
	rating?: number;

	/* Extras */
	assured?: boolean;
	is_for?: string;
	for_gender?: string;
	for_age?: string;
	sizes?: string[];
}

export interface FinalProductType {
	_id: string;
	title: string;
	brand: string;
	description: string;
	thumbnail: string;
	images: string[];
	price: number;
	tags: string[];
	quantity: number;
	discount: number;
	seller: string;
	rating: number;
	assured: false;
	is_for: string;
	for_gender: string;
	for_age: string;
	sizes: string[];
	__v: number;
	createdAt: string;
	updatedAt: string;
}

export interface userFormType {
	name?: string;
	email: string;
	password: string;
}
export interface FinalUserType {
	_id: string;
	name: string;
	email: string;
	mobile: string;
	address: string[];
	isPrime: false;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface cartItemType {
	id: string;
	title: string;
	count: number;
	price: number;
	seller: string;
}

export interface addressType {
	house: string;
	area: string;
	landmark: string;
	city: string;
	state: string;
	pincode: string;
}

export interface FinalOrderType {
	_id: string;
	item: string;
	customer: string;
	seller: string;
	quantity: number;
	delivery_address: string;
	amount: number;
	payment_method: string;
	payment_status: boolean;
	current_location: string;
	track_id: string;
	delivery_status: boolean;
	canceled: boolean;
	returned: boolean;
	completed: boolean;
	createdAt: string;
	updatedAt: string;
	__v: number;
}
