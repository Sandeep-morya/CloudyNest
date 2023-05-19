import { Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

type Props = {
	id: string;
	src: string;
	title: string;
	price: number;
};

const MiniProductCard = ({ id, src, title, price }: Props) => {
	const router = useRouter();
	return (
		<Stack
			bgColor={"teal.400"}
			p="0.5rem"
			onClick={() => router.push("/product/" + id)}
			borderRadius={"0.3rem"}
			boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px">
			<Image
				objectFit={"cover"}
				w={"10rem"}
				h={"10rem"}
				src={src}
				alt={title}
			/>
			<Text as="b">{title}</Text>
			<Text as="b">₹ {price} </Text>
		</Stack>
	);
};

export default MiniProductCard;
