import { useRouter } from "next/router";
import React from "react";
import { useCookies } from "react-cookie";

const useLogout = () => {
	const [_, setCookie, removeCookie] = useCookies(["cloudynest_jwt_token"]);
	const router = useRouter();
	return () => {
		removeCookie("cloudynest_jwt_token");
		router.replace("/supplier");
	};
};

export default useLogout;
