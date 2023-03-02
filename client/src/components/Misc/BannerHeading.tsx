import { Box, Divider, Flex, Heading, ResponsiveValue } from "@chakra-ui/react";
import React from "react";

interface Props {
	size:
		| ResponsiveValue<
				(string & {}) | "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl"
		  >
		| undefined;
	title: String;
}

const BannerHeading = ({ size, title }: Props) => {
	return (
		<Flex gap={"2rem"} alignItems="center">
			<Box w="120px" bgColor="teal" h={"1px"}></Box>
			<Heading as={"h1"} size={size}>
				{title}
			</Heading>
			<Box w="120px" bgColor="teal" h={"1px"}></Box>
		</Flex>
	);
};

export default BannerHeading;
