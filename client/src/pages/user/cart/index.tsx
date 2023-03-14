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

interface Props {
	cartList: { id: string; count: number }[];
}

export default function SingleUserCart({ cartList }: Props) {
	const [state, setState] = useState(0);
	const [cartItemsList, setCartItemsList] = useState(cartList);

	const [checkoutPrice, setCheckoutPrice] = useState(0);

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const router = useRouter();
	const throttle = useThrottle();
	const toastAlert = useToastAlert();

	const handleCartAmount = useCallback(function (value: number) {
		setCheckoutPrice((e) => e + value);
	}, []);

	useEffect(() => {
		if (state > 70) {
			setState(100);
		}
		if (state < 30) {
			setState(0);
		}
	}, [state]);

	// console.log(cartList);
	console.log(checkoutPrice);
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
						<CartNav {...{ state }} />
					</Box>

					<Stack
						w={"100%"}
						spacing={5}
						bgColor={"blackAlpha.100"}
						p={{ md: "2rem 0", xl: "2rem 0", "2xl": "2rem 15rem" }}
						alignItems={"center"}>
						<Flex w="100%" justifyContent={"space-between"} gap="2rem">
							{/* Cart  */}
							<Box flex="1">
								<Cart cartList={cartItemsList} {...{ handleCartAmount }} />
							</Box>
							<Divider
								height="auto"
								marginTop={"3.5rem"}
								orientation="vertical"
								borderWidth={".1rem"}
								borderColor={"rgba(0,0,0,0.1)"}
							/>

							<Stack flex="1">
								<Heading as="h3" size="md" color="blackAlpha.600">
									Price Details
								</Heading>
							</Stack>
						</Flex>

						<Flex
							w="100%"
							pt="2rem"
							alignItems={"center"}
							justifyContent="space-between">
							<Button
								colorScheme={"teal"}
								_hover={{ color: "white", backgroundColor: "teal" }}
								disabled={state >= 0}
								onClick={() => setState(state - 34)}>
								Previous
							</Button>

							<Button
								colorScheme={"teal"}
								disabled={state >= 100}
								_hover={{ color: "white", backgroundColor: "teal" }}
								onClick={() => setState(state + 34)}>
								Next
							</Button>
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
				destination: "/",
				permanent: false,
			},
		};
	}
};
