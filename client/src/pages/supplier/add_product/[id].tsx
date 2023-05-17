import BannerHeading from "@/components/Misc/BannerHeading";
import SellerNav from "@/components/Seller/SellerNav";
import {
	Box,
	Button,
	Center,
	Checkbox,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Heading,
	Image,
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
import React, {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import axios, { AxiosResponse } from "axios";
import useToastAlert from "@/hooks/useToastalert";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import { productType, sellerProfileType, SellerType } from "@/Types";
import validateInputString from "@/functions/validateInputString";
import { GetServerSideProps } from "next";
import useThrottle from "@/hooks/useThrottle";
import validateRangeInput from "@/functions/validateRangeInput";
import validateInputArray from "@/functions/validateInputArray";
import useGetCookie from "@/hooks/useGetCookie";

type Props = {
	data: SellerType;
};

const upload_url = process.env.NEXT_PUBLIC_UPLOAD_URL as string;
const uplaod_preset = process.env.NEXT_PUBLIC_UPLOAD_PRESET as string;
const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME as string;
const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

const format = (val: string) => val + ` %`;
const formatInRupee = (val: string) => `₹ ` + val;
const parse = (val: string) => val.replace(/^\$/, "");

// :: Component ::
const AddProduct = ({ data }: Props) => {
	const getCookie = useGetCookie();
	const [showLogin, setShowLogin] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [productDetails, setProductails] = useState({} as productType);
	const toastAlert = useToastAlert();
	const router = useRouter();
	const throttle = useThrottle();

	const [title, setTitle] = useState("");
	const [titleError, setTitleError] = useState("");
	const [brand, setBrand] = useState("");
	const [brandError, setBrandError] = useState("");

	const [images, setImages] = useState([] as string[]);
	const [imagesError, setImagesError] = useState("");
	const [sizes, setSizes] = useState("");
	const [sizesError, setSizesError] = useState("");

	const [price, setPrice] = useState(0);
	const [priceError, setPriceError] = useState("");

	const [quantity, setQuantity] = useState(1);
	const [rating, setRating] = useState(3);
	const [discount, setDiscount] = useState(0);

	const [is_for, setIs_for] = useState("every");
	const [for_gender, setFor_gender] = useState("every");
	const [for_age, setFor_age] = useState("every");

	const [description, setDescription] = useState("");
	const [descriptionError, setDescriptionError] = useState("");
	const [thumbnail, setThumbnail] = useState("");
	const [thumbnailError, setThumbnailError] = useState("");

	const [tags, setTags] = useState("");
	const [tagsError, setTagsError] = useState("");
	const [checked, setChecked] = useState(true);

	// :: Upload thumbnail ::
	async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
		setIsLoading(true);

		const formData = new FormData();

		// :: e.target.files can be null also so we are returning the user ::
		if (!e.target.files || e.target.files.length === 0) {
			return;
		}
		try {
			formData.append("file", e.target.files[0]);
			formData.append("upload_preset", uplaod_preset);
			formData.append("cloud_name", cloud_name);
			const { data } = await axios.post(upload_url, formData);
			setThumbnail(data.url);
			setImages([...images, data.url]);
			setIsLoading(false);
		} catch (error) {
			setIsError(true);
			setIsLoading(false);
			toastAlert("error", "failed in uploading image");
		}
		// console.log(data);
	}

	// :: upload mulitple images ::
	async function uploadMulitpleImages(e: ChangeEvent<HTMLInputElement>) {
		setIsLoading(true);

		// :: e.target.files can be null also so we are returning the user ::
		if (!e.target.files || e.target.files.length === 0) {
			return;
		}

		// e.target.files.forEach(file=>formData.append("file", file))

		const uploads = [];
		for (let i = 0; i < e.target.files.length; i++) {
			setIsLoading(true);
			const formData = new FormData();
			formData.append("file", e.target.files[i]);
			formData.append("upload_preset", uplaod_preset);
			formData.append("cloud_name", cloud_name);
			try {
				const { data } = await axios.post(upload_url, formData);
				uploads.push(data.url);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				setIsError(true);
				toastAlert("error", "failed in uploading image");
				return;
			}
		}
		setImages(uploads);
	}

	function handleFormValidation() {
		const v_title = validateError(
			validateInputString(title),
			title,
			setTitleError,
		);
		const v_brand = validateError(
			validateInputString(brand),
			brand,
			setBrandError,
		);
		const v_thumbnail = validateError(
			validateInputString(thumbnail),
			thumbnail,
			setThumbnailError,
		);
		const v_description = validateError(
			validateInputString(description),
			description,
			setDescriptionError,
		);

		const v_sizes = validateError(
			validateInputArray(sizes, false),
			sizes,
			setSizesError,
		);
		const v_tag = validateError(
			validateInputArray(tags, true, "#"),
			tags,
			setTagsError,
		);

		const v_price = (() => {
			if (price < 5) {
				setPriceError("Price is Too less");
				setIsError(true);
				return false;
			} else {
				setPriceError("");
				return true;
			}
		})();

		const v_images = (() => {
			if (images.length < 2) {
				setImagesError("Upload Multiple Images, atleast one or your choice !");
				setIsError(true);
				return false;
			} else {
				setImagesError("");
				return true;
			}
		})();

		if (
			v_title &&
			v_price &&
			v_brand &&
			v_thumbnail &&
			v_description &&
			v_sizes &&
			v_images &&
			v_tag &&
			checked
		) {
			throttle(handleFormSubmit, 2000);
		} else {
			toastAlert("error", "Review form: Some is filled correctly");
		}
	}
	// console.log(productDetails);
	/* Mangae Errors */
	function validateError(
		validation_result: string,
		actual_one: string,
		dispatch: Dispatch<SetStateAction<string>>,
	) {
		if (validation_result != actual_one) {
			dispatch(validation_result);
			setIsError(true);
			return false;
		} else {
			dispatch("");
			return true;
		}
	}
	/* RemoveErrors */
	function washError(dispatch: Dispatch<SetStateAction<string>>) {
		dispatch("");
		setIsError(false);
	}

	async function handleFormSubmit() {
		setIsLoading(true);
		try {
			const data = await axios.post(base_url + "/product/add", productDetails, {
				headers: { Authorization: getCookie("cloudynest_jwt_token") },
			});
			// console.log(data);
			toastAlert("success", "Product added successfully");
			setIsLoading(false);
		} catch {
			setIsError(true);
			setIsLoading(false);
			toastAlert("error", "500 internal server error");
		}
	}
	useEffect(() => {
		if (!isError) {
			setProductails({
				title: title.trim(),
				brand: brand.trim(),
				description: description.trim(),
				thumbnail,
				images,
				price,
				tags: tags
					.trim()
					.split(",")
					.map((e) => e.trim()),
				quantity,
				discount,
				rating,
				is_for,
				for_gender,
				for_age,
				sizes: sizes
					.trim()
					.split(",")
					.map((e) => e.trim()),
			});
		}
	}, [
		title,
		brand,
		description,
		discount,
		for_age,
		for_gender,
		is_for,
		images,
		thumbnail,
		price,
		quantity,
		rating,
		tags,
		sizes,
		isError,
	]);

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
				<Stack w={"100%"} spacing={0}>
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
						p={{
							base: "1rem",
							sm: "1rem",
							md: "1rem",
							xl: "1rem",
							"2xl": "2rem 15rem",
						}}
						bgColor={"blackAlpha.100"}>
						<Center>
							<Image
								style={{ aspectRatio: "1" }}
								objectFit="cover"
								h="6rem"
								filter="drop-shadow(0 0 5px rgba(0,0,0,0.5))"
								borderRadius={"50%"}
								src={data.image}
								alt={data.name}
							/>
						</Center>
						<form
							style={{
								display: "grid",
								gap: "2.5rem",
								width: "100%",
								background: "white",
								padding: "1rem",
								borderRadius: "0.5rem",
								zIndex: "0",
								boxShadow:
									"rgba(0, 0, 0, 0.1) 0px 1px 5px 0px, rgba(0, 0, 0, 0.06) 0px 1px 5px 5px",
							}}>
							<Center color={"#24A3B5"} pb="1rem">
								<BannerHeading
									size="lg"
									title={"Hey!, Fill this form to add a new product"}
								/>
							</Center>

							{/* Title & Brand */}
							<Flex
								gap="1rem"
								flexDirection={{
									base: "column",
									md: "column",
									xl: "row",
								}}
								justifyContent="space-between"
								alignItems="flex-start">
								{/* Title */}
								<FormControl flex="2" isRequired isInvalid={titleError != ""}>
									<FormLabel>Product Title</FormLabel>
									<Input
										type="text"
										focusBorderColor="teal.500"
										placeholder="Enter a title for Product"
										value={title}
										onKeyDown={() => washError(setTitleError)}
										onChange={(e) => setTitle(e.target.value)}
									/>
									<FormErrorMessage>{titleError}</FormErrorMessage>
								</FormControl>

								{/* Brand */}
								<FormControl flex="1" isRequired isInvalid={brandError != ""}>
									<FormLabel>Brand Name</FormLabel>
									<Input
										type="text"
										focusBorderColor="teal.500"
										placeholder="Enter brand Name of your Product"
										value={brand}
										onKeyDown={() => washError(setBrandError)}
										onChange={(e) => setBrand(e.target.value)}
									/>
									<FormErrorMessage>{brandError}</FormErrorMessage>
								</FormControl>
							</Flex>

							{/* Price, Quantity, Discount, Rating*/}
							<SimpleGrid columns={[1, 1, 2, 2, 4, 4]} gap="1rem">
								{/* Price */}
								<FormControl isInvalid={priceError != ""}>
									<FormLabel>Product Price</FormLabel>
									<NumberInput
										focusBorderColor="teal.500"
										value={formatInRupee(String(price))}
										onKeyDown={() => washError(setPriceError)}
										onChange={(e) => setPrice(+parse(e))}
										min={0}
										step={100}>
										<NumberInputField />
										<NumberInputStepper>
											<NumberIncrementStepper />
											<NumberDecrementStepper />
										</NumberInputStepper>
									</NumberInput>
									<FormErrorMessage>{priceError}</FormErrorMessage>
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
									<FormLabel>{"Rate the quality (2-5)"}</FormLabel>
									<NumberInput
										value={rating}
										focusBorderColor="teal.500"
										onChange={(e) => setRating(+e)}
										min={2}
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
							<SimpleGrid columns={[1, 1, 1, 3, 3]} gap="1rem">
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
										<option value="not sure">Not sure</option>
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
										<option value="not_sure">Not sure</option>
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
										<option value="not_sure">Not sure</option>
									</Select>
								</FormControl>
							</SimpleGrid>

							{/* Images and Size */}
							<Flex
								gap="1rem"
								flexDirection={{
									base: "column",
									md: "column",
									xl: "row",
								}}
								justifyContent={"space-between"}
								alignItems="flex-start">
								<FormControl isRequired isInvalid={thumbnailError != ""}>
									<FormLabel>{"Thumbnail (Best Image)"}</FormLabel>

									<Input
										type={"file"}
										focusBorderColor="teal.500"
										onMouseDown={() => washError(setThumbnailError)}
										onChange={handleFileChange}
										accept="image/*"
										multiple={false}
									/>
									<FormErrorMessage>{thumbnailError}</FormErrorMessage>
								</FormControl>

								<FormControl isRequired isInvalid={imagesError != ""}>
									<FormLabel>
										{"All Images (Upload multiple images)"}{" "}
									</FormLabel>

									<Input
										type={"file"}
										focusBorderColor="teal.500"
										onMouseOver={() => washError(setImagesError)}
										onChange={uploadMulitpleImages}
										accept="image/*"
										multiple
									/>
									<FormErrorMessage>{imagesError}</FormErrorMessage>
								</FormControl>
							</Flex>

							<Flex
								gap="1rem"
								flexDirection={{
									base: "column",
									md: "column",
									xl: "row",
								}}
								justifyContent={"space-between"}
								alignItems="flex-start">
								{/* Size */}
								<FormControl isInvalid={sizesError != ""}>
									<FormLabel>{"All Sizes (optional)"}</FormLabel>
									<Input
										type="text"
										value={sizes}
										onKeyDown={() => washError(setSizesError)}
										focusBorderColor="teal.500"
										placeholder="example : m,l,xl,2xl,3xl,free"
										onChange={(e) => setSizes(e.target.value)}
									/>
									{!isError ? (
										<FormHelperText>
											{
												"Write all sizes, If it does not have size, then you can leave it"
											}
										</FormHelperText>
									) : (
										<FormErrorMessage>{sizesError}</FormErrorMessage>
									)}
								</FormControl>

								<FormControl isInvalid={tagsError != ""} isRequired>
									<FormLabel>{"Tags (search keywords)"}</FormLabel>
									<Input
										type="text"
										value={tags}
										focusBorderColor="teal.500"
										onKeyDown={() => washError(setTagsError)}
										placeholder={`#tag1,#tag2,#tag3`}
										onChange={(e) => setTags(e.target.value)}
									/>
									{!isError ? (
										<FormHelperText>
											{`Specify some keywords for categorization and easy search,
												.For Example if it a shirt for boys
												then you can write
												"#tshirt,#boys,#color etc..."`}
										</FormHelperText>
									) : (
										<FormErrorMessage>{tagsError}</FormErrorMessage>
									)}
								</FormControl>
							</Flex>

							{/* Description */}

							<FormControl isRequired isInvalid={descriptionError != ""}>
								<FormLabel>Description</FormLabel>
								<Textarea
									value={description}
									p="0.2rem 1rem"
									h="15rem"
									focusBorderColor="teal.500"
									onKeyDown={() => washError(setDescriptionError)}
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
								<FormErrorMessage>{descriptionError}</FormErrorMessage>
							</FormControl>

							{/* Agreement */}
							<FormControl isInvalid={checked === false}>
								<Checkbox
									size="md"
									colorScheme="teal"
									checked={checked}
									defaultChecked={true}
									onChange={() => setChecked(!checked)}>
									Check this if you are sure to uplaod product
								</Checkbox>
								<FormErrorMessage>
									Please Check This box to process
								</FormErrorMessage>
							</FormControl>
							{/* Submit */}

							<Button
								_hover={{ backgroundColor: "teal", color: "white" }}
								mt={4}
								bgColor={"teal.400"}
								color="white"
								isLoading={isLoading}
								variant={"solid"}
								size="lg"
								onClick={() => {
									throttle(handleFormValidation, 1000);
								}}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const { data }: AxiosResponse<sellerProfileType, any> = await axios.get(
			`${process.env.BASE_URL}/seller/profile`,
			{ headers: { Authorization: context.req.cookies.cloudynest_jwt_token } },
		);
		return {
			props: { data },
		};
	} catch {
		return {
			redirect: {
				destination: "/supplier",
				permanent: false,
			},
		};
	}
};
