import useDebounce from "@/hooks/useDebounce";
import useToggle from "@/hooks/useToggle";
import { FinalProductType } from "@/Types";
import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {
	images: string[];
};

const ProductView = ({ images }: Props) => {
	const [src, setSrc] = useState(images[0]);
	const [fullView, setFullView] = useState(true);
	return (
		<Flex alignItems={"flex-start"} gap="1rem">
			<Stack spacing={3}>
				{images.map((e, i) => (
					<Image
						outline={e === src ? "0.2rem solid teal" : "none"}
						outlineOffset=".2rem"
						key={e + i}
						src={e}
						alt={""}
						boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
						w={16}
						h={20}
						borderRadius="0.3rem"
						objectFit="cover"
						onClick={() => {
							setSrc(e);
							setFullView(true);
						}}
					/>
				))}
			</Stack>
			<Box
				boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
				p="0.2rem"
				bgColor={"white"}
				borderRadius="0.3rem">
				<Image
					w={500}
					height={600}
					objectFit={fullView ? "contain" : "cover"}
					objectPosition={"top"}
					src={src}
					alt=""
					onClick={() => setFullView(!fullView)}
					cursor={fullView ? "zoom-in" : "zoom-out"}
				/>
			</Box>
		</Flex>
	);
};

export default ProductView;
