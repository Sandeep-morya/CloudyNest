﻿import useBuyNow from "@/hooks/useBuyNow";
import { cartItemType } from "@/Types";
import {
	Box,
	Button,
	Divider,
	Flex,
	Grid,
	SimpleGrid,
	Spacer,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";

type Props = {
	cartList: cartItemType[];
	deleteCartItem: (id: string) => Promise<void>;
};

const CartPrice = ({ cartList, deleteCartItem }: Props) => {
	const total = cartList.reduce((sum, e) => sum + e.count * e.price, 0);
	const buyNow = useBuyNow();

	function handleClick() {
		buyNow(cartList);
		cartList.forEach((e) => {
			deleteCartItem(e.id);
		});
	}

	return (
		<Stack w="100%" h="100%" bgColor={"white"} borderRadius="0.5rem" p="1rem">
			<Stack w="100%" h="50%" spacing={3} p="1rem" overflowY={"scroll"}>
				{cartList.map((item, index) => (
					<Grid
						key={item.id + index}
						gridTemplateColumns={"4fr 2fr 2fr"}
						alignItems="flex-end">
						<Text>{item.title}</Text>
						<SimpleGrid columns={3}>
							<Text textAlign={"end"}>{item.price}</Text>
							<Text textAlign={"center"}>x</Text>
							<Text textAlign={"start"}>{item.count}</Text>
						</SimpleGrid>
						<Text textAlign={"end"}> {item.price * item.count}</Text>
					</Grid>
				))}
			</Stack>
			<Flex
				justifyContent={"space-between"}
				w="100%"
				p="1rem"
				borderBottom={"1px solid black"}
				borderTop={"1px solid black"}>
				<Text as="b"> Total Amount</Text>
				<Text as="b"> ₹ {total} </Text>
			</Flex>
			<Spacer />
			<Button
				variant="solid"
				colorScheme={"teal"}
				onClick={handleClick}
				size="lg"
				_hover={{ color: "white", backgroundColor: "teal" }}>
				Buy All
			</Button>
		</Stack>
	);
};

export default CartPrice;
