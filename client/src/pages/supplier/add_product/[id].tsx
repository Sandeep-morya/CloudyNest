import BannerHeading from "@/components/Misc/BannerHeading";
import SellerNav from "@/components/Seller/SellerNav";
import {
	Box,
	Button,
	Center,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Select,
	SimpleGrid,
	Stack,
	Text,
	Textarea,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useState } from "react";

type Props = {};

const format = (val: string) => val + ` %`;
const formatInRupee = (val: string) => `₹ ` + val;
const parse = (val: string) => val.replace(/^\$/, "");

const AddProduct = (props: Props) => {
	const [showLogin, setShowLogin] = useState(false);
	const [isError, setIsError] = useState(false);

	const [seller, setSeller] = useState("");

	const [title, setTitle] = useState("");
	const [brand, setBrand] = useState("");

	const [images, setImages] = useState([] as string[]);
	const [size, setSize] = useState("");

	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [rating, setRating] = useState(3);
	const [discount, setDiscount] = useState(0);

	const [is_for, setIs_for] = useState("every");
	const [for_gender, setFor_gender] = useState("every");
	const [for_age, setFor_age] = useState("every");

	const [description, setDescription] = useState("");
	const [thumbnail, setThumbnail] = useState("");

	const [tags, setTags] = useState("");

	/* handleImagesUpload */
	function handleImagesUpload() {}

	return (
		<>
			<Head>
				<title>CloudyNest - Add a Product</title>
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

					<Stack
						p={{ md: "2rem 0", xl: "2rem 0", "2xl": "2rem 15rem" }}
						bgColor={"blackAlpha.100"}>
						<form
							style={{
								display: "grid",
								gap: "2.5rem",
								width: "100%",
								background: "white",
								padding: "2.5rem",
								borderRadius: "0.5rem",
								zIndex: "0",
								boxShadow:
									"rgba(0, 0, 0, 0.1) 0px 1px 5px 0px, rgba(0, 0, 0, 0.06) 0px 1px 5px 5px",
							}}>
							<Center color={"#24A3B5"} pb="1rem">
								<BannerHeading
									size="lg"
									title={"Fill This Form For Adding the Product"}
								/>
							</Center>

							{/* Title & Brand */}
							<Flex
								gap="1rem"
								flexDirection={"row"}
								justifyContent="space-between"
								alignItems="center">
								{/* Title */}
								<FormControl flex="2" isRequired>
									<FormLabel>Product Title</FormLabel>
									<Input
										type="text"
										focusBorderColor="teal.500"
										placeholder="Enter a title for Product"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</FormControl>

								{/* Brand */}
								<FormControl flex="1" isRequired>
									<FormLabel>Brand Name</FormLabel>
									<Input
										type="text"
										focusBorderColor="teal.500"
										placeholder="Enter brand Name of your Product"
										value={brand}
										onChange={(e) => setBrand(e.target.value)}
									/>
								</FormControl>
							</Flex>

							{/* Price, Quantity, Discount, Rating*/}
							<SimpleGrid columns={4} gap="1rem">
								{/* Price */}
								<FormControl isRequired>
									<FormLabel>Product Price</FormLabel>
									<NumberInput
										focusBorderColor="teal.500"
										value={formatInRupee(String(price))}
										onChange={(e) => setPrice(+parse(e))}
										min={0}
										step={100}>
										<NumberInputField />
										<NumberInputStepper>
											<NumberIncrementStepper />
											<NumberDecrementStepper />
										</NumberInputStepper>
									</NumberInput>
								</FormControl>

								{/* Quantity */}
								<FormControl isRequired>
									<FormLabel>Quantity</FormLabel>
									<NumberInput
										value={quantity}
										focusBorderColor="teal.500"
										onChange={(e) => setQuantity(+e)}
										min={1}>
										<NumberInputField />
										<NumberInputStepper>
											<NumberIncrementStepper />
											<NumberDecrementStepper />
										</NumberInputStepper>
									</NumberInput>
								</FormControl>

								{/* Discount */}
								<FormControl isRequired>
									<FormLabel>{"Discount (0-90)"}</FormLabel>
									<NumberInput
										focusBorderColor="teal.500"
										onChange={(valueString) => setDiscount(+parse(valueString))}
										value={format(`${discount}`)}
										max={90}
										min={0}
										step={5}>
										<NumberInputField />
										<NumberInputStepper>
											<NumberIncrementStepper />
											<NumberDecrementStepper />
										</NumberInputStepper>
									</NumberInput>
								</FormControl>

								{/* Rating */}
								<FormControl isRequired>
									<FormLabel>{"Rate the quality (1-5)"}</FormLabel>
									<NumberInput
										value={rating}
										focusBorderColor="teal.500"
										onChange={(e) => setRating(+e)}
										min={0}
										max={5}
										step={0.5}>
										<NumberInputField />
										<NumberInputStepper>
											<NumberIncrementStepper />
											<NumberDecrementStepper />
										</NumberInputStepper>
									</NumberInput>
								</FormControl>
							</SimpleGrid>

							{/* is_for, for_gender, for_age, size */}
							<SimpleGrid columns={3} gap="1rem">
								{/* for_gender */}
								<FormControl isRequired>
									<FormLabel>This Prodouct is For Gender</FormLabel>
									<Select
										placeholder="Every"
										value={for_gender}
										focusBorderColor="teal.500"
										onChange={(e) => setFor_gender(e.target.value)}>
										<option value="male">Male</option>
										<option value="female">Female</option>
										<option value="trans">Transgender</option>
										<option value="other">Other</option>
									</Select>
								</FormControl>

								{/* is_for */}
								<FormControl isRequired>
									<FormLabel>This Prodouct is For Age Group </FormLabel>
									<Select
										placeholder="Every"
										value={is_for}
										focusBorderColor="teal.500"
										onChange={(e) => setIs_for(e.target.value)}>
										<option value="mens">Mens</option>
										<option value="womens">Womens</option>
										<option value="kids">Kids</option>
										<option value="teens">Teenagers</option>
										<option value="senior">Senior Citizens</option>
										<option value="other">Other</option>
									</Select>
								</FormControl>

								{/* is_age */}
								<FormControl isRequired>
									<FormLabel>Specify Age Group </FormLabel>
									<Select
										placeholder="Every"
										value={for_age}
										focusBorderColor="teal.500"
										onChange={(e) => {
											setFor_age(e.target.value);
										}}>
										<option value="0-0.6">0 To 2 Months Old</option>
										<option value="0.7-0.12">7 To 12 Months Old</option>
										<option value="2-3">2 And 3 Years Old</option>
										<option value="4-5">4 And 5 Years Old</option>
										<option value="6-8">6 To 8 Years Old</option>
										<option value="9-11">9 To 11 Years Old</option>
										<option value="12-14">12 To 14 Years Old</option>
										<option value="15-17">15 To 18 Years Old</option>
										<option value="18-100">18 And Above</option>
									</Select>
								</FormControl>
							</SimpleGrid>

							{/* Images and Size */}
							<Flex
								gap="1rem"
								justifyContent={"space-between"}
								alignItems="center">
								<FormControl isRequired>
									<FormLabel>{"Thumbnail (Best Image)"}</FormLabel>

									<Input
										type={"file"}
										focusBorderColor="teal.500"
										onChange={handleImagesUpload}
										accept="image/*"
										multiple={false}
									/>
								</FormControl>

								<FormControl isRequired>
									<FormLabel>
										{"All Images (Upload more than 1 images)"}{" "}
									</FormLabel>

									<Input
										type={"file"}
										focusBorderColor="teal.500"
										placeholder="Fill if it has any eg: M or 34 or free"
										onChange={handleImagesUpload}
										accept="image/*"
										multiple
									/>
								</FormControl>
							</Flex>

							<Flex
								gap="1rem"
								justifyContent={"space-between"}
								alignItems="flex-start">
								{/* Size */}
								<FormControl isInvalid={isError}>
									<FormLabel>{"All Sizes (optional)"}</FormLabel>
									<Input
										type="text"
										value={size}
										focusBorderColor="teal.500"
										placeholder="example : m l xl 2xl 3xl"
										onChange={(e) => setSize(e.target.value)}
									/>
									{!isError ? (
										<FormHelperText>
											Write all sizes, Provide between each other size
										</FormHelperText>
									) : (
										<FormErrorMessage>
											Please write in Correct Format
										</FormErrorMessage>
									)}
								</FormControl>

								<FormControl isInvalid={isError} isRequired>
									<FormLabel>{"Tags (search keywords)"}</FormLabel>
									<Input
										type="text"
										value={tags}
										focusBorderColor="teal.500"
										placeholder={`example : "tshirt boys color brand"`}
										onChange={(e) => setTags(e.target.value)}
									/>
									{!isError ? (
										<FormHelperText>
											{`Specify some keywords for categorization and eazy search,
												.For Example if it a shirt for boys
												then you can write
												"tshirt boys color brand"`}
										</FormHelperText>
									) : (
										<FormErrorMessage>
											Please write in Correct Format
										</FormErrorMessage>
									)}
								</FormControl>
							</Flex>

							{/* Description */}

							<FormControl isRequired>
								<FormLabel>Description</FormLabel>
								<Textarea
									value={description}
									p="0.2rem 1rem"
									h="15rem"
									focusBorderColor="teal.500"
									onChange={(e) => setDescription(e.target.value)}
									placeholder={`Write the Product Description Like this 👇👇👇

Name : Best Selling Round Neck Half Sleeves t-shirt for mens ( Pack of 1 )
Fabric : Cotton
Sleeve Length : Short Sleeves
Pattern : Printed
Net Quantity (N) : 1
Sizes : M (Chest Size : 38 in, Length Size: 26.5 in)
L (Chest Size : 40 in, Length Size: 27.5 in)
XL (Chest Size : 42 in, Length Size: 28.5 in)
Country of Origin : India`}
								/>
							</FormControl>

							<Button
								_hover={{ backgroundColor: "teal", color: "white" }}
								mt={4}
								colorScheme="teal"
								isLoading={false}
								variant={"solid"}
								size="lg"
								type="submit">
								Add this product
							</Button>
						</form>
					</Stack>
				</Stack>
			</main>
		</>
	);
};

export default AddProduct;
