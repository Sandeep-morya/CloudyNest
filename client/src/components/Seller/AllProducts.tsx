import useGetCookie from "@/hooks/useGetCookie";
import useToastAlert from "@/hooks/useToastalert";
import { FinalProductType } from "@/Types";
import {
	Box,
	Button,
	Flex,
	Heading,
	IconButton,
	SimpleGrid,
	Skeleton,
	SkeletonText,
	Spinner,
	Stack,
	useMediaQuery,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import SolidButton from "../Header/SolidButton";
import ProductCard from "../Product/ProductCard";
type Props = {
	seller_id: string;
};
const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;
const AllProducts = ({ seller_id }: Props) => {
	const [smallNav] = useMediaQuery("(max-width: 64rem)");

	const [productList, setProductList] = useState([] as FinalProductType[]);
	const getCookie = useGetCookie();
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const router = useRouter();
	const toastAlert = useToastAlert();
	const token = getCookie("cloudynest_jwt_token");
	const getProducts = useCallback(async () => {
		setIsLoading(true);
		try {
			const { data } = await axios.get(`${base_url}/seller/products`, {
				headers: { Authorization: token },
			});
			setProductList(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(false);
		}
	}, [token]);

	async function handleDelete(id: string) {
		toastAlert("success", id);
	}
	console.log("products");
	useEffect(() => {
		getProducts();
	}, [getProducts]);

	if (isError) {
		return <>server Error</>;
	}

	return (
		<Stack w="100%" borderRadius="0.5rem" p="1rem" bgColor={"white"}>
			<Flex w="100%" justifyContent={"space-between"} p="1.5rem">
				<Heading
					as="h1"
					size={{
						base: "md",
						md: "md",
						xl: "lg",
						"2xl": "lg",
					}}
					color="gray">
					Showing uploaded products
				</Heading>
				{smallNav && (
					<IconButton
						colorScheme="teal"
						aria-label="Call Segun"
						size="lg"
						borderRadius={"50%"}
						icon={<MdAddCircle />}
					/>
				)}
				{!smallNav && (
					<SolidButton
						leftIcon={<MdAddCircle />}
						onClick={() =>
							router.push("/supplier/add_product/" + router.query.id)
						}>
						Add a new Product
					</SolidButton>
				)}
			</Flex>

			{/* All product */}

			<SimpleGrid
				w="100%"
				gap="2rem"
				p="1rem"
				columns={{ base: 2, sm: 2, md: 3, lg: 3, xl: 4, "2xl": 5 }}>
				{productList.map((product, i) => (
					<Box key={product._id + i * 2} className="seller_product_item">
						<ProductCard product={product} />
						<Box className="seller_product_menu">
							<Box>
								<Button
									onClick={() => router.push(`/product/${product._id}`)}
									leftIcon={<FaEye />}>
									View
								</Button>
								<Button leftIcon={<FaPencilAlt />}>Edit</Button>
								<Button
									onClick={() => handleDelete(product._id)}
									leftIcon={<FaTrash />}>
									Delete
								</Button>
							</Box>
						</Box>
					</Box>
				))}
			</SimpleGrid>
		</Stack>
	);
};

export default AllProducts;
