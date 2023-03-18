import { Box, Image } from "@chakra-ui/react";
import React from "react";

type Props = {
	w?: string;
};

const Nothing = ({ w = "15rem" }: Props) => {
	return (
		<Box display={"grid"} placeItems="center" w="100%">
			<Image
				w={w}
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1679162004/pm9ia6wpkie9isxnhmsy.webp"
				alt="noting"
			/>
		</Box>
	);
};

export default Nothing;
