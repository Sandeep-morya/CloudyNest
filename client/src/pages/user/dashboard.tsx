import Header from "@/components/Header/Header";
import { Stack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

type Props = {};

const UserDashboard = (props: Props) => {
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
				<Header cartCount={0} />
				<Stack
					spacing={5}
					w={"100%"}
					p={{ md: "2rem 0", xl: "2rem 0", "2xl": "2rem 15rem" }}
					m="auto"></Stack>
			</main>
		</>
	);
};

export default UserDashboard;
