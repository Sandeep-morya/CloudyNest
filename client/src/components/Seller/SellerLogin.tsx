import validateEmail from "@/functions/validataEmail";
import validatePassword from "@/functions/validatePassword";
import useThrottle from "@/hooks/useThrottle";
import useToastAlert from "@/hooks/useToastalert";
import { authInputType } from "@/Types";
import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Image,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightElement,
	Stack,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdClose, MdFace } from "react-icons/md";
import BannerHeading from "../Misc/BannerHeading";
import jwt from "jsonwebtoken";
import axios from "axios";
import { useRouter } from "next/router";
import useCookies from "react-cookie/cjs/useCookies";
import { GetServerSideProps } from "next";

type Props = {};

const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

const SellerLogin = (props: Props) => {
	const [cookies, setCookie] = useCookies(["cloudynest_jwt_token"]);
	const [show, setShow] = useState(false);
	const [isError, setIsError] = useState(false);
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [loginDetails, setLoginDetails] = useState({} as authInputType);
	const throttle = useThrottle();
	const toastAlert = useToastAlert();
	const router = useRouter();

	/* Mangae Errors */
	function validateError(
		validation_result: string,
		actual_one: string,
		dispatch: Dispatch<SetStateAction<string>>,
	) {
		if (validation_result != actual_one) {
			dispatch(validation_result);
			setIsError(true);
			return false;
		} else {
			dispatch("");
			return true;
		}
	}

	function handleFormValidation() {
		const v_email = validateError(validateEmail(email), email, setEmailError);
		const v_password = validateError(
			validatePassword(password),
			password,
			setPasswordError,
		);
		if (v_email && v_password) {
			throttle(handleFormSubmit, 2000);
		} else {
			toastAlert("error", "Review form: Some is filled correctly");
		}
	}

	/* RemoveErrors */
	function washError(dispatch: Dispatch<SetStateAction<string>>) {
		dispatch("");
		setIsError(false);
	}

	async function handleFormSubmit() {
		setIsLoading(true);
		try {
			const { data } = await axios.post(
				base_url + "/seller/login",
				loginDetails,
			);
			if (data === "Above Email is not registered with us") {
				toastAlert("warning", data);
				setEmailError(data);
			} else if (data === "Oopss.. you have enterd a wrong password") {
				toastAlert("warning", data);
				setPasswordError(data);
			} else {
				toastAlert("success", "Congrats! Your are successfully Login");
				setCookie("cloudynest_jwt_token", data.token);
				router.replace("/supplier/dashboard/" + data.token);
			}
			setIsLoading(false);
		} catch (error) {
			toastAlert("error", "interanl server Error");
			setIsLoading(false);
		}
	}
	useEffect(() => {
		if (!isError) {
			setLoginDetails({
				email: email.trim(),
				password: password.trim(),
			});
		}
	}, [isError, email, password]);
	return (
		<Stack
			spacing={"5"}
			w="40%"
			m="auto"
			bgColor={"white"}
			p="2rem"
			boxShadow={"2px 2px 6px gray"}
			borderRadius={"0.5rem"}>
			<Image
				w={"min-content"}
				m="auto"
				h={150}
				filter="drop-shadow(0 0 1px teal)"
				src="/CloudyNest-Complete_logo.png"
				alt="CloudyNest-Complete_logo"
			/>
			{/* Name Field */}
			<Heading as="h2" size="md" textAlign={"start"}>
				Enter Credentials to Login
			</Heading>

			<FormControl isInvalid={emailError != ""}>
				<InputGroup size="md">
					<InputLeftAddon>
						<MdFace size={22} />
					</InputLeftAddon>
					<Input
						focusBorderColor={"teal.500"}
						pr="4.5rem"
						type={"text"}
						placeholder="Email Address"
						value={email}
						onKeyDown={() => washError(setEmailError)}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</InputGroup>
				<FormErrorMessage>{emailError}</FormErrorMessage>
			</FormControl>

			{/* Password Filed */}
			<FormControl isInvalid={passwordError != ""}>
				<InputGroup size="md">
					<InputLeftAddon onClick={() => setShow(!show)}>
						{!show ? <FaEyeSlash size="20" /> : <FaEye size="20" />}
					</InputLeftAddon>
					<Input
						focusBorderColor={"teal.500"}
						pr="4.5rem"
						type={show ? "text" : "password"}
						placeholder="Password"
						value={password}
						onKeyDown={() => washError(setPasswordError)}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</InputGroup>
				<FormErrorMessage>{passwordError}</FormErrorMessage>
			</FormControl>
			{/* Submit */}

			<Button
				_hover={{ color: "white" }}
				colorScheme={"teal"}
				isLoading={isLoading}
				onClick={() => throttle(handleFormValidation, 500)}
				disabled={isError}>
				Login to Continue
			</Button>
		</Stack>
	);
};

export default SellerLogin;
