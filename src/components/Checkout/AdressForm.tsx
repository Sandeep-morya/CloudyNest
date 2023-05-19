import { addressType } from "@/Types";
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

type Props = {
	address: addressType;
	setAddress: React.Dispatch<React.SetStateAction<addressType>>;
};

const AddressForm = ({ address, setAddress }: Props) => {
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

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
					value={address.house}
					onChange={(e) => setAddress({ ...address, house: e.target.value })}
				/>
			</FormControl>

			<FormControl>
				<FormLabel>AREA, COLONY, ROAD</FormLabel>
				<Input
					focusBorderColor={"teal.500"}
					pr="4.5rem"
					type={"text"}
					onKeyDown={() => setIsError(false)}
					value={address.area}
					onChange={(e) => setAddress({ ...address, area: e.target.value })}
				/>
			</FormControl>

			<FormControl>
				<FormLabel>LANDMARK</FormLabel>
				<Input
					focusBorderColor={"teal.500"}
					pr="4.5rem"
					type={"text"}
					onKeyDown={() => setIsError(false)}
					value={address.landmark}
					onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
				/>
			</FormControl>
			<FormControl>
				<FormLabel>CITY</FormLabel>
				<Input
					focusBorderColor={"teal.500"}
					pr="4.5rem"
					type={"text"}
					onKeyDown={() => setIsError(false)}
					value={address.city}
					onChange={(e) => setAddress({ ...address, city: e.target.value })}
				/>
			</FormControl>
			<FormControl>
				<FormLabel>STATE</FormLabel>
				<Input
					focusBorderColor={"teal.500"}
					pr="4.5rem"
					type={"text"}
					onKeyDown={() => setIsError(false)}
					value={address.state}
					onChange={(e) => setAddress({ ...address, state: e.target.value })}
				/>
			</FormControl>
			<FormControl>
				<FormLabel>PINCODE</FormLabel>
				<Input
					focusBorderColor={"teal.500"}
					pr="4.5rem"
					type={"number"}
					onKeyDown={() => setIsError(false)}
					value={address.pincode}
					onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
				/>
			</FormControl>
		</Stack>
	);
};

export default AddressForm;
