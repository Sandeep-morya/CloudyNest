import { Image, VStack, Box } from "@chakra-ui/react";
import React from "react";
import BannerHeading from "../Misc/BannerHeading";
import Carousel from "./Carousel";

type Props = {};

const Advertisments = (props: Props) => {
	return (
		<VStack gap="1rem">
			<Box w="80%" m="auto">
				<Carousel />
			</Box>

			<BannerHeading
				size={{
					base: "sm",
					sm: "sm",
					md: "md",
					lg: "lg",
					xl: "xl",
					"2xl": "2xl",
				}}
				title="Top Categories to choose from"
			/>
			{/* <Image
				w={"80%"}
				src="https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-E-commerce-Product-Banner-Design-with-Green-Colors-scaled.jpg"
				alt="ad2"
			/> */}
			{/* <Image
				w={"80%"}
				src="https://static.vecteezy.com/system/resources/previews/003/692/287/original/big-sale-discount-promotion-banner-template-with-blank-product-podium-scene-graphic-free-vector.jpg"
				alt="ad3"
			/> */}
		</VStack>
	);
};

export default Advertisments;
