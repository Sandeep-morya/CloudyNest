import { Image, VStack } from "@chakra-ui/react";
import React from "react";
import BannerHeading from "../Misc/BannerHeading";

type Props = {};

const Advertisments = (props: Props) => {
	return (
		<VStack pt={"3rem"} gap="3rem">
			<Image w={"80%"} src="ad1.png" alt="ad1" />
			<BannerHeading size={"2xl"} title="Top Categories to choose from" />
			<Image
				w={"80%"}
				src="https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-E-commerce-Product-Banner-Design-with-Green-Colors-scaled.jpg"
				alt="ad2"
			/>
			{/* <Image
				w={"80%"}
				src="https://static.vecteezy.com/system/resources/previews/003/692/287/original/big-sale-discount-promotion-banner-template-with-blank-product-podium-scene-graphic-free-vector.jpg"
				alt="ad3"
			/> */}
		</VStack>
	);
};

export default Advertisments;
