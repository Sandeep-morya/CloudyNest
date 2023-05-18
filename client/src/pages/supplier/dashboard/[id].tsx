import Login from "@/components/Auth/Login";
import SignUp from "@/components/Auth/SignUp";
import Navbar from "@/components/Header/Navbar";
import BannerHeading from "@/components/Misc/BannerHeading";
import { ChangeEventHandler, Suspense, useEffect } from "react";
import {
	Badge,
	Box,
	Button,
	Center,
	Checkbox,
	Container,
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
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import SellerNav from "@/components/Seller/SellerNav";
import { FaAt, FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";
import SellerLogin from "@/components/Seller/SellerLogin";
import Dashboard from "@/components/Seller/Dashboard";
import { GetServerSideProps } from "next";
import axios, { AxiosResponse } from "axios";
import { sellerProfileType, SellerType } from "@/Types";
import ProfileCard from "@/components/Misc/ProfileCard";
import { useRouter } from "next/router";
import AllProducts from "@/components/Seller/AllProducts";
import AllOrders from "@/components/Seller/AllOrders";

interface Props {
	// auth: boolean;
	// token: string;
	data: sellerProfileType;
}

export default function Seller({ data }: Props) {
	const [showLogin, setShowLogin] = useState(false);
	const [show, setShow] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const router = useRouter();

	return (
		<>
			<Head>
				<title>CloudyNest - Login as Supplier</title>
				<meta
					name="description"
					content="CloudyNest - An Online Shopping Website"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/CloudyNest-Logo-Image.png" />
			</Head>
			<main>
				<Stack bgColor={"blackAlpha.100"} w={"100vw"} spacing={0}>
					<Box
						position="sticky"
						top={0}
						bgColor={"white"}
						pt="0.5rem"
						pb="1rem"
						zIndex={5}
						boxShadow="0px 20px 5px -20px rgba(0, 0, 0, 0.45)">
						<SellerNav hideExtras={true} {...{ showLogin, setShowLogin }} />
					</Box>
					<Stack
						w="100%"
						p={{ md: "0", xl: "0", "2xl": "2rem 15rem" }}
						justifyContent={"center"}
						spacing="2rem"
						alignItems="center">
						<ProfileCard data={data} />

						<AllProducts seller_id={data._id} />

						<AllOrders />
					</Stack>
				</Stack>
			</main>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const { data }: AxiosResponse<sellerProfileType, any> = await axios.get(
			`${process.env.BASE_URL}/seller/profile`,
			{ headers: { Authorization: context.req.cookies.cloudynest_jwt_token } },
		);
		return {
			props: { data },
		};
	} catch {
		return {
			redirect: {
				destination: "/supplier",
				permanent: false,
			},
		};
	}
};
