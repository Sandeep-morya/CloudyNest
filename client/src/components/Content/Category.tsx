import useDebounce from "@/hooks/useDebounce";
import { FinalProductType } from "@/Types";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
	SelectField,
	SimpleGrid,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

type Props = {
	setPage: Dispatch<SetStateAction<number>>;
	setUrl: Dispatch<SetStateAction<string>>;
	setEndPoint: Dispatch<SetStateAction<string>>;
};

const Category = ({ setUrl, setPage, setEndPoint }: Props) => {
	const [selBox, setSelBox] = useState("");
	const [query, setQuery] = useState("");
	// console.log("rendered");
	const debouncedValue = useDebounce(query);

	useEffect(() => {
		if (selBox === "h2l") {
			setEndPoint("filter/?base=price&order=dsc");
			setPage(1);
			setUrl("/filter/?base=price&page=1&order=dsc");
		} else if (selBox === "l2h") {
			setEndPoint("filter/?base=price&order=asc");
			setPage(1);
			setUrl("/filter/?base=price&page=1&order=asc");
		} else if (selBox === "rating") {
			setEndPoint("filter/?base=rating&order=dsc");
			setPage(1);
			setUrl("/filter/?base=rating&page=1&order=dsc");
		} else if (selBox === "discount") {
			setEndPoint("filter/?base=discount&order=dsc");
			setPage(1);
			setUrl("/filter/?base=discount&page=1&order=dsc");
		} else {
			setEndPoint("filter/?base=discount&order=dsc");
			setPage(1);
			setUrl("/filter/?base=discount&page=1&order=dsc");
		}
	}, [selBox, setEndPoint, setUrl, setPage]);

	useEffect(() => {
		if (debouncedValue) {
			setEndPoint(`category?q=${debouncedValue}`);
			setPage(1);
			setUrl(`/category?q=${debouncedValue}`);
		}
	}, [debouncedValue, setEndPoint, setPage, setUrl]);

	return (
		<Flex
			w="100%"
			borderRadius={"0.5rem"}
			bgColor={"white"}
			gap={{ base: "1rem", sm: "1rem", lg: "3rem", xl: "5rem" }}
			flexDir={"row"}
			justifyContent="space-between"
			alignItems={"flex-start"}
			p="1rem">
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<FiSearch size={18} />
				</InputLeftElement>
				<Input
					focusBorderColor={"teal.500"}
					type="text"
					value={query}
					onChange={({ target }) => setQuery(target.value)}
					placeholder="Enter category of your choice"
				/>
			</InputGroup>
			<Select
				w="40%"
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
