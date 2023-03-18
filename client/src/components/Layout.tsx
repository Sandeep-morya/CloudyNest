import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Footer from "./Content/Footer";
import { extendTheme } from "@chakra-ui/react";

interface Props {
	children: React.ReactNode;
}
const breakpoints = {
	sm: "34rem",
	md: "60rem",
	lg: "76.8rem",
	xl: "144rem",
	"2xl": "256rem",
};
const theme = extendTheme({ breakpoints });
const Layout = ({ children }: Props) => {
	const bgColor = useColorModeValue("#ebebeb", "#112211");
	return (
		<Stack className="layout" backgroundColor={bgColor}>
			{children}
			<Box paddingTop={"10rem"}>
				<Footer />
			</Box>
		</Stack>
	);
};

export default Layout;
