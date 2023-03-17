import { Stack } from "@chakra-ui/react";
import React from "react";
import Footer from "./Content/Footer";

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<Stack className="layout" backgroundColor={"#ebebeb"}>
			{children}
			<Footer />
		</Stack>
	);
};

export default Layout;
