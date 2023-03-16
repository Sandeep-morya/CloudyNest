import Login from "@/components/Auth/Login";
import SignUp from "@/components/Auth/SignUp";
import Navbar from "@/components/Header/Navbar";
import { ChangeEventHandler, Suspense, useCallback } from "react";
import {
	Badge,
	Box,
	Button,
	Center,
	Checkbox,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Heading,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Progress,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState, useEffect } from "react";
import { FaAt, FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";

import { useRouter } from "next/router";
import ProgressSteps from "@/components/Cart/ProgressSteps";
import Cart from "@/components/Cart/Cart";
import CartNav from "@/components/Cart/CartNav";
import { GetServerSideProps } from "next";
import axios, { AxiosResponse } from "axios";
import useThrottle from "@/hooks/useThrottle";
import useToastAlert from "@/hooks/useToastalert";
import CartPrice from "@/components/Cart/CartPrice";
import useGetCookie from "@/hooks/useGetCookie";

interface Props {
	cartList: { id: string; count: number; title: string; price: number }[];
}
const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

export default function SingleUserCart({ cartList }: Props) {
	const [cartItemsList, setCartItemsList] = useState(cartList);

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const router = useRouter();
	const throttle = useThrottle();
	const toastAlert = useToastAlert();
	const getCookie = useGetCookie();
	const token = getCookie("user_cloudynest_jwt_token");

	const deleteCartItem = async (id: string) => {
		try {
			const { data } = await axios.delete(`${base_url}/cart/${id}`, {
				headers: { Authorization: token },
			});
			setCartItemsList(data);
		} catch (error) {
			console.log(error);
		}
	};

	const updateCartItem = useCallback(
		async (id: string, count: number) => {
			try {
				const { data } = await axios.patch(
					`${base_url}/cart/${id}`,
					{ count },
					{
						headers: { Authorization: token },
					},
				);
				setCartItemsList(data);
			} catch (error) {
				console.log(error);
			}
		},
		[token],
	);

	return (
		<>
			<Head>
				<title>CloudyNest - Become a Supplier</title>
				<meta
					name="description"
					content="CloudyNest - An Online Shopping Website"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/CloudyNest-Logo-Image.png" />
			</Head>
			<main>
				<Stack bgColor={"white"} w={"100vw"} spacing={0} alignItems={"center"}>
					<Box
						w="100%"
						position="sticky"
						top={0}
						bgColor={"white"}
						pt="0.5rem"
						pb="1rem"
						zIndex={5}
						boxShadow="0px 20px 5px -20px rgba(0, 0, 0, 0.45)">
						<CartNav state={0} />
					</Box>

					<Stack
						w={"100%"}
						spacing={5}
						h={"100vh"}
						bgColor={"blackAlpha.100"}
						p={{ md: "2rem 0", xl: "2rem 0", "2xl": "2rem 15rem" }}
						alignItems={"center"}>
						<Flex
							w="100%"
							justifyContent={"space-between"}
							gap="2rem"
							h={"75%"}>
							{/* Cart  */}
							<Box flex="1">
								<Cart
									cartList={cartItemsList}
									deleteCartItem={deleteCartItem}
									updateCartItem={updateCartItem}
								/>
							</Box>
							<Divider
								height="auto"
								marginTop={"3.5rem"}
								orientation="vertical"
								borderWidth={".1rem"}
								borderColor={"rgba(0,0,0,0.1)"}
							/>

							<Stack flex="1" spacing={10}>
								<Heading as="h3" size="md" color="blackAlpha.600">
									Price Details
								</Heading>
								<Box w="100%" h="100%">
									<CartPrice cartList={cartItemsList} />
								</Box>
							</Stack>
						</Flex>
					</Stack>
				</Stack>
			</main>
		</>
	);
}
export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const { data } = await axios.get(`${process.env.BASE_URL}/cart`, {
			headers: {
				Authorization: context.req.cookies.user_cloudynest_jwt_token,
			},
		});
		return {
			props: { cartList: data },
		};
	} catch {
		return {
			redirect: {
				destination: "/auth",
				permanent: false,
			},
		};
	}
};
