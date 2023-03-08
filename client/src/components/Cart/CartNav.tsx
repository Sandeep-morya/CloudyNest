import { Flex, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import ProgressSteps from './ProgressSteps'

type Props = {
    state:number
}

const CartNav = ({state}: Props) => {
    const router = useRouter()
  return (
		<Flex
			w="100%"
			justifyContent="space-around"
			alignItems="center"
			p={{ md: "0", xl: "0", "2xl": "0 15rem" }}
			gap="5rem"
			marginTop="0.5rem">
			<Image
				onClick={() => router.replace("/")}
				width={180}
				src="/CloudyNest-Logo_Title.png"
				alt="CloudyNest-Logo_Title.png"
			/>
			<ProgressSteps
				css={{
					width: "50%",
				}}
				{...{ state }}
			/>
		</Flex>
	);
}

export default CartNav