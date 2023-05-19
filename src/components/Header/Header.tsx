import { Box, useMediaQuery, VStack } from "@chakra-ui/react";
import React from "react";
import MenuTabs from "./MenuTabs";
import Navbar from "./Navbar";

type Props = {
	cartCount: number;
};

const Header = ({ cartCount }: Props) => {
	const [smallNav] = useMediaQuery("(max-width: 64rem)");
	return (
		<VStack background={"white"} position="sticky" top={0} zIndex="5">
			<Navbar cartCount={cartCount} hideExtras={false} />
			{!smallNav && <MenuTabs />}
		</VStack>
	);
};

export default Header;
