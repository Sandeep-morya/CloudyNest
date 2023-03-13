import { FinalProductType } from "@/Types";
import { Center, SimpleGrid, Spinner, Stack } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";

type Props = {
	products: FinalProductType[];
	isLoading: boolean;
	isError: boolean;
};

const Products = ({ isLoading, isError, products }: Props) => {
	if (isLoading) {
		return (
			<Center w={"70%"}>
				<Spinner size="xl" color="teal.400" thickness="0.3rem" />
			</Center>
		);
	}
	if (isError) {
		return <Center w={"70%"}>Server Error</Center>;
	}
	return (
		<Stack w={"70%"}>
			<SimpleGrid columns={4} gap="1.5rem">
				{products.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</SimpleGrid>
		</Stack>
	);
};

export default Products;
