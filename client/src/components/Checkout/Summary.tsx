import useGetCookie from "@/hooks/useGetCookie";
import {
	Button,
	Heading,
	IconButton,
	Spacer,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdCheck } from "react-icons/md";

type Props = {};

const Summary = (props: Props) => {
	const router = useRouter();
	const getCookie = useGetCookie();

	return (
		<Stack
			h="100%"
			w="100%"
			marginTop={"8rem"}
			spacing={5}
			bgColor={"white"}
			alignItems="center"
			borderRadius="0.5rem"
			boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
			p="6rem 2rem">
			<Stack alignItems={"center"}>
				<IconButton
					variant="outline"
					colorScheme="teal"
					borderRadius={"50%"}
					size="lg"
					borderWidth={".15rem"}
					aria-label="successfull"
					icon={<MdCheck size={25} />}
				/>
				<Text as="b" color="teal.400">
					Order Palced Successfull
				</Text>
				<Text color="blackAlpha.600">Thankyou so much for your order</Text>

				<Button
					w="100%"
					variant="solid"
					colorScheme={"teal"}
					onClick={() => router.push("/user/dashboard")}
					_hover={{ color: "white", backgroundColor: "teal" }}>
					Check Status
				</Button>
				<Button
					onClick={() => router.push("/")}
					w="100%"
					variant={"outline"}
					colorScheme={"teal"}>
					Go to Homepage
				</Button>
			</Stack>
		</Stack>
	);
};

export default Summary;
