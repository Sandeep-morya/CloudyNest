import Advertisments from "@/components/Content/Advertisments";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Stack } from "@chakra-ui/react";
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
				<Stack>
					<Advertisments />
				</Stack>
				<Footer />
			</main>
		</>
	);
}
