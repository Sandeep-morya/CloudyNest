import { FinalProductType } from "@/Types";
import {
	Box,
	Button,
	Flex,
	Heading,
	SimpleGrid,
	Spinner,
	Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";
import ProductCard from "../Content/ProductCard";
type Props = {
	seller_id: string;
};
const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;
const AllProducts = ({ seller_id }: Props) => {
	const [productList, setProductList] = useState([] as FinalProductType[]);

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [cookies, setCookie] = useCookies(["cloudynest_jwt_token"]);
	const router = useRouter();

	const getProducts = useCallback(
		async function () {
			setIsLoading(true);
			try {
				const { data } = await axios.get(`${base_url}/seller/products`, {
					headers: { Authorization: cookies.cloudynest_jwt_token },
				});
				setProductList(data);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				setIsError(false);
			}
		},
		[cookies.cloudynest_jwt_token],
	);
	// console.log(productList);

	useEffect(() => {
		getProducts();
	}, [getProducts]);
	if (isError) {
		return <></>;
	}

	return (
		<Stack w="100%" borderRadius="0.5rem" p="1rem">
			<Flex w="100%" justifyContent={"space-between"} p="1.5rem">
				<Heading as="h1" size="lg">
					Showing All the Products
				</Heading>
				<Button
					onClick={() =>
						router.push("/supplier/add_product/" + router.query.id)
					}>
					Add Product
				</Button>
			</Flex>

			{/* All product */}

			<SimpleGrid
				w="100%"
				gap="2rem"
				columns={{ base: 1, sm: 1, md: 3, lg: 3, xl: 4, "2xl": 5 }}>
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
								<Button leftIcon={<FaTrash />}>Delete</Button>
							</Box>
						</Box>
					</Box>
				))}
			</SimpleGrid>
		</Stack>
	);
};

export default AllProducts;
