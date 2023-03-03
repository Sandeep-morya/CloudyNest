import { Image, VStack } from "@chakra-ui/react";
import React from "react";
import BannerHeading from "../Misc/BannerHeading";

type Props = {};

const Advertisments = (props: Props) => {
	return (
		<VStack w={"70%"} m="auto" pt={"3rem"} gap="3rem">
			<Image w={"80%"} src="/ads/ad1.png" alt="ad1" />
			<BannerHeading size={"2xl"} title="Top Categories to choose from" />
			<Image w={"80%"} src="/ads/ad2.png" alt="ad2" />
			<Image w={"80%"} src="/ads/ad3.png" alt="ad3" />
			<Image w={"80%"} src="/ads/ad4.png" alt="ad4" />
		</VStack>
	);
};

export default Advertisments;
