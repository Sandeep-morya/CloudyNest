import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Footer from "./Content/Footer";

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<Stack className="layout" backgroundColor={"#ebebeb"}>
			{children}
			<Box paddingTop={"10rem"}>
				<Footer />
			</Box>
		</Stack>
	);
};

export default Layout;
