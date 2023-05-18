import { Image, VStack, Box } from "@chakra-ui/react";
import React from "react";
import BannerHeading from "../Misc/BannerHeading";
import Carousel from "./Carousel";

type Props = {};

const Advertisments = (props: Props) => {
	return (
		<VStack gap="1rem">
			<Box w="90%">
				<Carousel />
			</Box>

			<Image
				w={"80%"}
				src="https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-E-commerce-Product-Banner-Design-with-Green-Colors-scaled.jpg"
				alt="ad2"
			/>
		</VStack>
	);
};

export default Advertisments;
