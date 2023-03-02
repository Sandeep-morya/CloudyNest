import Login from "@/components/Auth/Login";
import SignUp from "@/components/Auth/SignUp";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import BannerHeading from "@/components/Misc/BannerHeading";
import {
	Badge,
	Box,
	Divider,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
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
				<Stack bgColor={"white"} w={"100vw"} spacing={0}>
					<Box
						position="sticky"
						top={0}
						bgColor={"white"}
						pt="0.5rem"
						pb="1rem"
						boxShadow="0px 20px 5px -20px rgba(0, 0, 0, 0.45)">
						<Navbar hideExtras={true} />
					</Box>
					<Box
						h="100%"
						w={"100%"}
						bgColor="teal.50"
						display="flex"
						p="3rem 0"
						justifyContent={"center"}
						alignItems="center">
						<Stack
							bgColor={"white"}
							boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
							w={"25%"}
							m="auto"
							pb="2rem"
							spacing={"5"}
							alignItems="center"
							borderRadius={"0.3rem"}
							overflow="hidden">
							<Image src="/ads/ad1.png" alt="CloudyNest-Complete_logo" />
							<Image
								w={"min-content"}
								h={150}
								filter="drop-shadow(0 0 1px teal)"
								src="/CloudyNest-Complete_logo.png"
								alt="CloudyNest-Complete_logo"
							/>

							{auth ? <Login /> : <SignUp />}
							<BannerHeading size="md" title="or" />
							{!auth ? (
								<Heading as="h2" size="sm" cursor={"pointer"}>
									{"Already have an account ? "}
									<Text
										as="span"
										fontWeight={"600"}
										color="teal"
										onClick={() => setAuth(true)}>
										{"Login"}
									</Text>
								</Heading>
							) : (
								<Heading as="h2" size="sm" cursor={"pointer"}>
									{"Don't have an account ? "}
									<Text
										as="span"
										fontWeight={"600"}
										color="teal"
										onClick={() => setAuth(false)}>
										{"SignUp"}
									</Text>
								</Heading>
							)}
						</Stack>
					</Box>
				</Stack>
			</main>
		</>
	);
}
