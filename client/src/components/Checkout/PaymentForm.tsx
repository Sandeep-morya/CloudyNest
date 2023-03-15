import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";

type Props = {};

const PaymentForm = (props: Props) => {
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	// const [formData,setFormData] = useState({});

	return (
		<Stack
			h="100%"
			spacing={5}
			bgColor={"white"}
			borderRadius="0.5rem"
			boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
			p="1.5rem">
			<Text
				as="b"
				fontSize={"1.2rem"}
				textAlign="center"
				textDecoration="underline"
				color="blackAlpha.600">
				Choose Payment Method
			</Text>
			<Button
				rightIcon={<TbTruckDelivery size="22" />}
				size="md"
				variant="outline">
				Cash on Delivery
			</Button>

			<Image
				w="auto"
				h={10}
				objectFit="contain"
				src="https://png.oyepandeyji.com/wp-content/uploads/2021/08/gpay-new-logo-png-removebg-preview.png"
				alt=""
			/>
			<Image
				w="auto"
				h={7}
				objectFit="contain"
				src="https://logos-download.com/wp-content/uploads/2021/01/PhonePe_Logo_full.png"
				alt=""
			/>

			<Image
				w="auto"
				h={7}
				objectFit="contain"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Paytm_logo.png/640px-Paytm_logo.png"
				alt=""
			/>
			<Button variant="unstyled">OR</Button>
			{/* Debit Card */}

			<Accordion allowMultiple w="100%">
				<AccordionItem border={"none"}>
					<AccordionButton padding={"4"}>
						<Image
							w={20}
							h={10}
							objectFit="cover"
							src="https://cdn3d.iconscout.com/3d/premium/thumb/debit-card-5296099-4431733.png"
							alt=""
						/>
						<Box as="span" flex="1" textAlign="left" fontSize="1.1rem">
							Debit Card
						</Box>
						<AccordionIcon />
					</AccordionButton>

					<AccordionPanel pb={4}>Age</AccordionPanel>
				</AccordionItem>

				{/* Creadit Card */}
				<AccordionItem border={"none"}>
					<AccordionButton padding={"4"}>
						<Image
							w={20}
							h={10}
							objectFit="contain"
							src="https://img.favpng.com/4/0/0/credit-card-payment-debit-card-emv-cash-png-favpng-hDwnr5f2sDdhbUdHHBYmULJCk.jpg"
							alt=""
						/>
						<Box as="span" flex="1" textAlign="left" fontSize="1.1rem">
							Credit Card
						</Box>
						<AccordionIcon />
					</AccordionButton>

					<AccordionPanel pb={4}>Age</AccordionPanel>
				</AccordionItem>

				<AccordionItem border={"none"}>
					<AccordionButton padding={"4"}>
						<Image
							w={20}
							h={10}
							objectFit="cover"
							src="https://res.cloudinary.com/due9pi68z/image/upload/v1678887887/s227hmkyihjztf2y0jis.png"
							alt=""
						/>
						<Box as="span" flex="1" textAlign="left" fontSize="1.1rem">
							{" "}
							Other UPI ID
						</Box>
						<AccordionIcon />
					</AccordionButton>

					<AccordionPanel pb={4}>Age</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Stack>
	);
};

export default PaymentForm;
