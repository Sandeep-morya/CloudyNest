import { useRouter } from "next/router";
import React from "react";
import useRemoveCookie from "./useRemoveCookie";

const useLogout = (key: string) => {
	const removeCookie = useRemoveCookie();
	return () => {
		removeCookie(key);
	};
};

export default useLogout;
