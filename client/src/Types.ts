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
