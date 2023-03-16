import useGetCookie from "@/hooks/useGetCookie";
import { FinalOrderType } from "@/Types";
import { Button, Flex, Heading, Spinner, Stack } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import OrderCard from "../Order/OrderCard";

type Props = {};
const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;
const AllOrders = () => {
	const [orders, setOrders] = useState([] as FinalOrderType[]);
	const getCookie = useGetCookie();
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const router = useRouter();
	const token = getCookie("cloudynest_jwt_token");
	const getOrders = useCallback(
		async function () {
			setIsLoading(true);
			try {
				const { data }: AxiosResponse<FinalOrderType[]> = await axios.get(
					`${base_url}/seller/orders`,
					{
						headers: {
							Authorization: token,
						},
					},
				);
				setOrders(data);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				setIsError(false);
			}
		},
		[token],
	);

	useEffect(() => {
		getOrders();
	}, [getOrders]);

	if (isLoading) {
		return <Spinner />;
	}

	if (isError) {
		return <>server Error</>;
	}

	return (
		<Stack w="100%" borderRadius="0.5rem" p="1rem" bgColor={"white"}>
			<Flex w="100%" justifyContent={"space-between"} p="1.5rem">
				<Heading as="h1" size="lg" color="gray">
					Showing Running Orders
				</Heading>
				<Button
					_hover={{
						background: "teal.100",
					}}
					colorScheme="teal"
					leftIcon={<FaPencilAlt />}
					onClick={() => false}>
					Edit Status
				</Button>
			</Flex>

			{/* All product */}

			<Stack spacing={"1rem"}>
				{orders.map((e) => (
					<OrderCard key={e._id} order={e} />
				))}
			</Stack>
		</Stack>
	);
};
export default AllOrders;
