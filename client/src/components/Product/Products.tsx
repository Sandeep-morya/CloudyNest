import { FinalProductType } from "@/Types";
import { Center, SimpleGrid, Skeleton, Spinner, Stack } from "@chakra-ui/react";
import React from "react";
import { FaSadCry } from "react-icons/fa";
import ProductCard from "./ProductCard";

type Props = {
	products: FinalProductType[];
	isLoading: boolean;
	isError: boolean;
};

const Products = ({ isLoading, isError, products }: Props) => {
	if (isLoading) {
		return (
			<Stack w={"70%"}>
				<SimpleGrid columns={4} gap="1.5rem">
					<Skeleton h="28rem" />
					<Skeleton h="28rem" />
					<Skeleton h="28rem" />
					<Skeleton h="28rem" />
					<Skeleton h="28rem" />
					<Skeleton h="28rem" />
					<Skeleton h="28rem" />
					<Skeleton h="28rem" />
					<Skeleton h="28rem" />
					<Skeleton h="28rem" />
					<Skeleton h="28rem" />
					<Skeleton h="28rem" />
					<Skeleton h="28rem" />
				</SimpleGrid>
			</Stack>
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
