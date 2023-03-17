import Advertisments from "@/components/Content/Advertisments";
import Category from "@/components/Content/Category";
import Products from "@/components/Product/Products";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { FinalProductType } from "@/Types";
import {
	Flex,
	Heading,
	HStack,
	IconButton,
	Image,
	Spacer,
	Stack,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { useCallback, useEffect, useRef, useState } from "react";

import Carousel from "@/components/Content/Carousel";
import Pagination from "@/components/Content/Pagination";
import { FaAngleLeft, FaAngleRight, FaPen } from "react-icons/fa";

const upload_url = process.env.NEXT_PUBLIC_UPLOAD_URL as string;
const uplaod_preset = process.env.NEXT_PUBLIC_UPLOAD_PRESET as string;
const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME as string;
const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

export default function Home() {
	const [productList, setProductList] = useState([] as FinalProductType[]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [page, setPage] = useState(1);
	const [url, setUrl] = useState(`/all?page=1`);
	const totalPages = useRef(1);
	const [endPoint, setEndPoint] = useState("all?dummy=true");

	const getProducts = useCallback(
		async function () {
			setIsLoading(true);
			try {
				const { data } = await axios.get(`${base_url}/product${url}`);
				setProductList(data.products);
				totalPages.current = data.total_pages;
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				setIsError(true);
			}
		},
		[url],
	);
	console.log(totalPages.current);
	console.log(url);
	console.log("page", page);
	useEffect(() => {
		getProducts();
	}, [getProducts]);

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
					p={{ md: "2rem", xl: "2rem", "2xl": "2rem 15rem" }}
					m="auto">
					<Advertisments />

					<Flex
						justifyContent={"space-between"}
						flexDirection="column"
						gap="1rem"
						alignItems="flex-start">
						<Category {...{ setUrl, setPage, setEndPoint }} />
						<Flex w="100%" justifyContent={"space-between"}>
							<Heading size="lg" as="h2">
								Products for You
							</Heading>

							<HStack>
								<IconButton
									colorScheme="teal"
									variant={"solid"}
									_hover={{ backgroundColor: "teal", color: "white" }}
									aria-label="Call Segun"
									onClick={() =>
										setPage((e) => {
											setUrl(`/${endPoint}&page=${e - 1}`);
											return e - 1;
										})
									}
									isDisabled={page === 1}
									icon={<FaAngleLeft />}
								/>
								<IconButton
									colorScheme="teal"
									variant={"solid"}
									_hover={{ backgroundColor: "teal", color: "white" }}
									isDisabled={
										page === totalPages.current || totalPages.current <= 1
									}
									aria-label="Call Segun"
									onClick={() =>
										setPage((e) => {
											setUrl(`/${endPoint}&page=${e + 1}`);
											return e + 1;
										})
									}
									icon={<FaAngleRight />}
								/>
							</HStack>
						</Flex>

						<Products products={productList} {...{ isLoading, isError }} />
					</Flex>
				</Stack>
				{/* <Footer /> */}
			</main>
		</>
	);
}
