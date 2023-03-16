import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
	children: React.ReactNode;
};

const Pill = ({ children }: Props) => {
	return (
		<Box
			p="0.1rem 0.3rem"
			color={"blackAlpha.700"}
			bgColor={"#ebebeb"}
			borderRadius="2rem">
			{children}
		</Box>
	);
};

export default Pill;
