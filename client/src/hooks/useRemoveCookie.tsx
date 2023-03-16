import React from "react";

import Cookie from "js-cookie";

const useRemoveCookie = () => {
	return (cookiename: string) => {
		Cookie.remove(cookiename);
	};
};

export default useRemoveCookie;
