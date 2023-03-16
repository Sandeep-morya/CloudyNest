import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Badge,
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Input,
	Spinner,
	Stack,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import Pill from "../Misc/Pill";

type Props = {
	setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
};

const PaymentForm = ({ setPaymentMethod }: Props) => {
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
				_focusWithin={{ backgroundColor: "teal.50" }}
				onClick={() => setPaymentMethod("Cash on delivery")}
				variant="outline">
				Cash on Delivery
			</Button>
			<Input
				w="auto"
				h={10}
				type="image"
				border={"none"}
				_focusWithin={{ backgroundColor: "teal.50" }}
				onClick={() => setPaymentMethod("Google Pay App")}
				objectFit="contain"
				src="https://png.oyepandeyji.com/wp-content/uploads/2021/08/gpay-new-logo-png-removebg-preview.png"
				alt=""
			/>
			<Input
				w="auto"
				h={7}
				type="image"
				border={"none"}
				_focusWithin={{ backgroundColor: "teal.50" }}
				onClick={() => setPaymentMethod("PhonePe App")}
				objectFit="contain"
				src="https://logos-download.com/wp-content/uploads/2021/01/PhonePe_Logo_full.png"
				alt=""
			/>

			<Input
				w="auto"
				h={7}
				type="image"
				border={"none"}
				_focusWithin={{ backgroundColor: "teal.50" }}
				objectFit="contain"
				onClick={() => setPaymentMethod("Paytm App")}
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Paytm_logo.png/640px-Paytm_logo.png"
				alt=""
			/>
			{/* Debit Card */}

			<Accordion allowToggle w="100%">
				<AccordionItem
					border={"none"}
					_focusWithin={{ backgroundColor: "teal.50" }}
					onClick={() => setPaymentMethod("Debit Card")}>
					<AccordionButton padding={"4"}>
						<Image
							w={20}
							h={10}
							objectFit="cover"
							src="https://cdn3d.iconscout.com/3d/premium/thumb/debit-card-5296099-4431733.png"
							alt=""
						/>
						<Box as="span" flex="1" textAlign="left">
							Debit Card
						</Box>
						<AccordionIcon />
					</AccordionButton>

					<AccordionPanel pb={4}>
						<Stack spacing="0.5rem">
							<Input
								focusBorderColor={"teal.400"}
								bgColor={"white"}
								placeholder="Enter Card Number"
								type="number"
							/>
							<Flex gap="0.5rem">
								<Input
									focusBorderColor={"teal.400"}
									bgColor={"white"}
									placeholder="MM/YY"
									type="text"
								/>
								<Input
									focusBorderColor={"teal.400"}
									bgColor={"white"}
									placeholder="CVV"
									type="number"
								/>
							</Flex>
						</Stack>
					</AccordionPanel>
				</AccordionItem>

				{/* Creadit Card */}
				<AccordionItem
					_focusWithin={{ backgroundColor: "teal.50" }}
					border={"none"}
					onClick={() => setPaymentMethod("Credit Card")}>
					<AccordionButton padding={"4"}>
						<Image
							w={20}
							h={10}
							objectFit="contain"
							src="https://img.favpng.com/4/0/0/credit-card-payment-debit-card-emv-cash-png-favpng-hDwnr5f2sDdhbUdHHBYmULJCk.jpg"
							alt=""
						/>
						<Box as="span" flex="1" textAlign="left">
							Credit Card
						</Box>
						<AccordionIcon />
					</AccordionButton>

					<AccordionPanel pb={4}>
						<Stack spacing="0.5rem">
							<Input
								focusBorderColor={"teal.400"}
								bgColor={"white"}
								placeholder="Enter Card Number"
								type="number"
							/>
							<Flex gap="0.5rem">
								<Input
									focusBorderColor={"teal.400"}
									bgColor={"white"}
									placeholder="MM/YY"
									type="text"
								/>
								<Input
									focusBorderColor={"teal.400"}
									bgColor={"white"}
									placeholder="CVV"
									type="number"
								/>
							</Flex>
						</Stack>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem
					onClick={() => setPaymentMethod("UPI ID")}
					border={"none"}
					_focusWithin={{ backgroundColor: "teal.50" }}>
					<AccordionButton padding={"4"}>
						<Image
							w={20}
							h={10}
							objectFit="cover"
							src="https://res.cloudinary.com/due9pi68z/image/upload/v1678887887/s227hmkyihjztf2y0jis.png"
							alt=""
						/>
						<Box as="span" flex="1" textAlign="left">
							{" "}
							Other UPI ID
						</Box>
						<AccordionIcon />
					</AccordionButton>

					<AccordionPanel pb={4}>
						{" "}
						<Stack spacing="0.5rem">
							<Input
								focusBorderColor={"teal.400"}
								bgColor={"white"}
								placeholder="Enter Card Number"
								type="text"
							/>
							<Flex flexWrap={"wrap"} gap="1rem">
								<Pill>@paytm</Pill>
								<Pill>@ybl</Pill>
								<Pill>@oksbi</Pill>
								<Pill>@okicici</Pill>
								<Pill>@okhdfc</Pill>
							</Flex>
						</Stack>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Stack>
	);
};

export default PaymentForm;
