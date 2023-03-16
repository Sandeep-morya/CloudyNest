import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import MenuTabs from "./MenuTabs";
import Navbar from "./Navbar";

type Props = {
	cartCount:number
};

const Header = ({ cartCount }: Props) => {
	return (
		<VStack background={"white"} position="sticky" top={0} zIndex="1">
			<Navbar cartCount={cartCount} hideExtras={false} />
			<MenuTabs />
		</VStack>
	);
};

export default Header;
