import useGetCookie from "@/hooks/useGetCookie";
import { FinalProductType } from "@/Types";
import { Divider, HStack, Stack, Heading, Flex, calc } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";
import CartItem from "./CartItem";

type Props = {
	cartList: { id: string; count: number; title: string; price: number }[];
	deleteCartItem: (id: string) => Promise<void>;
	updateCartItem: (id: string, count: number) => Promise<void>;
};

const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

const Cart = ({ cartList, deleteCartItem, updateCartItem }: Props) => {
	return (
		<Stack spacing={"2rem"} h="100%">
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
					{cartList.length}
				</Heading>
			</HStack>

			{/* All Items */}
			<Stack h="100%" borderRadius="0.5rem">
				{cartList.map((e) => (
					<CartItem
						key={e.id}
						id={e.id}
						initialCount={e.count}
						{...{ deleteCartItem, updateCartItem }}
					/>
				))}
			</Stack>
		</Stack>
	);
};

export default Cart;
