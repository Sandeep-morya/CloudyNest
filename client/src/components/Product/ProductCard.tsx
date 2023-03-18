import originalPriceBeforeDiscount from "@/functions/originalPriceBeforeDiscount";
import { FinalProductType } from "@/Types";
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
import { useRouter } from "next/router";
import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";

type Props = {
	product: FinalProductType;
};

const ProductCard = ({ product }: Props) => {
	const router = useRouter();
	return (
		<Stack
			borderRadius="0.3rem"
			bgColor={"white"}
			overflow="hidden"
			spacing={0}
			onClick={() => router.push(`/product/${product._id}`)}
			boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px">
			<Box
				w="100%"
				position={"relative"}
				cursor="pointer"
				className="product_card_image_div">
				<Image w="100%" h="100%" src={product.thumbnail} alt={product.title} />

				{/* <FaHeart className="heart_icon" color="white" /> */}
			</Box>

			<Stack p="0.5rem" spacing="3">
				<Badge borderRadius={"0.5rem"} maxW={"max-content"} colorScheme="teal">
					{product.brand}
				</Badge>

				<Box
					h="2rem"
					whiteSpace={"nowrap"}
					overflow="hidden"
					text-overflow="ellipsis">
					{product.title}
				</Box>

				<Flex alignItems="center" justifyContent={"space-between"}>
					<HStack alignItems="baseline">
						<Heading fontSize={"1.2rem"}>₹{product.price}</Heading>
						<Text color="blackAlpha.700">
							{product.discount < 1 ? (
								"onwards"
							) : (
								<Text fontSize={"0.9rem"} as="s">
									₹
									{originalPriceBeforeDiscount(product.price, product.discount)}
								</Text>
							)}
						</Text>
					</HStack>
					{product.assured && (
						<Image
							filter={"drop-shadow(0 0 2px rgba(0,0,0,0.5))"}
							w={5}
							h={5}
							src="/CloudyNest-Logo-Image.png"
							alt="recommeded"
						/>
					)}
				</Flex>
				<Divider
					borderWidth="0.1rem"
					borderRadius={"1rem"}
					borderColor="blackAlpha.400"
				/>
				<Flex
					alignItems={{
						base: "flex-start",
						xl: "center",
						"2xl": "center",
					}}
					flexDirection={{
						base: "column-reverse",
						xl: "row",
						"2xl": "row",
					}}
					gap="1rem"
					justifyContent={"space-between"}>
					<HStack
						fontSize={"sm"}
						bgColor="green.400"
						color="white"
						p="0.2rem 0.5rem"
						borderRadius={"2rem"}>
						<Box>{product.rating}</Box>
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
