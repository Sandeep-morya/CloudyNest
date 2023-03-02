import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import React from "react";
import { values } from "./data";
import TabDataItem from "./TabDataItem";

interface Props {
	data: values[];
}

const TabData = ({ data }: Props) => {
	return (
		<Flex
			className="tabData"
			border="0.1rem solid"
			borderColor={"blackAlpha.300"}>
			{data.map((values, index) => (
				<TabDataItem
					key={index}
					heading={values.heading}
					items={values.items}
				/>
			))}
		</Flex>
	);
};

export default TabData;
