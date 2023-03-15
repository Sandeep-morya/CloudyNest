import React from "react";

import Cookie from "js-cookie";

const useGetCookie = () => {
	return (cookiename: string) => Cookie.get(cookiename);
};

export default useGetCookie;
