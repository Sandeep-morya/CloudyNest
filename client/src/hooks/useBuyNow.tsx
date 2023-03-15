import { useRouter } from "next/router";
import React from "react";

const useBuyNow = () => {
	const router = useRouter();
	return async (items: string[]) => {
		console.log(items);
		router.push("/user/checkout");
	};
};

export default useBuyNow;
