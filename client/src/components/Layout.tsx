import { Stack } from "@chakra-ui/react";
import React from "react";

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<Stack className="layout" backgroundColor={"#ebebeb"}>
			{children}
		</Stack>
	);
};

export default Layout;
