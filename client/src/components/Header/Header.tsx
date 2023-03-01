import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import MenuTabs from "./MenuTabs";
import Navbar from "./Navbar";

type Props = {};

const Header = (props: Props) => {
	return (
		<VStack
			background={"white"}
			borderBottom=".1rem solid"
			borderBottomColor={"blackAlpha.300"}>
			<Navbar />
			<MenuTabs />
		</VStack>
	);
};

export default Header;
