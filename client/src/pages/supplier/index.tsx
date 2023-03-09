import Login from "@/components/Auth/Login";
import SignUp from "@/components/Auth/SignUp";
import Navbar from "@/components/Header/Navbar";
import BannerHeading from "@/components/Misc/BannerHeading";
import { ChangeEvent, ChangeEventHandler, Suspense } from "react";
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

const upload_url = process.env.NEXT_PUBLIC_UPLOAD_URL as string;
const uplaod_preset = process.env.NEXT_PUBLIC_UPLOAD_PRESET as string;
const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME as string;
const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

export default function Seller() {
	const [showLogin, setShowLogin] = useState(false);
	const [show, setShow] = useState(false);

	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [address, setAddress] = useState("");
	const [gst_no, setGst_no] = useState("");
	const [image, setImage] = useState(
		"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
	);
	const [checked, setChecked] = useState(false);

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

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
			setImage(data.url);
			setIsLoading(false);
		} catch (error) {
			setIsError(true);
			setIsLoading(false);
		}
		// console.log(data);
	}

	async function handleFormSubmit() {
		// const {data} = await axios.post(base_url,formData)
		const v_email = validateEmail(email);
		const v_password = validatePassword(password,confirmPassword)
		const v_mobile = validateMobile(mobile)

		console.log(v_email)
		console.log(v_password);
		console.log(v_mobile)

	}

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
				<Stack bgColor={"white"} w={"100vw"} spacing={0}>
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
							<Stack
								h="100%"
								w={"100%"}
								bgColor="blackAlpha.100"
								display="flex"
								pb="6rem"
								spacing={"0"}
								justifyContent={"center"}
								alignItems="center">
								<Stack w="75%" m="auto" bgColor={"teal.300"} p="2rem">
									<SellerLogin />
								</Stack>
								<Image w="75%" m="auto" src="/ads/ad4.png" alt="ad4" />
							</Stack>
						) : (
							/* Signup */
							<Stack
								h="100%"
								w={"100%"}
								bgColor="teal.50"
								display="flex"
								pt="3rem"
								pb="6rem"
								spacing={"10"}
								justifyContent={"center"}
								alignItems="center">
								<Box color="teal.500">
									<BannerHeading size="2xl" title={"Join As a Seller"} />
								</Box>

								{/* Form */}

								<Stack
									borderRadius={"0.5rem"}
									bgColor={"white"}
									spacing={"2"}
									w="40%"
									m="auto">
									<Stack spacing={"3"} p="2rem">
										{/* Name Field */}
										<Flex gap="1rem" justifyContent={"space-between"}>
											{/* First name */}
											<FormControl isRequired>
												<FormLabel>First name</FormLabel>
												<Input
													placeholder="First name"
													type="text"
													value={fname}
													onChange={(e) => setFname(e.target.value)}
												/>
											</FormControl>
											{/* last name */}
											<FormControl>
												<FormLabel>Last name</FormLabel>
												<Input
													placeholder="Last name"
													type="text"
													value={lname}
													onChange={(e) => setLname(e.target.value)}
												/>
											</FormControl>
										</Flex>

										<Flex gap="1rem" justifyContent={"space-between"}>
											{/* Email */}
											<FormControl isInvalid={isError} isRequired>
												<FormLabel>Email</FormLabel>
												<Input
													type="email"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
												{!isError ? (
													<FormHelperText>
														Enter the email youd like to receive the newsletter
														on.
													</FormHelperText>
												) : (
													<FormErrorMessage>
														Email is required.
													</FormErrorMessage>
												)}
											</FormControl>
											{/* Mobile Number */}
											<FormControl isInvalid={isError} isRequired>
												<FormLabel>Mobile Number</FormLabel>
												<Input
													type="number"
													value={mobile}
													onChange={(e) => setMobile(e.target.value)}
												/>
												{isError && (
													<FormErrorMessage>Pasworing warning</FormErrorMessage>
												)}
											</FormControl>
										</Flex>

										<Flex gap="1rem" justifyContent={"space-between"}>
											{/* Password */}
											<FormControl isInvalid={isError} isRequired>
												<FormLabel>Password</FormLabel>
												<InputGroup>
													<Input
														type={show ? "text" : "password"}
														value={password}
														onChange={(e) => setPassword(e.target.value)}
													/>
													<InputRightElement onClick={() => setShow(!show)}>
														{show ? <FaEye /> : <FaEyeSlash />}
													</InputRightElement>
												</InputGroup>
												{!isError ? (
													<FormHelperText>
														Enter a strong Password of a length of 8 characters.
													</FormHelperText>
												) : (
													<FormErrorMessage>Pasworing warning</FormErrorMessage>
												)}
											</FormControl>

											{/* confirm Password */}
											<FormControl isInvalid={isError} isRequired>
												<FormLabel>Confirm Password</FormLabel>
												<InputGroup>
													<Input
														type={show ? "text" : "password"}
														value={confirmPassword}
														onChange={(e) => setConfirmPassword(e.target.value)}
													/>
													<InputRightElement onClick={() => setShow(!show)}>
														{show ? <FaEye /> : <FaEyeSlash />}
													</InputRightElement>
												</InputGroup>
												{isError && (
													<FormErrorMessage>Pasworing warning</FormErrorMessage>
												)}
											</FormControl>
										</Flex>

										{/* address */}
										<FormControl isInvalid={isError} isRequired>
											<FormLabel>Home Address</FormLabel>
											<Input
												type="address"
												value={address}
												onChange={(e) => setAddress(e.target.value)}
											/>

											{isError && (
												<FormErrorMessage>Pasworing warning</FormErrorMessage>
											)}
										</FormControl>

										{/* gst_no */}
										<FormControl isInvalid={isError} isRequired>
											<FormLabel>GST Number</FormLabel>
											<Input
												type="text"
												value={gst_no}
												onChange={(e) => setGst_no(e.target.value)}
											/>
											{isError && (
												<FormErrorMessage>Pasworing warning</FormErrorMessage>
											)}
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
													src={image}
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
										<Checkbox
											size="md"
											colorScheme="teal"
											checked={checked}
											onChange={() => setChecked(!checked)}>
											Agree terms & conditions
										</Checkbox>

										{/* Submit */}
										<Button
											isLoading={isLoading}
											colorScheme={"teal"}
											onClick={handleFormSubmit}
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
