import { FinalProductType } from "@/Types";
import { Center, SimpleGrid, Spinner, Stack } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";

type Props = {
	products: FinalProductType[];
};

const Products = ({ products }: Props) => {
	if (products.length < 1) {
		return (
			<Center w={"70%"}>
				<Spinner size="xl" color="teal.400" thickness="0.3rem" />
			</Center>
		);
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
