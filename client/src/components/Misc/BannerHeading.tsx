import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {};

const BannerHeading = (props: Props) => {
	return (
		<Flex gap={"2rem"} alignItems="center">
			<Box w="120px" bgColor="teal" h={"2px"}></Box>
			<Heading as={"h1"} size="2xl">
				Top Categories to choose from
			</Heading>
			<Box w="120px" bgColor="teal" h={"2px"}></Box>
		</Flex>
	);
};

export default BannerHeading;
