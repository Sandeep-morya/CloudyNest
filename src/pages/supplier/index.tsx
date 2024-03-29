﻿// "use client"
import Login from "@/components/Auth/Login";
import SignUp from "@/components/Auth/SignUp";
import Navbar from "@/components/Header/Navbar";
import BannerHeading from "@/components/Misc/BannerHeading";
import {
	ChangeEvent,
	Dispatch,
	ReactNode,
	SetStateAction,
	useCallback,
	useEffect,
} from "react";
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
	Stack,
	Text,
	useToast,
	VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import SellerNav from "@/components/Seller/SellerNav";
import { FaAt, FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";
import SellerLogin from "@/components/Seller/SellerLogin";
import axios from "axios";
import validateEmail from "@/functions/validataEmail";
import validatePassword from "@/functions/validatePassword";
import validateMobile from "@/functions/validateMobile";
import validateNames from "@/functions/validateNames";
import validateGstNo from "@/functions/validateGstNumeber";
import validateAddress from "@/functions/validateAddress";
import { SellerType } from "@/Types";
import useToastAlert from "@/hooks/useToastalert";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import useThrottle from "@/hooks/useThrottle";
import { GetServerSideProps } from "next";
import useSetCookie from "@/hooks/useSetCookie";

const upload_url = process.env.NEXT_PUBLIC_UPLOAD_URL as string;
const uplaod_preset = process.env.NEXT_PUBLIC_UPLOAD_PRESET as string;
const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME as string;
const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

export default function Seller() {
	const setCookie = useSetCookie();
	const [showLogin, setShowLogin] = useState(true);
	const [show, setShow] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const toastAlert = useToastAlert();
	const router = useRouter();
	const throttle = useThrottle();

	/* Form states */
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [address, setAddress] = useState("");
	const [gst_no, setGst_no] = useState("");
	const [imageSrc, setImageSrc] = useState(
		"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
	);
	const [checked, setChecked] = useState(true);

	/* Form error states */
	const [fnameError, setFnameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [mobileError, setMobileError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [addressError, setAddressError] = useState("");
	const [gst_noError, setGst_noError] = useState("");
	const [sellerDetails, setSellerDetails] = useState({} as SellerType);

	/* Objective of this function
	 * - Uplaod Image on Cloudnary
	 * - Update formData state
	 */
	async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
		setIsLoading(true);

		const formData = new FormData();

		/* e.target.files can be null also so we are returning the user */
		if (!e.target.files || e.target.files.length === 0) {
			return;
		}
		try {
			formData.append("file", e.target.files[0]);
			formData.append("upload_preset", uplaod_preset);
			formData.append("cloud_name", cloud_name);
			const { data } = await axios.post(upload_url, formData);
			setImageSrc(data.url);
			setIsLoading(false);
		} catch (error) {
			setIsError(true);
			setIsLoading(false);
		}
		// console.log(data);
	}

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
		const v_name = validateError(
			validateNames(fname, lname),
			fname + " " + lname,
			setFnameError,
		);
		const v_email = validateError(validateEmail(email), email, setEmailError);
		const v_password = validateError(
			validatePassword(password, confirmPassword),
			password,
			setPasswordError,
		);
		const v_mobile = validateError(
			validateMobile(mobile),
			mobile,
			setMobileError,
		);

		const v_address = validateError(
			validateAddress(address),
			address,
			setAddressError,
		);
		const v_gst = validateError(validateGstNo(gst_no), gst_no, setGst_noError);

		if (
			v_email &&
			v_name &&
			v_mobile &&
			v_password &&
			v_address &&
			v_gst &&
			checked
		) {
			throttle(handleFormSubmit, 2000);
		} else {
			toastAlert("error", "Review form: Some is filled correctly");
		}
	}
	/* Form Submit */
	async function handleFormSubmit() {
		setIsLoading(true);
		try {
			const { data } = await axios.post(
				base_url + "/seller/register",
				sellerDetails,
			);
			if (data === "Email ID already Registered") {
				toastAlert("warning", data);
				setEmailError(data);
			} else if (data === "Mobile Numeber already Registered") {
				toastAlert("warning", data);
				setMobileError("Mobile Numeber already Registered");
			} else {
				// toast({
				// 	title: ``,
				// 	position: "top",
				// 	status: "success",
				// 	isClosable: true,
				// 	duration: 2000,
				// });
				toastAlert("success", "Congrats! Your are successfully registered");
				// localStorage.setItem("cloudynest_jwt_token", data.token as string);
				setCookie("cloudynest_jwt_token", data.token);
				router.replace("/supplier/dashboard/" + data.token);
			}
			setIsLoading(false);
		} catch (error) {
			toastAlert("error", "interanl server Error");
			setIsLoading(false);
		}
	}

	/* RemoveErrors */
	function washError(dispatch: Dispatch<SetStateAction<string>>) {
		dispatch("");
		setIsError(false);
	}

	// useEffect(() => {
	// 	const token = localStorage.getItem("cloudynest_jwt_token");
	// 	if (token) {
	// 		router.replace("/supplier/dashboard/" + token);
	// 	}
	// }, [router]);

	useEffect(() => {
		if (!isError) {
			setSellerDetails({
				image: imageSrc,
				gst: gst_no,
				name: fname + " " + lname,
				email: email.trim(),
				mobile: mobile.trim(),
				address: address.trim(),
				password: password.trim(),
			});
		}
	}, [
		isError,
		fname,
		lname,
		imageSrc,
		gst_no,
		email,
		mobile,
		address,
		password,
	]);

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
				<Stack w={"100%"} spacing={0}>
					<Box
						position="sticky"
						top={0}
						bgColor={"white"}
						pt="0.5rem"
						pb="1rem"
						zIndex={5}
						boxShadow="0px 20px 5px -20px rgba(0, 0, 0, 0.45)">
						<SellerNav hideExtras={false} {...{ showLogin, setShowLogin }} />
					</Box>

					{/* Login */}

					<form>
						{showLogin ? (
							<Box
								padding={{
									base: "1rem",
									md: "1rem",
									xl: "2rem 15rem",
									"2xl": "5rem 25rem",
								}}>
								<SellerLogin />
							</Box>
						) : (
							/* Signup */
							<Stack
								h="100%"
								w={"100%"}
								display="flex"
								pt="3rem"
								pb="6rem"
								pl="1rem"
								pr="1rem"
								spacing={"10"}
								justifyContent={"center"}
								alignItems="center">
								<Box color="teal.500">
									<BannerHeading
										size={{
											base: "sm",
											sm: "sm",
											md: "md",
											lg: "lg",
											xl: "xl",
											"2xl": "2xl",
										}}
										title={"Join As a Seller"}
									/>
								</Box>

								{/* Form */}

								<Stack
									borderRadius={"0.5rem"}
									bgColor={"white"}
									spacing={"2"}
									w={{
										base: "100%",
										md: "90%",
										lg: "65%",
										xl: "50%",
										"2xl": "40%",
									}}
									m="auto">
									<Stack spacing={"3"} p="2rem">
										{/* Name Field */}
										<Flex
											flexDirection={{
												base: "column",
												md: "column",
												xl: "row",
											}}
											gap="1rem"
											justifyContent={"space-between"}>
											{/* First name */}
											<FormControl isInvalid={fnameError != ""} isRequired>
												<FormLabel>First name</FormLabel>
												<Input
													placeholder="First name"
													focusBorderColor="teal.500"
													type="text"
													value={fname}
													onKeyDown={() => washError(setFnameError)}
													onChange={(e) => setFname(e.target.value)}
												/>

												<FormErrorMessage>{fnameError}</FormErrorMessage>
											</FormControl>
											{/* last name */}
											<FormControl>
												<FormLabel>Last name</FormLabel>
												<Input
													placeholder="Last name"
													focusBorderColor="teal.500"
													type="text"
													value={lname}
													onChange={(e) => setLname(e.target.value)}
												/>
											</FormControl>
										</Flex>

										<Flex
											flexDirection={{
												base: "column",
												md: "column",
												xl: "row",
											}}
											gap="1rem"
											justifyContent={"space-between"}>
											{/* Email */}
											<FormControl isInvalid={emailError != ""} isRequired>
												<FormLabel>Email</FormLabel>
												<Input
													type="email"
													value={email}
													onKeyDown={() => washError(setEmailError)}
													focusBorderColor="teal.500"
													onChange={(e) => setEmail(e.target.value)}
												/>
												{emailError === "" ? (
													<FormHelperText>
														Enter the email youd like to receive the newsletter
														on.
													</FormHelperText>
												) : (
													<FormErrorMessage>{emailError}</FormErrorMessage>
												)}
											</FormControl>

											{/* Mobile Number */}
											<FormControl isInvalid={mobileError != ""} isRequired>
												<FormLabel>Mobile Number</FormLabel>
												<Input
													type="number"
													value={mobile}
													focusBorderColor="teal.500"
													onKeyDown={() => washError(setMobileError)}
													onChange={(e) => setMobile(e.target.value)}
												/>

												<FormErrorMessage>{mobileError}</FormErrorMessage>
											</FormControl>
										</Flex>

										<Flex
											flexDirection={{
												base: "column",
												md: "column",
												xl: "row",
											}}
											gap="1rem"
											justifyContent={"space-between"}>
											{/* Password */}
											<FormControl isInvalid={passwordError != ""} isRequired>
												<FormLabel>Password</FormLabel>
												<InputGroup>
													<Input
														type={show ? "text" : "password"}
														value={password}
														onKeyDown={() => washError(setPasswordError)}
														focusBorderColor="teal.500"
														onChange={(e) => setPassword(e.target.value)}
													/>
													<InputRightElement onClick={() => setShow(!show)}>
														{show ? <FaEye /> : <FaEyeSlash />}
													</InputRightElement>
												</InputGroup>
												{!passwordError ? (
													<FormHelperText>
														Enter a strong Password of at least 8 characters.
													</FormHelperText>
												) : (
													<FormErrorMessage>{passwordError}</FormErrorMessage>
												)}
											</FormControl>

											{/* confirm Password */}
											<FormControl isRequired>
												<FormLabel>Confirm Password</FormLabel>
												<InputGroup>
													<Input
														type={show ? "text" : "password"}
														value={confirmPassword}
														focusBorderColor="teal.500"
														onChange={(e) => setConfirmPassword(e.target.value)}
													/>
													<InputRightElement onClick={() => setShow(!show)}>
														{show ? <FaEye /> : <FaEyeSlash />}
													</InputRightElement>
												</InputGroup>
											</FormControl>
										</Flex>

										{/* address */}
										<FormControl isInvalid={addressError != ""} isRequired>
											<FormLabel>Home Address</FormLabel>
											<Input
												type="address"
												value={address}
												onKeyDown={() => washError(setAddressError)}
												focusBorderColor="teal.500"
												onChange={(e) => setAddress(e.target.value)}
											/>

											<FormErrorMessage>{addressError}</FormErrorMessage>
										</FormControl>

										{/* gst_no */}
										<FormControl isInvalid={gst_noError != ""} isRequired>
											<FormLabel>GST Number</FormLabel>
											<Input
												type="text"
												value={gst_no}
												onKeyDown={() => washError(setGst_noError)}
												focusBorderColor="teal.500"
												onChange={(e) => setGst_no(e.target.value)}
											/>

											<FormErrorMessage>{gst_noError}</FormErrorMessage>
										</FormControl>
										<VStack
											p="1rem"
											bgColor={"blackAlpha.100"}
											borderRadius={"0.5rem"}>
											<Box
												position="relative"
												w={200}
												h={200}
												boxShadow="0 0 0.2rem black"
												borderRadius={"50%"}
												overflow="hidden">
												<FaCamera className="edit_icon" />

												<Image
													w="100%"
													h="100%"
													objectFit={"cover"}
													src={imageSrc}
													alt="ds"
													filter="drop-shadow(0 0 2px gray)"
												/>
												{/* image uplaod */}
												<input
													className="input_file"
													type="file"
													onChange={handleFileChange}
													accept="image/*"
													required
												/>
											</Box>
										</VStack>

										{/* Agreement */}
										<FormControl isInvalid={checked === false}>
											<Checkbox
												size="md"
												colorScheme="teal"
												checked={checked}
												defaultChecked={true}
												onChange={() => setChecked(!checked)}>
												Agree terms & conditions
											</Checkbox>
											<FormErrorMessage>
												Please Check This box to accept the terms & conditions
											</FormErrorMessage>
										</FormControl>
										{/* Submit */}
										<Button
											isLoading={isLoading}
											colorScheme={"teal"}
											onClick={() => {
												throttle(handleFormValidation, 1000);
											}}
											_hover={{
												background: "teal.100",
											}}>
											Create a Seller Account
										</Button>
									</Stack>
								</Stack>
							</Stack>
						)}
					</form>
				</Stack>
			</main>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const token = context.req.cookies.cloudynest_jwt_token;
	try {
		const status = jwt.verify(token as string, process.env.SECERT as string);
		return {
			redirect: {
				destination: "/supplier/dashboard/" + token + status,
				permanent: true,
			},
		};
	} catch (error) {
		return {
			props: {},
		};
	}
};
