import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductView from "@/components/Product/ProductView";
import Recommendation from "@/components/Product/Recommendation";
import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	Spacer,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { MdOutlineShoppingCart, MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import SellerCard from "@/components/Seller/SellerCard";
import { GetServerSideProps } from "next";
import { FinalProductType } from "@/Types";
import axios, { AxiosResponse } from "axios";
import originalPriceBeforeDiscount from "@/functions/originalPriceBeforeDiscount";

interface Props {
	product: FinalProductType;
}
export default function SingleProduct({ product }: Props) {
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
				<Flex
					w={"75%"}
					m="auto"
					justifyContent={"space-between"}
					alignItems="flex-start"
					padding={"1rem"}
					gap={"2rem"}>
					{/* Visual Side */}
					<Stack spacing={5}>
						<ProductView images={product.images} />

						<Flex justifyContent={"flex-end"} gap="2rem">
							<Button
								w="235px"
								size={"lg"}
								colorScheme={"teal"}
								boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
								leftIcon={<MdOutlineShoppingCart size="22" />}
								variant="outline">
								Add to Cart
							</Button>
							<Button
								w="235px"
								size={"lg"}
								colorScheme={"teal"}
								boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
								_hover={{
									background: "teal.100",
								}}
								leftIcon={<HiOutlineChevronDoubleRight size="22" />}
								variant="solid">
								Buy Now
							</Button>
						</Flex>
						<Divider
							borderWidth="0.1rem"
							borderRadius={"1rem"}
							borderColor="blackAlpha.300"
						/>
						<Recommendation />
					</Stack>
					{/* Details Side */}
					<Stack flexGrow="1" spacing={"2rem"}>
						{/* Brand Title Price Rating */}
						<Stack
							boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
							p="1rem"
							bgColor={"white"}
							borderRadius="0.3rem"
							spacing={"3"}>
							{/* Title */}
							<Heading as="h2" size="md" color={"blackAlpha.700"}>
								{product.title}
							</Heading>

							{/* Price & Discount */}
							<Flex alignItems={"baseline"} gap="1rem">
								<Heading as="h1" size="xl">
									₹ {product.price}
								</Heading>
								{/* if Discount logic */}
								{product.discount < 1 ? (
									"onwards"
								) : (
									<Text fontSize={"0.9rem"} as="s">
										₹
										{originalPriceBeforeDiscount(
											product.price,
											product.discount,
										)}
									</Text>
								)}
							</Flex>

							{/* Rating and Views */}
							<Flex alignItems="center" gap="1rem">
								<HStack
									fontSize={"md"}
									bgColor="green.400"
									color="white"
									p="0.5rem 1rem"
									borderRadius={"2rem"}>
									<Box>{product.rating}</Box>
									<FaStar />
								</HStack>
								<Text>Free Delivery</Text>
							</Flex>
						</Stack>
						{/* Size related */}
						{product.sizes.length > 0 && (
							<Stack
								boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
								p="1rem"
								bgColor={"white"}
								borderRadius="0.3rem"
								spacing={"1rem"}>
								<Heading as="h2" size="md" color={"blackAlpha.900"}>
									Choose your Perfect size
								</Heading>
								<Spacer />
								<Flex gap="1rem" maxW="max-content">
									{product.sizes.map((e, i) => (
										<Flex
											key={e + i}
											justifyContent="center"
											alignItems={"center"}
											border="0.1rem solid teal"
											borderRadius={"1rem"}
											color="teal"
											w={"3rem"}
											fontWeight="600"
											h="2rem">
											{e}
										</Flex>
									))}
								</Flex>
								<Spacer />
								<Spacer />
							</Stack>
						)}

						{/* Description */}
						<Stack
							boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
							p="1rem"
							bgColor={"white"}
							borderRadius="0.3rem"
							spacing={"1rem"}>
							<Heading as="h2" size="md" color={"blackAlpha.900"}>
								Product Details
							</Heading>
							<Text>{product.description}</Text>
						</Stack>
						{/* Seller Info */}
						<Stack
							boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
							p="1rem"
							bgColor={"white"}
							borderRadius="0.3rem"
							spacing={"1rem"}>
							<Heading as="h2" size="md" color={"blackAlpha.900"}>
								Sold By
							</Heading>
							<SellerCard seller_id={product.seller} />
						</Stack>
					</Stack>
				</Flex>
				{/* <Footer /> */}
			</main>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const { data }: AxiosResponse<FinalProductType, any> = await axios.get(
			`${process.env.BASE_URL}/product/${context.query.id}`,
		);
		return {
			props: { product: data },
		};
	} catch {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
};
