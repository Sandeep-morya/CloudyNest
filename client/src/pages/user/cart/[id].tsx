import Login from "@/components/Auth/Login";
import SignUp from "@/components/Auth/SignUp";
import Navbar from "@/components/Header/Navbar";
import { ChangeEventHandler, Suspense } from "react";
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
import { useState,useEffect } from "react";
import { FaAt, FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";

import { useRouter } from "next/router";
import ProgressSteps from "@/components/Cart/ProgressSteps";

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

export default function SingleUserCart() {
	const [state,setState] = useState(0)
	const [showLogin, setShowLogin] = useState(false);
	const [show, setShow] = useState(false);
	const [formData, setFormData] = useState(initalState);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const router = useRouter();

	useEffect(()=>{
		if(state>70){
			setState(100)
		}
		if(state<30){
			setState(0)
		}
	},[state])


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
						<Navbar hideExtras={true} />
					</Box>

					{/* Cart */}
					<Stack
						w={"75%"}
						spacing={0}
						border="1px solid red"
						alignItems={"center"}>
						<ProgressSteps {...{ state }} />
						<Button
							disabled={state >= 100}
							onClick={() => setState(state + 34)}>
							Next
						</Button>
						<Button disabled={state >= 0} onClick={() => setState(state - 34)}>
							Prev
						</Button>
					</Stack>
				</Stack>
			</main>
		</>
	);
}
