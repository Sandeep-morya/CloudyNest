import {
	Accordion,
	Box,
	Checkbox,
	Divider,
	Heading,
	Select,
	Spacer,
	Stack,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import AAge from "./All_Catagories/AAge";
import ACategroy from "./All_Catagories/ACategroy";
import AColor from "./All_Catagories/AColor";
import ADiscount from "./All_Catagories/ADiscount";
import AGender from "./All_Catagories/AGender";
import AMisc from "./All_Catagories/AMisc";
import APrice from "./All_Catagories/APrice";
import ARating from "./All_Catagories/ARating";
import ASize from "./All_Catagories/ASize";
import ASpecial from "./All_Catagories/ASpecial";
import AUser from "./All_Catagories/AUser";

const Category = () => {
	const [selBox, setSelBox] = useState("");
	return (
		<Stack
			p="1rem"
			w={"25%"}
			bgColor={"white"}
			spacing={5}
			borderRadius="0.3rem">
			{/* Selectbox */}

			<Select
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

			{/*  categroy checkbox div*/}

			<Stack spacing={1}>
				<Heading as="h3" size="md">
					FILTERS
				</Heading>
				<Text color="gray.400" fontSize="sm">
					1000+ Products
				</Text>
				<Spacer />

				{/* #1 */}
				<Accordion allowMultiple allowToggle>
					<ACategroy />
					<AGender />
					<AColor />
					<ADiscount />
					<APrice />
					<ARating />
					<AUser />
					<ASize />
					<AAge />
					<ASpecial />
					<AMisc />
				</Accordion>
			</Stack>
		</Stack>
	);
};

export default Category;
