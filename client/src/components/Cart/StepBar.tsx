import { Box } from '@chakra-ui/react';
import React from 'react'

type Props = {
	state: number;
	activateOn: number;
};

const StepBar = ({ state, activateOn }: Props) => {
	return (
		<Box bgColor="gray.200">
			<Box
				h="5px"
				w={state > activateOn ? `100%` : 0}
				bgColor={"teal"}
				transition={"all 0.5s"}></Box>
		</Box>
	);
};

export default StepBar