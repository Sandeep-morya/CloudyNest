import { Flex, Image, Stack, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../Misc/Logo";
import ProgressSteps from "./ProgressSteps";

type Props = {
	state: number;
};

const CartNav = ({ state }: Props) => {
	const [smallNav] = useMediaQuery("(max-width: 64rem)");

	return (
		<>
			{!smallNav && (
				<Flex
					w="100%"
					justifyContent="space-around"
					alignItems="center"
					p={{ md: "0", xl: "0", "2xl": "0 15rem" }}
					gap="5rem"
					marginTop="0.5rem">
					<Logo />
					<ProgressSteps
						css={{
							width: "50%",
						}}
						{...{ state }}
					/>
				</Flex>
			)}
			{smallNav && (
				<Stack alignItems={"center"} p="1rem">
					<Logo />
					<ProgressSteps
						css={{
							width: "100%",
						}}
						{...{ state }}
					/>
				</Stack>
			)}
		</>
	);
};

export default CartNav;
