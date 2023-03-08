import SellerNav from '@/components/Seller/SellerNav';
import { Box, Flex, Stack } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useState } from 'react'

type Props = {}

const AddProduct = (props: Props) => {
  const [showLogin, setShowLogin] = useState(false)
  return (
		<>
			<Head>
				<title>CloudyNest - Become a Supplier</title>
				<meta
					name="description"
					content="CloudyNest - An Online Shopping Website"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/CloudyNest-Logo-Image.png" />
			</Head>
			<main>
				<Stack bgColor={"blackAlpha.100"} w={"100vw"} spacing={0}>
					<Box
						position="sticky"
						top={0}
						bgColor={"white"}
						pt="0.5rem"
						pb="1rem"
						zIndex={5}
						boxShadow="0px 20px 5px -20px rgba(0, 0, 0, 0.45)">
						<SellerNav hideExtras={true} {...{ showLogin, setShowLogin }} />
					</Box>
					<Flex justifyContent={"center"} alignItems="center">

					</Flex>
				</Stack>
			</main>
		</>
	);
}

export default AddProduct