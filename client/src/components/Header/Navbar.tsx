import {
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Spacer,
	Stack,
	Text,
	theme,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsBagCheck } from "react-icons/bs";
import { Theme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import { useCookies } from "react-cookie";
import axios from "axios";
import useLogout from "@/hooks/useLogout";

interface Props {
	hideExtras: boolean;
}

const secret = process.env.NEXT_PUBLIC_SECERT as string;
const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

const Navbar = ({ hideExtras }: Props) => {
	const [cookies] = useCookies();
	const [hidden, setHidden] = useState(true);
	const [serachBarText, setSearchBarText] = useState("");
	const [username, setUsername] = useState("");
	const router = useRouter();
	const logout = useLogout("user_cloudynest_jwt_token");

	const getUser = useCallback(
		async function () {
			const token = cookies.user_cloudynest_jwt_token;
			try {
				// :: if verifaction failed it will go in catch ::
				if (!token) {
					return;
				}

				const { data } = await axios.get(`${base_url}/user/profile`, {
					headers: { Authorization: cookies.user_cloudynest_jwt_token },
				});
				setUsername(data.name);
			} catch (error) {
				console.log(error);
			}
		},
		[cookies.user_cloudynest_jwt_token],
	);

	useEffect(() => {
		getUser();
	}, [getUser]);
	return (
		<Flex
			w="100%"
			justifyContent="space-between"
			alignItems="center"
			p={{ md: "0", xl: "0", "2xl": "0 15rem" }}
			gap="5rem"
			marginTop="0.5rem">
			{/*
			 * Logo
			 * SearchBar
			 */}
			<HStack w={"100%"}>
				<Image
					onClick={() => router.replace("/")}
					width={180}
					src="/CloudyNest-Logo_Title.png"
					alt="CloudyNest-Logo_Title.png"
				/>
				<Spacer />
				<Spacer />
				<Spacer />

				<InputGroup>
					<InputLeftElement pointerEvents="none" top="4px">
						<FiSearch size={18} />
					</InputLeftElement>
					<Input
						focusBorderColor={"teal.500"}
						size="md"
						h="3rem"
						type="text"
						maxW={"500px"}
						value={serachBarText}
						onChange={({ target }) => setSearchBarText(target.value)}
						placeholder="Type - tshirt jeans or any clothing"
					/>
				</InputGroup>
			</HStack>

			{/*
			 * Buttons
			 *
			 */}

			<HStack position={"relative"}>
				<Button variant={"none"} leftIcon={<GiSmartphone size={22} />}>
					Download App
				</Button>

				<Divider
					height={"30px"}
					orientation="vertical"
					borderWidth={".1rem"}
					borderColor={"rgba(0,0,0,0.2)"}
				/>
				<Button variant={"none"} onClick={() => router.push("/supplier")}>
					Become a Supplier
				</Button>

				<Divider
					hidden={hideExtras}
					height={"30px"}
					orientation="vertical"
					borderWidth={".1rem"}
					borderColor={"rgba(0,0,0,0.2)"}
				/>
				<Button
					hidden={hideExtras}
					onClick={() => setHidden(!hidden)}
					onMouseOver={() => setHidden(false)}
					variant={"none"}
					leftIcon={<FiUser size={20} />}>
					Profile
				</Button>

				<Divider
					hidden={hideExtras}
					height={"30px"}
					orientation="vertical"
					borderWidth={".1rem"}
					borderColor={"rgba(0,0,0,0.2)"}
				/>
				<Button
					hidden={hideExtras}
					variant={"none"}
					leftIcon={<MdOutlineShoppingCart size={22} />}>
					Cart
				</Button>

				{/* This Box is will be present under profile section */}
				<Stack
					position="absolute"
					onMouseLeave={() => setHidden(true)}
					top="3.5rem"
					right="3rem"
					background={"white"}
					zIndex="2"
					hidden={hidden}
					p=".8rem"
					boxShadow="0 0 5px #111"
					borderRadius={"0.3rem"}>
					<Heading as="h3" size="md">
						Hello {username === "" ? "User" : username}
					</Heading>
					{username === "" && (
						<Text fontSize={".8rem"}>To access your Meesho account</Text>
					)}
					{username === "" ? (
						<Button
							variant="solid"
							colorScheme={"teal"}
							onClick={() => router.push("/auth")}
							_hover={{
								background: "teal",
								color: "white",
							}}>
							Sign Up
						</Button>
					) : (
						<Button
							variant="solid"
							colorScheme={"teal"}
							onClick={() => {
								logout();
								setUsername("");
							}}
							_hover={{
								background: "teal",
								color: "white",
							}}>
							Logout
						</Button>
					)}
					<Divider />
					<Button variant="ghost" leftIcon={<BsBagCheck />}>
						My Orders
					</Button>
				</Stack>
			</HStack>
		</Flex>
	);
};

export default Navbar;
