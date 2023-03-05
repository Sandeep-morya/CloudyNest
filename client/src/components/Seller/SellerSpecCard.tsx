import { Heading, Spacer, Stack } from '@chakra-ui/react';
import React from 'react'
import { IconType } from 'react-icons';

interface Props {
    count:string|number;
    title:string;
    Icon:IconType
}

const SellerSpecCard = ({count,title,Icon}: Props) => {
  return (
		<Stack
			w="30%"
			bgColor={"teal.50"}
			p="1rem"
			borderRadius={"0.5rem"}
			outline={"1px dashed teal"}>
			<Icon size="25" color="teal" />
			<Heading as="h2" size="sm" color={"teal"}>
				2000+
			</Heading>
			<Heading as="h2" size="sm" color={"teal"}>
				Reviews
			</Heading>
			<Spacer />
			<Spacer />
		</Stack>
	);
}

export default SellerSpecCard