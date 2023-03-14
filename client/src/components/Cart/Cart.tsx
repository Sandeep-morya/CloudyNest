import { FinalProductType } from "@/Types";
import { Divider, HStack, Stack, Heading, Flex, calc } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import CartItem from "./CartItem";

type Props = {
	cartList: { id: string; count: number }[];
	handleCartAmount: (param: number) => void;
};

const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

const Cart = ({ cartList, handleCartAmount }: Props) => {
	const [cookies] = useCookies();
	const [cartItemsList, setCartItemsList] = useState(cartList);

	const deleteCartItem = async (id: string) => {
		try {
			const { data } = await axios.delete(`${base_url}/cart/${id}`, {
				headers: { Authorization: cookies.user_cloudynest_jwt_token },
			});
			setCartItemsList(data);
		} catch (error) {
			console.log(error);
		}
	};

	const updateCartItem = async (id: string, count: number) => {
		try {
			const { data } = await axios.patch(
				`${base_url}/cart/${id}`,
				{ count },
				{
					headers: { Authorization: cookies.user_cloudynest_jwt_token },
				},
			);
			setCartItemsList(data);
		} catch (error) {
			console.log(error);
		}
	};

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
					{cartItemsList.length}
				</Heading>
			</HStack>

			{/* All Items */}
			{cartItemsList.map((e) => (
				<CartItem
					key={e.id}
					id={e.id}
					initialCount={e.count}
					{...{ deleteCartItem, handleCartAmount, updateCartItem }}
				/>
			))}
		</Stack>
	);
};

export default Cart;
