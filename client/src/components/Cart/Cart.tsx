import { Divider, HStack, Stack, Heading, Flex, calc } from "@chakra-ui/react";
import React from "react";
import CartItem from "./CartItem";

type Props = {};

const Cart = (props: Props) => {
	return (

				<Stack spacing={"2rem"}>
					{/* Number of Items */}
					<HStack gap={"0.5rem"}>
						<Heading as="h3" size="md" color="blackAlpha.600">
							Cart
						</Heading>
						<Divider
							height={"30px"}
							orientation="vertical"
							borderWidth={".1rem"}
							borderColor={"rgba(0,0,0,0.2)"}
						/>
						<Heading as="h3" size="md" color="blackAlpha.600">
							4
						</Heading>
					</HStack>

					{/* All Items */}
					<CartItem />
					<CartItem />
					<CartItem />
				</Stack>

	);
};

export default Cart;
