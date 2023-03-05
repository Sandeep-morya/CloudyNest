import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductView from "@/components/SingleProduct/ProductView";
import Recommendation from "@/components/SingleProduct/Recommendation";
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

export default function SingleProduct() {
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
						<ProductView />

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
								Cotton Black Short Sleeves Printed Tshirts_low_ASP
							</Heading>

							{/* Price & Discount */}
							<Flex>
								<Heading as="h1" size="xl">
									₹ 187
								</Heading>
								{/* if Discount logic */}
							</Flex>

							{/* Rating and Views */}
							<Flex alignItems="center" gap="1rem">
								<HStack
									fontSize={"md"}
									bgColor="green.400"
									color="white"
									p="0.5rem 1rem"
									borderRadius={"2rem"}>
									<Box>4.0</Box>
									<FaStar />
								</HStack>
								<Text>Free Delivery</Text>
							</Flex>
						</Stack>
						{/* Size related */}
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
								<Flex
									justifyContent="center"
									alignItems={"center"}
									border="0.1rem solid teal"
									borderRadius={"1rem"}
									color="teal"
									w={"3rem"}
									fontWeight="600"
									h="2rem">
									M
								</Flex>
								<Flex
									justifyContent="center"
									alignItems={"center"}
									border="0.1rem solid teal"
									borderRadius={"1rem"}
									color="teal"
									w={"3rem"}
									fontWeight="600"
									h="2rem">
									L
								</Flex>
								<Flex
									justifyContent="center"
									alignItems={"center"}
									border="0.1rem solid teal"
									borderRadius={"1rem"}
									color="teal"
									w={"3rem"}
									fontWeight="600"
									h="2rem">
									XL
								</Flex>
								<Flex
									justifyContent="center"
									alignItems={"center"}
									border="0.1rem solid teal"
									borderRadius={"1rem"}
									color="teal"
									w={"3rem"}
									fontWeight="600"
									h="2rem">
									2XL
								</Flex>
							</Flex>
							<Spacer />
							<Spacer />
						</Stack>
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
							<Text>
								Name : Best Selling Round Neck Half Sleeves t-shirt for mens (
								Pack of 1 )<br /> Fabric : Cotton
								<br />
								Sleeve Length : Short Sleeves <br />
								Pattern : Printed <br />
								Net Quantity (N) : 1 <br />
								Sizes : M (Chest Size : 38 in, Length Size: 26.5 in) <br />L
								(Chest Size : 40 in, Length Size: 27.5 in) <br />
								XL (Chest Size : 42 in, Length Size: 28.5 in) <br />
								Country of Origin : India <br />
								<br />
							</Text>
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
							<SellerCard />
							<Flex gap="1rem">
								<Text textDecoration={"underline"}>Supplier Address :- </Text>
								<Text>#104, Jaspal colony, Ludhiana Punjab 141007</Text>
							</Flex>
						</Stack>
					</Stack>
				</Flex>
				{/* <Footer /> */}
			</main>
		</>
	);
}
