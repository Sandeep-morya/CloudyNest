import { Box, Heading, Image, Spacer } from "@chakra-ui/react";
import React from "react";

type Props = {};

const ServerError = (props: Props) => {
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
					{"503 | Server Error"}
				</Heading>

				<Image
					w="5rem"
					h="5rem"
					src="https://res.cloudinary.com/due9pi68z/image/upload/v1679044710/lnlwj29v21nefipzgsre.png"
					alt="serverError"
				/>
			</Box>
		</Box>
	);
};

export default ServerError;
