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
	title?: string
	brand?: string
	description?: string
	thumbnail?: string
	images?: string[]
	price?: number;
	tags?: string[]

	quantity?:number;
	discount?:number;
	seller?: string;
	rating?: number

	/* Extras */
	assured?: boolean;
	is_for?: string
	for_gender?: string
	for_age?: string
	sizes?: string [];
}
