import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import SellerCard from "./SellerCard";

type Props = {};

const Dashboard = (props: Props) => {
	return (
		<Flex w="75%" border={"1px solid red"}>
			<SellerCard />
		</Flex>
	);
};

export default Dashboard;
