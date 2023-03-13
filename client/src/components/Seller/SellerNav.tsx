import useLogout from "@/hooks/useLogout";
import { Button, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
	showLogin: boolean;
	hideExtras: boolean;
	setShowLogin: Dispatch<SetStateAction<boolean>>;
}

const SellerNav = ({ hideExtras, showLogin, setShowLogin }: Props) => {
	const logout = useLogout("cloudynest_jwt_token");

	const router = useRouter();

	return (
		<Flex
			w="100%"
			justifyContent="space-between"
			alignItems="center"
			p={{ md: "0 2rem", xl: "0 2rem", "2xl": "0 15rem" }}
			gap="5rem"
			marginTop="0.5rem">
			<Image
				onClick={() => router.replace("/")}
				width={180}
				src="/CloudyNest-Logo_Title.png"
				alt="CloudyNest-Logo_Title.png"
			/>
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
	);
};

export default SellerNav;
