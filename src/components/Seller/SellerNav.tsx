﻿import useLogout from "@/hooks/useLogout";
import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	HStack,
	Image,
	Spacer,
	Text,
	useDisclosure,
	useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";
import { MdMenu } from "react-icons/md";
import Logo from "../Misc/Logo";

interface Props {
	showLogin: boolean;
	hideExtras: boolean;
	setShowLogin: Dispatch<SetStateAction<boolean>>;
}

const SellerNav = ({ hideExtras, showLogin, setShowLogin }: Props) => {
	const logout = useLogout("cloudynest_jwt_token");
	const [smallNav] = useMediaQuery("(max-width: 64rem)");
	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();

	return (
		<>
			{!smallNav && (
				<Flex
					w="100%"
					justifyContent="space-between"
					alignItems="center"
					p={{ md: "0 2rem", xl: "0 2rem", "2xl": "0 15rem" }}
					gap="5rem"
					marginTop="0.5rem">
					<Logo />
					<Flex gap="1.5rem" fontWeight="600">
						<Link href={"#"}>Sell Online</Link>
						<Link href={"#"}>How it works</Link>
						<Link href={"#"}>Price & Commission</Link>
						<Link href={"#"}>Shipping & Return</Link>
						<Link href={"#"}>Grow Bussiness</Link>
					</Flex>

					<HStack>
						<Button
							hidden={hideExtras}
							onClick={() => setShowLogin((e) => !e)}
							colorScheme={"teal"}
							variant="outline">
							{showLogin ? "SignUp" : "Login"}
						</Button>

						<Spacer />

						<Button
							hidden={!hideExtras}
							_hover={{
								background: "teal.100",
							}}
							onClick={() => {
								logout();
								router.replace("/supplier");
							}}
							colorScheme={"teal"}>
							Logout
						</Button>
					</HStack>
				</Flex>
			)}

			{/* Mobile Navbar */}
			{smallNav && (
				<Flex
					w="100%"
					alignItems="center"
					justifyContent={"space-between"}
					p="0.5rem"
					marginTop="0.5rem">
					<Logo />
					<Box onClick={() => onOpen()}>
						<MdMenu size="35" color="teal" />
					</Box>
					<Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
						<DrawerOverlay />
						<DrawerContent>
							<DrawerCloseButton />
							<DrawerHeader display={"grid"} placeItems={"center"}>
								<Logo />
							</DrawerHeader>
							<DrawerBody display={"grid"} placeItems={"center"}>
								<Flex
									gap="1.5rem"
									flexDirection={"column"}
									alignItems="center"
									fontWeight="600">
									<Link href={"#"}>Sell Online</Link>
									<Link href={"#"}>How it works</Link>
									<Link href={"#"}>Price & Commission</Link>
									<Link href={"#"}>Shipping & Return</Link>
									<Link href={"#"}>Grow Bussiness</Link>
								</Flex>

								<Button
									hidden={hideExtras}
									onClick={() => setShowLogin((e) => !e)}
									colorScheme={"teal"}
									variant="outline">
									{showLogin ? "SignUp" : "Login"}
								</Button>

								<Spacer />

								<Button
									hidden={!hideExtras}
									_hover={{
										background: "teal.100",
									}}
									onClick={() => {
										logout();
										router.replace("/supplier");
									}}
									colorScheme={"teal"}>
									Logout
								</Button>
							</DrawerBody>
						</DrawerContent>
					</Drawer>
				</Flex>
			)}
		</>
	);
};

export default SellerNav;
