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
import { FaAt, FaCamera, FaEye, FaEyeSlash} from "react-icons/fa";
import SellerLogin from "@/components/Seller/SellerLogin";

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
				<Stack bgColor={"white"} w={"100vw"} spacing={0}>
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
					{/* Login */}
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
											src={formData.image}
											alt="ds"
											filter="drop-shadow(0 0 2px gray)"
										/>
										{/*  */}
										<input
											className="input_file"
											type="file"
											onChange={handleFileChange}
											accept="image/*"
										/>
									</Box>
								</VStack>
								<Stack spacing={"3"} p="2rem">
									{/* Name Field */}
									<Flex gap="1rem" justifyContent={"space-between"}>
										{/* First name */}
										<FormControl isRequired>
											<FormLabel>First name</FormLabel>
											<Input
												placeholder="First name"
												type="text"
												value={formData.f_name}
												onChange={(e) =>
													setFormData({ ...formData, f_name: e.target.value })
												}
											/>
										</FormControl>
										{/* last name */}
										<FormControl>
											<FormLabel>Last name</FormLabel>
											<Input
												placeholder="Last name"
												type="text"
												value={formData.l_name}
												onChange={(e) =>
													setFormData({ ...formData, l_name: e.target.value })
												}
											/>
										</FormControl>
									</Flex>

									{/* Email */}
									<FormControl isInvalid={isError} isRequired>
										<FormLabel>Email</FormLabel>
										<Input
											type="email"
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
										/>
										{!isError ? (
											<FormHelperText>
												Enter the email youd like to receive the newsletter on.
											</FormHelperText>
										) : (
											<FormErrorMessage>Email is required.</FormErrorMessage>
										)}
									</FormControl>

									{/* Password */}
									<FormControl isInvalid={isError} isRequired>
										<FormLabel>Password</FormLabel>
										<InputGroup>
											<Input
												type={show ? "text" : "password"}
												value={formData.password}
												onChange={(e) =>
													setFormData({ ...formData, password: e.target.value })
												}
											/>
											<InputRightElement onClick={() => setShow(!show)}>
												{show ? <FaEye /> : <FaEyeSlash />}
											</InputRightElement>
										</InputGroup>
										{isError && (
											<FormErrorMessage>Pasworing warning</FormErrorMessage>
										)}
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
												value={formData.c_password}
												onChange={(e) =>
													setFormData({
														...formData,
														c_password: e.target.value,
													})
												}
											/>
											<InputRightElement onClick={() => setShow(!show)}>
												{show ? <FaEye /> : <FaEyeSlash />}
											</InputRightElement>
										</InputGroup>
										{isError && (
											<FormErrorMessage>Pasworing warning</FormErrorMessage>
										)}
									</FormControl>

									{/* address */}
									<FormControl isInvalid={isError} isRequired>
										<FormLabel>Home Address</FormLabel>
										<Input
											type="address"
											value={formData.address}
											onChange={(e) =>
												setFormData({ ...formData, address: e.target.value })
											}
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
											value={formData.gst_no}
											onChange={(e) =>
												setFormData({ ...formData, gst_no: e.target.value })
											}
										/>
										{isError && (
											<FormErrorMessage>Pasworing warning</FormErrorMessage>
										)}
									</FormControl>

									{/* Agreement */}
									<Checkbox
										size="md"
										colorScheme="teal"
										checked={formData.checked}
										onChange={() =>
											setFormData({ ...formData, checked: !formData.checked })
										}>
										Agree terms & conditions
									</Checkbox>

									{/* Submit */}
									<Button
										colorScheme={"teal"}
										_hover={{
											background: "teal.100",
										}}>
										Create a Seller Account
									</Button>
								</Stack>
							</Stack>
						</Stack>
					)}
				</Stack>
			</main>
		</>
	);
}
