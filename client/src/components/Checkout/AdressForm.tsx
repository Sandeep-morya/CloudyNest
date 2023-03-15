import {
	Divider,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {};

const AddressForm = (props: Props) => {
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	// const [formData,setFormData] = useState({});

	return (
		<Stack
			h="100%"
			spacing={5}
			bgColor={"white"}
			alignItems="center"
			borderRadius="0.5rem"
			boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
			p="1.5rem">
			<Text
				as="b"
				fontSize={"1.2rem"}
				textDecoration="underline"
				color="blackAlpha.600">
				Address Details
			</Text>
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
	);
};

export default AddressForm;
