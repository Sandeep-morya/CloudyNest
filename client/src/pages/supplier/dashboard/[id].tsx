import Login from "@/components/Auth/Login";
import SignUp from "@/components/Auth/SignUp";
import Navbar from "@/components/Header/Navbar";
import BannerHeading from "@/components/Misc/BannerHeading";
import { ChangeEventHandler, Suspense } from "react";
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

const initalState = {
	f_name: "",
	l_name: "",
	email: "",
	password: "",
	c_password: "",
	address: "",
	gst_no: "",
	checked: true,
	image:
		"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
};

export default function Seller() {
	const [showLogin, setShowLogin] = useState(false);
	const [show, setShow] = useState(false);
	const [formData, setFormData] = useState(initalState);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	async function handleFileChange() {}

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
				<Stack bgColor={"blackAlpha.100"} w={"100vw"} spacing={0}>
					<Box
						position="sticky"
						top={0}
						bgColor={"white"}
						pt="0.5rem"
						pb="1rem"
						zIndex={5}
						boxShadow="0px 20px 5px -20px rgba(0, 0, 0, 0.45)">
						<SellerNav {...{ showLogin, setShowLogin }} />
					</Box>
					<Flex
						justifyContent={"center"}
						alignItems="center"
						>
						<Dashboard />
					</Flex>
				</Stack>
			</main>
		</>
	);
}
