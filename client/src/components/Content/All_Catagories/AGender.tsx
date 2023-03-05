import React from "react";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
} from "@chakra-ui/react";

const AGender = () => {
	return (
		<AccordionItem>
			<AccordionButton padding={"4"}>
				<Box
					as="span"
					flex="1"
					textAlign="left"
					fontWeight={600}
					fontSize="1.1rem">
					Gender
				</Box>
				<AccordionIcon />
			</AccordionButton>

			<AccordionPanel pb={4}>Gender</AccordionPanel>
		</AccordionItem>
	);
};

export default AGender;
