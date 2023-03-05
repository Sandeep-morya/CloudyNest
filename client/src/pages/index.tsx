import Advertisments from "@/components/Content/Advertisments";
import Category from "@/components/Content/Category";
import Products from "@/components/Content/Products";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
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
				<Header />
				<Stack spacing={5} w={"75%"} m="auto">
					<Advertisments />
					<Heading size="xl" as="h2">
						Products for You
					</Heading>
					<Flex justifyContent={"space-between"} alignItems="flex-start">
						<Category />
						<Products />
					</Flex>
				</Stack>
				{/* <Footer /> */}
			</main>
		</>
	);
}
