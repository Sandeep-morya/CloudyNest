import { Select, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

const Category = () => {
	const [selBox, setSelBox] = useState("relevance");
	return (
		<Stack w={"25%"} border="1px solid red" bgColor={"white"}>
			<Select
				bgColor={"white"}
				placeholder={`Sort by : ${selBox}`}
				value={selBox}
				onChange={(e) => setSelBox(e.target.value)}>
				<option value="relevance">{"Relevance"}</option>
				<option value="new_arrivals">{"New Arrivals"}</option>
				<option value="h2l">{"Price (High to Low)"}</option>
				<option value="l2h">{"Price (Low to High)"}</option>
				<option value="rating">{"Ratings"}</option>
				<option value="discount">{"Discount"}</option>
			</Select>
		</Stack>
	);
};

export default Category;
