import {
	Button,
	Divider,
	Flex,
	HStack,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Spacer,
	theme,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Theme } from "@chakra-ui/react";

type Props = {};

const Navbar = (props: Props) => {
	const [serachBarText, setSearchBarText] = useState("");
	return (
		<Flex
			w="100%"
			justifyContent="space-between"
			alignItems="center"
			p={{ md: "0", xl: "0", "2xl": "0 15rem" }}
			gap="5rem"
			marginTop="0.5rem">
			{/*
			 * Logo
			 * SearchBar
			 */}
			<HStack w={"100%"}>
				<Image
					width={180}
					src="/CloudyNest-Logo_Title.png"
					alt="CloudyNest-Logo_Title.png"
				/>
				<Spacer />
				<Spacer />
				<Spacer />

				<InputGroup>
					<InputLeftElement pointerEvents="none" top="4px">
						<FiSearch size={18} />
					</InputLeftElement>
					<Input
						focusBorderColor={"teal.500"}
						size="lg"
						type="text"
						value={serachBarText}
						onChange={({ target }) => setSearchBarText(target.value)}
						placeholder="Type - tshirt jeans or any clothing"
					/>
				</InputGroup>
			</HStack>

			{/*
			 * Buttons
			 *
			 */}

			<HStack>
				<Button variant={"none"} leftIcon={<GiSmartphone size={22} />}>
					Download App
				</Button>

				<Divider height={"30px"} orientation="vertical" />
				<Button variant={"none"}>Become a Supplier</Button>

				<Divider height={"30px"} orientation="vertical" />
				<Button variant={"none"} leftIcon={<FiUser size={20} />}>
					Profile
				</Button>

				<Divider height={"30px"} orientation="vertical" />
				<Button variant={"none"} leftIcon={<MdOutlineShoppingCart size={22} />}>
					Cart
				</Button>
			</HStack>
		</Flex>
	);
};

export default Navbar;
