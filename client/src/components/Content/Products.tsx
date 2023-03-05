import { SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";

type Props = {};

const Products = (props: Props) => {
	return (
		<Stack w={"70%"} >
			<SimpleGrid columns={4} gap="1.5rem">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</SimpleGrid>
		</Stack>
	);
};

export default Products;
