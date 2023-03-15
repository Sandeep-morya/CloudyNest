import {
	Divider,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {};

const AddressForm = (props: Props) => {
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	// const [formData,setFormData] = useState({});

	return (
		<Stack spacing={10} w="100%" h="100%">
			{/* Number of Items */}

			<Heading as="h3" size="md" color="blackAlpha.600">
				Address Details
			</Heading>
			{/* All Items */}
			<Stack
				h="100%"
				spacing={5}
				bgColor={"white"}
				borderRadius="0.5rem"
				p="1rem">
				<FormControl>
					<FormLabel>HOUSE NO., STREEET, VILLAGE</FormLabel>
					<Input
						focusBorderColor={"teal.500"}
						pr="4.5rem"
						type={"text"}
						onKeyDown={() => setIsError(false)}
						// value={name}
						onChange={(e) => e.target.value}
					/>
				</FormControl>

				<FormControl>
					<FormLabel>AREA, COLONY, ROAD</FormLabel>
					<Input
						focusBorderColor={"teal.500"}
						pr="4.5rem"
						type={"text"}
						onKeyDown={() => setIsError(false)}
						// value={name}
						onChange={(e) => e.target.value}
					/>
				</FormControl>

				<FormControl>
					<FormLabel>LANDMARK</FormLabel>
					<Input
						focusBorderColor={"teal.500"}
						pr="4.5rem"
						type={"text"}
						onKeyDown={() => setIsError(false)}
						// value={name}
						onChange={(e) => e.target.value}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>CITY</FormLabel>
					<Input
						focusBorderColor={"teal.500"}
						pr="4.5rem"
						type={"text"}
						onKeyDown={() => setIsError(false)}
						// value={name}
						onChange={(e) => e.target.value}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>STATE</FormLabel>
					<Input
						focusBorderColor={"teal.500"}
						pr="4.5rem"
						type={"text"}
						onKeyDown={() => setIsError(false)}
						// value={name}
						onChange={(e) => e.target.value}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>PINCODE</FormLabel>
					<Input
						focusBorderColor={"teal.500"}
						pr="4.5rem"
						type={"text"}
						onKeyDown={() => setIsError(false)}
						// value={name}
						onChange={(e) => e.target.value}
					/>
				</FormControl>
			</Stack>
		</Stack>
	);
};

export default AddressForm;
