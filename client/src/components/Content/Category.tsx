import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	FormControl,
	Select,
	SelectField,
	SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {};

const Category = (props: Props) => {
	const [selBox, setSelBox] = useState("");
	return (
		<Flex
			w="100%"
			borderRadius={"0.5rem"}
			bgColor={"white"}
			h="5rem"
			justifyContent="space-between"
			alignItems={"flex-start"}
			p="1rem">
			<Box></Box>
			<Select
				w="30%"
				colorScheme={"teal"}
				focusBorderColor={"teal.500"}
				placeholder={`Sort by : Relevance`}
				value={selBox}
				onChange={(e) => setSelBox(e.target.value)}>
				<option value="new_arrivals">{"New Arrivals"}</option>
				<option value="h2l">{"Price (High to Low)"}</option>
				<option value="l2h">{"Price (Low to High)"}</option>
				<option value="rating">{"Ratings"}</option>
				<option value="discount">{"Discount"}</option>
			</Select>
		</Flex>
	);
};

export default Category;
