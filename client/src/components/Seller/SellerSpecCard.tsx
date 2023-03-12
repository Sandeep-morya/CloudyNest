import { Flex, Heading, Spacer, Stack } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface Props {
	count: string | number;
	title: string;
	Icon: IconType;
}

const SellerSpecCard = ({ count, title, Icon }: Props) => {
	return (
		<Flex
			p="1rem"
			flexDirection={"column"}
			bgColor={"teal.50"}
			alignContent="center"
			alignItems="flex-start"
			borderRadius={"0.5rem"}
			outline={"1px dashed teal"}>
			<Icon size="25" color="teal" />
			<Heading as="h2" size="sm" color={"teal"}>
				{count}
			</Heading>
			<Heading as="h2" size="sm" color={"teal"}>
				{title}
			</Heading>
			<Spacer />
			<Spacer />
		</Flex>
	);
};

export default SellerSpecCard;
