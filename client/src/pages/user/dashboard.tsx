import Header from "@/components/Header/Header";
import Nothing from "@/components/Misc/Nothing";
import OrderCard from "@/components/Order/OrderCard";
import { FinalOrderType } from "@/Types";
import { Flex, Grid, Heading, Image, Stack } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";

type Props = {
	orders: FinalOrderType[];
};

const UserDashboard = ({ orders }: Props) => {
	console.log(orders);
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
					p={{
						base: "1rem",
						sm: "1rem",
						md: "2rem",
						xl: "2rem",
						"2xl": "2rem 15rem",
					}}
					m="auto">
					<Heading color={"blackAlpha.600"} size="lg">
						Your orders
					</Heading>

					<Stack spacing={"1rem"}>
						{orders.length < 1 && <Nothing />}
						{orders.map((e) => (
							<OrderCard key={e._id} order={e} />
						))}
					</Stack>
				</Stack>
			</main>
		</>
	);
};

export default UserDashboard;

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const { data }: AxiosResponse<FinalOrderType[]> = await axios.get(
			`${process.env.BASE_URL}/user/orders`,
			{
				headers: {
					Authorization: context.req.cookies.user_cloudynest_jwt_token,
				},
			},
		);
		return {
			props: { orders: data },
		};
	} catch {
		return {
			redirect: {
				destination: "/auth",
				permanent: false,
			},
		};
	}
};
