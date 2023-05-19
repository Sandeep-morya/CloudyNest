import { Box, Heading, Image, Spacer } from "@chakra-ui/react";
import React from "react";

type Props = {};

const NoResults = (props: Props) => {
	return (
		<Box
			w="100%"
			h="50vh"
			display={"flex"}
			flexDirection="column"
			alignContent={"center"}
			alignItems="center"
			gap="2rem"
			justifyContent={"center"}>
			<Box>
				<Heading pb="2rem" size="md">
					{"No results Found"}
				</Heading>

				<Image
					w="5rem"
					h="5rem"
					src="https://res.cloudinary.com/due9pi68z/image/upload/v1679044710/nplxsvc65kejk2tnuwhu.png"
					alt="no results"
				/>
			</Box>
		</Box>
	);
};

export default NoResults;
