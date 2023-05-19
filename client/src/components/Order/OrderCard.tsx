import { FinalOrderType, FinalProductType, sellerProfileType } from "@/Types";
import {
	Badge,
	Button,
	Flex,
	Grid,
	Heading,
	Image,
	Spinner,
	Stack,
	Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

type Props = {
	order: FinalOrderType;
};
const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

const OrderCard = ({ order }: Props) => {
	const [product, setProduct] = useState({} as FinalProductType);
	const [seller, setSeller] = useState({} as sellerProfileType);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const getSeller = useCallback(
		async function () {
			setIsLoading(true);
			try {
				const { data } = await axios.get(
					`${base_url}/product/seller/${order.seller}`,
				);
				setIsLoading(false);
				setSeller(data);
			} catch (error) {
				setIsLoading(false);
				setIsError(false);
			}
		},
		[order.seller],
	);

	const getProduct = useCallback(
		async function () {
			setIsLoading(true);
			try {
				const { data } = await axios.get(`${base_url}/product/${order.item}`);
				setIsLoading(false);
				setProduct(data);
			} catch (error) {
				setIsLoading(false);
				setIsError(false);
			}
		},
		[order.item],
	);

	useEffect(() => {
		getSeller();
	}, [getSeller]);

	useEffect(() => {
		getProduct();
	}, [getProduct]);
	if (isLoading) {
		return <Spinner />;
	}

	if (isError) {
		return <>server Error</>;
	}

	return (
		<Grid
			gridTemplateColumns={{
				base: "1fr",
				md: "1fr",
				xl: "2fr 1.5fr 0.5fr",
			}}
			boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
			justifyContent="center"
			alignContent={"center"}
			p="1rem"
			gap="1rem"
			borderRadius={"0.5rem"}
			alignItems={"flex-start"}>
			<Flex gap="1rem" alignItems={"flex-start"}>
				<Image
					w="10rem"
					h="12rem"
					borderRadius={"0.5rem"}
					objectFit={"cover"}
					src={product.thumbnail}
					alt={product.title}
				/>
				<Stack flexWrap={"wrap"}>
					<Text as="b" fontSize={"1.1rem"}>
						{product.title}
					</Text>
					<Badge
						borderRadius={"0.5rem"}
						maxW={"max-content"}
						colorScheme="teal">
						{product.brand}
					</Badge>
					<Text>{`Supplier: ${seller.name}`}</Text>
					<Text>{`Delivery: ${
						order.delivery_status ? "Completed" : "Pending"
					}`}</Text>
					<Text>{`Delivery Address:`}</Text>
					<Text w="70%">{order.delivery_address.split("-").join(", ")}</Text>
				</Stack>
			</Flex>

			<Stack>
				<Text as="b" fontSize={"1.1rem"}>
					{"Payment"}
				</Text>
				<Text>{`Payment method: ${order.payment_method}`}</Text>
				<Text>{`Payment status: ${
					order.payment_status ? "Paid" : "Pending"
				}`}</Text>
				<Text as="b">{`Payment Amount: ₹ ${order.amount}`}</Text>
			</Stack>

			<Stack>
				<Button colorScheme={"teal"} variant="solid">
					Track Status
				</Button>
				<Button colorScheme={"teal"} variant="outline">
					Cancel Order
				</Button>
			</Stack>
		</Grid>
	);
};

export default OrderCard;
