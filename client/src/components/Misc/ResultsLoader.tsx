import { Box, Spinner, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
	message: string;
};

const ResultsLoader = ({ message }: Props) => {
	return (
		<Box
			position={"absolute"}
			w="100%"
			h="100%"
			display={"flex"}
			flexDirection="column"
			alignItems={"center"}
			bgColor="whiteAlpha.700"
			backdropBlur={"0.5rem"}
			justifyContent="center">
			<Text as="b">Waiting for {message}</Text>
			<Spinner
				thickness="4px"
				speed="0.65s"
				emptyColor="gray.200"
				color="teal.400"
				size="xl"
			/>
		</Box>
	);
};

export default ResultsLoader;
