﻿import AddressForm from "@/components/Checkout/AdressForm";
import CartNav from "@/components/Cart/CartNav";
import { cartItemType, FinalProductType } from "@/Types";
import {
	Box,
	Button,
	Center,
	Flex,
	Grid,
	SimpleGrid,
	Spinner,
	Stack,
	Text,
} from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import jwt from "jsonwebtoken";
import CartPrice from "@/components/Cart/CartPrice";
import PaymentForm from "@/components/Checkout/PaymentForm";
import Summary from "@/components/Checkout/Summary";
import useToastAlert from "@/hooks/useToastalert";
import useThrottle from "@/hooks/useThrottle";

type Props = {};

const Checkout = (props: Props) => {
	const [state, setState] = useState(35);
	const router = useRouter();
	const throttle = useThrottle();
	const toastAlert = useToastAlert();
	const [checkoutList, setCheckoutList] = useState([] as cartItemType[]);
	const total = checkoutList.reduce((sum, e) => sum + e.count * e.price, 0);
	const [paymentMethod, setPaymentMethod] = useState("");
	const [paymentStatus, setPaymentStatus] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	async function makeOrder() {
		setIsLoading(true);
		try {
		} catch (error) {}
	}

	function handleClick() {
		setState((e) => {
			const next = e + 34;
			if (next > 90) {
				if (paymentMethod != "") {
					makeOrder();
				} else {
					throttle(() => {
						toastAlert("error", "Select a payment method");
					}, 1000);
					return e;
				}
			}
			return next;
		});
	}

	useEffect(() => {
		const list = JSON.parse(localStorage.getItem("checkout")!) || [];
		if (list.length < 1) {
			router.replace("/");
		} else {
			setCheckoutList(list);
		}
	}, [router]);
	console.log(paymentMethod);

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
			<main style={{ position: "relative" }}>
				{isLoading && (
					<div className="final_payment">
						<Text as="b">Waiting for Payment</Text>
						<Spinner
							thickness="4px"
							speed="0.65s"
							emptyColor="gray.200"
							color="teal.400"
							size="xl"
						/>
					</div>
				)}
				<Stack w={"100vw"} h="100vh" spacing={0} alignItems={"center"}>
					<Box
						w="100%"
						position="sticky"
						top={0}
						bgColor={"white"}
						pt="0.5rem"
						pb="1rem"
						zIndex={5}
						boxShadow="0px 20px 5px -20px rgba(0, 0, 0, 0.45)">
						<CartNav state={state} />
					</Box>
					<Stack
						w="50%"
						spacing={5}
						p={{ md: "2rem 0", xl: "2rem 0", "2xl": "2rem 15rem" }}>
						{state < 70 && (
							<Flex
								bgColor={"white"}
								borderRadius="0.5rem"
								boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
								justifyContent={"space-between"}
								p="1.5rem">
								<Text as="b">Total Amount to pay:</Text>
								<Text as="b">₹ {total}</Text>
							</Flex>
						)}

						{state < 40 ? (
							<AddressForm />
						) : state > 40 && state < 90 ? (
							<PaymentForm
								{...{
									setPaymentMethod,
									paymentStatus,
									setPaymentStatus,
									isLoading,
								}}
							/>
						) : (
							<Summary />
						)}

						{state < 70 && (
							<Flex
								w="100%"
								alignItems={"center"}
								justifyContent="space-between">
								<Button
									colorScheme={"teal"}
									visibility={state < 40 ? "hidden" : "visible"}
									_hover={{ color: "white", backgroundColor: "teal" }}
									disabled={state < 40}
									onClick={() => setState(state - 34)}>
									Previous
								</Button>

								<Button
									colorScheme={"teal"}
									disabled={state > 90}
									visibility={state > 90 ? "hidden" : "visible"}
									_hover={{ color: "white", backgroundColor: "teal" }}
									onClick={handleClick}>
									{state > 60 ? "Submit" : "Next"}
								</Button>
							</Flex>
						)}
					</Stack>
				</Stack>
			</main>
		</>
	);
};

export default Checkout;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const token = context.req.cookies.user_cloudynest_jwt_token;
	try {
		const status = jwt.verify(token as string, process.env.SECERT as string);
		return {
			props: {},
		};
	} catch (error) {
		return {
			redirect: {
				destination: "/auth",
				permanent: true,
			},
		};
	}
};
