import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

type Props = {
	state: number;
	activateOn: number;
	Icon: React.ReactNode
	selected?: boolean;
	title?: string;
	color?: string;
};

const StepIcon = ({
	selected = false,
	color = "teal",
	title,
	state,
	activateOn,
	Icon,
}: Props) => {
	const getColor = () =>
		selected ? color : state > activateOn ? color : "gray";

	return (
		<Box position={"relative"}>
			<Center
				w={8}
				h={8}
				bgColor="white"
				border={`1px solid ${getColor()}`}
				borderRadius={"50%"}
				zIndex={1}
				color={getColor()}
				transition={"all 1s"}>
				{Icon}
			</Center>
			<Text
				top={"100%"}
				left={"50%"}
				color={getColor()}
				transform={"translateX(-50%)"}
				position={"absolute"}
				fontWeight={"500"}>
				{title}
			</Text>
		</Box>
	);
};

export default StepIcon;
