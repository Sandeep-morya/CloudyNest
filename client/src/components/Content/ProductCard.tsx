import {
	Badge,
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";

type Props = {};

const ProductCard = (props: Props) => {
	return (
		<Stack
			borderRadius="0.3rem"
			bgColor={"white"}
			overflow="hidden"
			spacing={0}
			boxShadow="0px 8px 24px rgba(0,0,0,0.3)"
			>
			<Box position={"relative"} className="product_card_image_div">
				<Image
					w="100%"
					h="100%"
					src="https://images.meesho.com/images/products/162170012/trtzs_400.webp"
					alt="t-shirt"
				/>

				<FaHeart className="heart_icon" color="white" />
			</Box>

			<Stack p="0.5rem" spacing="3">
				<Flex alignItems="baseline" justifyContent={"space-between"}>
					<Text>Urban T-shirt</Text>
					<Badge borderRadius={"0.5rem"} colorScheme="teal">
						Success
					</Badge>
				</Flex>
				<Divider />
				<Flex alignItems="center" justifyContent={"space-between"}>
					<HStack alignItems="baseline">
						<Heading fontSize={"1.2rem"}>₹ 150</Heading>
						<Text color="blackAlpha.700">onwards</Text>
					</HStack>
					<Image
						filter={"drop-shadow(0 0 2px rgba(0,0,0,0.5))"}
						w={5}
						h={5}
						src="/CloudyNest-Logo-Image.png"
						alt="recommeded"
					/>
				</Flex>
				<Divider />
				<Flex alignItems="center" justifyContent={"space-between"}>
					<HStack
						fontSize={"sm"}
						bgColor="green.400"
						color="white"
						p="0.2rem 0.5rem"
						borderRadius={"2rem"}>
						<Box>4.0</Box>
						<FaStar />
					</HStack>
					<Text>Free Delivery</Text>
				</Flex>
				{/* <Button
					_hover={{
						color: "white",
						background: "teal",
					}}
					colorScheme={"teal"}>
					Start Selling
				</Button> */}
			</Stack>
		</Stack>
	);
};

export default ProductCard;
