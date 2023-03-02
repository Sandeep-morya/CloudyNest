import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import { Box, Divider, Stack } from "@chakra-ui/react";
import Head from "next/head";

export default function Auth() {
	return (
		<>
			<Head>
				<title>CloudyNest - Shopping</title>
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
						bgColor="teal.50"></Box>
				</Stack>
			</main>
		</>
	);
}
