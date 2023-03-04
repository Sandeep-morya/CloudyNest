import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import MenuTabs from "./MenuTabs";
import Navbar from "./Navbar";

type Props = {};

const Header = (props: Props) => {
	return (
		<VStack background={"white"} position="sticky" top={0} zIndex="1">
			<Navbar hideExtras={false} />
			<MenuTabs />
		</VStack>
	);
};

export default Header;
