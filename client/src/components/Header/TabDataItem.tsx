import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { values } from "./data";

const TabDataItem = ({ heading, items }: values) => {
	return (
		<Stack p={"1rem 2rem"}>
			{/* Heading */}
			<Text fontWeight={"500"} color="teal">
				{heading}
			</Text>

			{/* All Items */}
			{items.map((item, index) => (
				<Text key={item + String(index)}>{item}</Text>
			))}
		</Stack>
	);
};

export default TabDataItem;
