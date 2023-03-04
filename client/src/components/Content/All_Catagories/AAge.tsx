import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const AAge = (props: Props) => {
	return (
		<AccordionItem>
			<AccordionButton padding={"4"}>
				<Box
					as="span"
					flex="1"
					textAlign="left"
					fontWeight={600}
					fontSize="1.1rem">
					Age
				</Box>
				<AccordionIcon />
			</AccordionButton>

			<AccordionPanel pb={4}>Age</AccordionPanel>
		</AccordionItem>
	);
};

export default AAge;
