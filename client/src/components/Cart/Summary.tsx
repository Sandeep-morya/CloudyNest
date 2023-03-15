import { Heading, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {};

const Summary = (props: Props) => {
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	// const [formData,setFormData] = useState({});

	return (
		<Stack spacing={10} w="100%" h="100%">
			{/* Number of Items */}

			<Heading as="h3" size="md" color="blackAlpha.600">
				Order Summary
			</Heading>
			{/* All Items */}
			<Stack
				h="100%"
				spacing={5}
				bgColor={"white"}
				borderRadius="0.5rem"
				p="1rem"></Stack>
		</Stack>
	);
};

export default Summary;
