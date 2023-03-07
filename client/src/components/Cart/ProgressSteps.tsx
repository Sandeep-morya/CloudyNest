import {
	Box,
	Button,
	Center,
	Flex,
	Progress,
	Stack,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaAddressCard, FaShoppingBag } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdSummarize } from "react-icons/md";
import StepIcon from "./StepIcon";
import StepBar from "./StepBar";

const ProgressSteps = ({ state }: { state: number }) => {


	return (
		<Box w="50%" position={"relative"}>
			<Box
				w="100%"
				display={"grid"}
				gridTemplateColumns={"1fr 6fr 1fr 6fr 1fr 6fr 1fr"}
				justifyContent={"center"}
				alignItems={"center"}>
				<StepIcon
					title="Cart"
					selected
					activateOn={0}
					state={state}
					Icon={<FaShoppingBag />}
				/>
				<StepBar activateOn={0} state={state} />
				<StepIcon
					title="Address"
					activateOn={0}
					state={state}
					Icon={<FaAddressCard />}
				/>
				<StepBar activateOn={35} state={state} />
				<StepIcon
					title="Payment"
					activateOn={35}
					state={state}
					Icon={<RiSecurePaymentFill />}
				/>
				<StepBar activateOn={70} state={state} />
				<StepIcon
					title="Summary"
					activateOn={70}
					state={state}
					Icon={<MdSummarize />}
				/>
			</Box>
		</Box>
	);
};

export default ProgressSteps;
