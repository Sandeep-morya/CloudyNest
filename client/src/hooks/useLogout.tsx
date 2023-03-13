import { useRouter } from "next/router";
import React from "react";
import { useCookies } from "react-cookie";

const useLogout = (key: string) => {
	const [_, setCookie, removeCookie] = useCookies();
	return () => {
		removeCookie(key);
	};
};

export default useLogout;
