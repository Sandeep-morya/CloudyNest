import Login from "@/components/Auth/Login";
import SignUp from "@/components/Auth/SignUp";
import Navbar from "@/components/Header/Navbar";
import BannerHeading from "@/components/Misc/BannerHeading";
import { Suspense } from "react";
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
import { GetServerSideProps } from "next";
import jwt from "jsonwebtoken";

export default function UserAuthentication() {
	const [showlogin, setShowLogin] = useState(true);
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
						<Navbar cartCount={0} hideExtras={true} />
					</Box>
					<Box
						h="100%"
						w={"100%"}
						bgColor="teal.50"
						display="flex"
						pt="3rem"
						pb="6rem"
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
							<Image
								src="https://res.cloudinary.com/due9pi68z/image/upload/v1678684733/phfnut3wovgvebriytsl.png"
								alt="CloudyNest-ad"
							/>
							<Image
								w={"min-content"}
								h={150}
								filter="drop-shadow(0 0 1px teal)"
								src="/CloudyNest-Complete_logo.png"
								alt="CloudyNest-Complete_logo"
							/>

							{showlogin ? <Login /> : <SignUp />}
							<BannerHeading size="md" title="or" />

							{/*  */}

							{!showlogin ? (
								<Heading as="h2" size="sm" cursor={"pointer"}>
									{"Already have an account ? "}
									<Text
										as="span"
										fontWeight={"600"}
										color="teal"
										onClick={() => setShowLogin(true)}>
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
										onClick={() => setShowLogin(false)}>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
	const token = context.req.cookies.user_cloudynest_jwt_token;
	try {
		const status = jwt.verify(token as string, process.env.SECERT as string);
		return {
			redirect: {
				destination: "/",
				permanent: true,
			},
		};
	} catch (error) {
		return {
			props: {},
		};
	}
};
