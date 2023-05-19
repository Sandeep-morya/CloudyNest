import { cartItemType } from "@/Types";
import { useRouter } from "next/router";
import React from "react";

const useBuyNow = () => {
	const router = useRouter();
	return (items: cartItemType[]) => {
		localStorage.setItem("checkout", JSON.stringify(items));
		router.push("/user/checkout");
	};
};

export default useBuyNow;
