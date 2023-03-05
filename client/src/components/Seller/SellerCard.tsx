import {
	Avatar,
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Spacer,
	Stack,
} from "@chakra-ui/react";
import React from "react";
import { BsShop } from "react-icons/bs";
import { FaStar, FaUserCheck } from "react-icons/fa";
import { MdRateReview, MdListAlt } from "react-icons/md";
import SellerSpecCard from "./SellerSpecCard";

type Props = {};

const SellerCard = (props: Props) => {
	return (
		<Flex
			w="100%"
			justifyContent={"space-between"}
			alignItems="flex-start"
			p="1rem"
			gap="2rem">
			<Stack alignItems="center">
				<Avatar
					outline={"1px solid teal"}
					outlineOffset="0.2rem"
					size="xl"
					name="Prosper Otemuyiwa"
					src="https://bit.ly/prosper-baba"
				/>
				<Heading as="h2" size="md" color={"blackAlpha.900"}>
					Seller Name
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
				<HStack justifyContent={"space-between"}>
					{/* Reviews */}
					<SellerSpecCard count="2000+" title="Reviews" Icon={MdRateReview} />
					<SellerSpecCard count="700+" title="Followers" Icon={FaUserCheck} />
					<SellerSpecCard count="100+" title="Products" Icon={MdListAlt} />
				</HStack>
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
	);
};

export default SellerCard;
