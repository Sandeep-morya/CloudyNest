import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import MenuTabs from "./MenuTabs";
import Navbar from "./Navbar";

type Props = {};

const Header = (props: Props) => {
	return (
		<VStack background={"white"}>
			<Navbar />
			<MenuTabs />
		</VStack>
	);
};

export default Header;
