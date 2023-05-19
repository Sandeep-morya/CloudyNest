import React from "react";

import Cookie from "js-cookie";

const useSetCookie = () => {
	return (cookiename: string, value: string) => {
		Cookie.set(cookiename, value, {
			secure: true,
			sameSite: "strict",
			path: "/",
		});
	};
};

export default useSetCookie;
