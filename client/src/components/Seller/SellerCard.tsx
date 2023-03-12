import { sellerProfileType } from "@/Types";
import {
	Avatar,
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Spacer,
	Spinner,
	Stack,
	Text,
} from "@chakra-ui/react";
import axios from "axios";
import Error from "next/error";
import React, { useCallback, useEffect, useState } from "react";
import { BsShop } from "react-icons/bs";
import { FaStar, FaUserCheck } from "react-icons/fa";
import { MdRateReview, MdListAlt } from "react-icons/md";
import SellerSpecCard from "./SellerSpecCard";

type Props = {
	seller_id: string;
};
const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

const SellerCard = ({ seller_id }: Props) => {
	const [supplierProfile, setSupplierProfile] = useState(
		{} as sellerProfileType,
	);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const getSeller = useCallback(
		async function () {
			setIsLoading(true);
			try {
				const { data } = await axios.get(
					`${base_url}/product/seller/${seller_id}`,
				);
				setIsLoading(false);
				setSupplierProfile(data);
			} catch (error) {
				setIsLoading(false);
				setIsError(false);
			}
		},
		[seller_id],
	);

	useEffect(() => {
		getSeller();
	}, [getSeller]);
	if (isError) {
		return <></>;
	}
	if (isLoading) {
		return <Spinner />;
	}
	return (
		<>
			<Flex
				w="100%"
				justifyContent={"space-between"}
				alignItems="flex-start"
				p="1rem"
				gap="2rem">
				<Stack
					maxW={"min-content"}
					spacing={"1rem"}
					textAlign="center"
					alignItems={"center"}>
					<Avatar
						outline={"0.15rem solid teal"}
						outlineOffset="0.2rem"
						size="xl"
						name={supplierProfile.name}
						src={supplierProfile.image}
					/>
					<Heading as="h2" size="md" color={"gray"}>
						{supplierProfile.name}
					</Heading>
				</Stack>
				<Stack
					flexGrow={"1"}
					justifyContent="flex-start"
					alignContent={"flex-start"}
					gap="1rem">
					<HStack
						fontSize={"sm"}
						bgColor="green.400"
						color="white"
						p="0.2rem 0.5rem"
						borderRadius={"2rem"}>
						<Box>4.0</Box>
						<FaStar />
						<Box> CloudyNest - Users - Ratings</Box>
					</HStack>
					<Flex justifyContent={"space-between"} gap="1rem">
						{/* Reviews */}
						<SellerSpecCard count="2000+" title="Reviews" Icon={MdRateReview} />
						<SellerSpecCard count="700+" title="Followers" Icon={FaUserCheck} />
						<SellerSpecCard count="100+" title="Products" Icon={MdListAlt} />
					</Flex>
				</Stack>
				<Stack>
					<Button
						colorScheme={"teal"}
						boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
						leftIcon={<BsShop size="22" />}
						variant="outline">
						View Shop
					</Button>
					<Button
						colorScheme={"teal"}
						boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
						_hover={{
							background: "teal.100",
						}}
						leftIcon={<FaUserCheck size="22" />}
						variant="solid">
						Follow
					</Button>
				</Stack>
			</Flex>
			<Flex gap="1rem">
				<Text textDecoration={"underline"}>Supplier Address :- </Text>
				<Text>{supplierProfile.address}</Text>
			</Flex>
		</>
	);
};

export default SellerCard;
