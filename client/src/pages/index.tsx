import Advertisments from "@/components/Content/Advertisments";
import Category from "@/components/Content/Category";
import Products from "@/components/Product/Products";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { FinalProductType } from "@/Types";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

const upload_url = process.env.NEXT_PUBLIC_UPLOAD_URL as string;
const uplaod_preset = process.env.NEXT_PUBLIC_UPLOAD_PRESET as string;
const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME as string;
const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

export default function Home() {
	const [productList, setProductList] = useState([] as FinalProductType[]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	async function getProducts() {
		setIsLoading(true);
		try {
			const { data } = await axios.get(`${base_url}/product/all`);
			setProductList(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
		}
	}

	useEffect(() => {
		getProducts();
	}, []);
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
				<Stack spacing={5} w={"75%"} m="auto">
					<Advertisments />
					<Heading size="xl" as="h2">
						Products for You
					</Heading>
					<Flex justifyContent={"space-between"} alignItems="flex-start">
						<Category />
						<Products products={productList} {...{ isLoading, isError }} />
					</Flex>
				</Stack>
				{/* <Footer /> */}
			</main>
		</>
	);
}
