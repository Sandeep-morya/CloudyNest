import Login from "@/components/Auth/Login";
import SignUp from "@/components/Auth/SignUp";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import BannerHeading from "@/components/Misc/BannerHeading";
import { Box, Divider, Heading, Image, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

export default function Auth() {
	const [auth, setAuth] = useState(false);
	return (
		<>
			<Head>
				<title>CloudyNest - Join-Us</title>
				<meta
					name="description"
					content="CloudyNest - An Online Shopping Website"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/CloudyNest-Logo-Image.png" />
			</Head>
			<main>
				<Stack bgColor={"white"} w={"100vw"} h="100vh">
					<Navbar hideExtras={true} />
					<Box
						h="100%"
						borderTop={"1px solid"}
						w={"100%"}
						bgColor="teal.50"
						display="flex"
						justifyContent={"center"}
						alignItems="center">
						<Stack
							bgColor={"white"}
							boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
							w={"25%"}
							m="auto"
							p="2rem"
							spacing={"1rem"}
							alignItems="center"
							borderRadius={"0.3rem"}
							overflow="hidden">
							<Image
								w={"min-content"}
								h={150}
								src="/CloudyNest-Complete_logo.png"
								alt="CloudyNest-Complete_logo"
							/>

							<BannerHeading size="md" title="Join Us" />

							<Box>{auth ? <Login /> : <SignUp />}</Box>
						</Stack>
					</Box>
				</Stack>
			</main>
		</>
	);
}
