import { sellerProfileType, SellerType } from "@/Types";
import {
	Box,
	Flex,
	Stack,
	Image,
	Heading,
	Spinner,
	Center,
	Text,
	HStack,
	Divider,
	useMediaQuery,
} from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FaClock, FaPencilAlt } from "react-icons/fa";
import axios, { AxiosResponse } from "axios";
import useToastAlert from "@/hooks/useToastalert";
import { FcCalendar, FcPhone, FcAddressBook } from "react-icons/fc";
import useDate from "@/hooks/useDate";
import useGetCookie from "@/hooks/useGetCookie";

type Props = {
	data: sellerProfileType;
};

const upload_url = process.env.NEXT_PUBLIC_UPLOAD_URL as string;
const uplaod_preset = process.env.NEXT_PUBLIC_UPLOAD_PRESET as string;
const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME as string;
const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

const ProfileCard = ({ data }: Props) => {
	const [smallNav] = useMediaQuery("(max-width: 64rem)");
	const getCookie = useGetCookie();
	const [imageSrc, setImageSrc] = useState(data.image);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const toastAlert = useToastAlert();
	const date = useDate(data.createdAt);

	// :: Uplaod Image on Cloudnary ::
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
			imageUpload(data.url);
			setIsLoading(false);
		} catch (error) {
			setIsError(true);
			setIsLoading(false);
			toastAlert("error", "failed in uploading image");
		} // console.log(data);
		setIsLoading(false);
	}

	// :: Doing patch opreation on database to upadate the image url ::
	async function imageUpload<T>(image: T) {
		try {
			const { data }: AxiosResponse<sellerProfileType, any> = await axios.patch(
				base_url + "/seller/addmore",
				{ image },
				{
					headers: {
						Authorization: getCookie("cloudynest_jwt_token"),
					},
				},
			);
			setImageSrc(data.image);
			toastAlert("success", "image updated successfully");
		} catch (error) {
			toastAlert("error", "interanl server Error");
		}
	}

	// useEffect(() => {}, [imageSrc]);

	return (
		<Stack w="100%" borderRadius={"0.5rem"} overflow="hidden" spacing={0}>
			<Box
				position={"relative"}
				w="100%"
				h={{
					base: "10rem",
					sm: "10rem",
					md: "10rem",
					lg: "12rem",
					xl: "15rem",
					"2xl": "20rem",
				}}>
				<Image
					w="100%"
					h="100%"
					objectFit={"cover"}
					src="https://picsum.photos/1920/300"
					alt={"lorem"}
				/>
				<Box
					position="absolute"
					top={"50%"}
					left={"50%"}
					transform="translateX(-50%)"
					w={{
						base: "10rem",
						sm: "10rem",
						md: "10rem",
						lg: "12rem",
						xl: "15rem",
						"2xl": "20rem",
					}}
					h={{
						base: "10rem",
						sm: "10rem",
						md: "10rem",
						lg: "12rem",
						xl: "15rem",
						"2xl": "20rem",
					}}
					filter="drop-shadow(0 0 0.2rem black)">
					<FaPencilAlt className="edit_icon_pencil" />

					<Image
						w="100%"
						h="100%"
						objectFit={"cover"}
						src={imageSrc}
						alt="ds"
						borderRadius={"50%"}
						filter="drop-shadow(0 0 1px rgba(0,0,0,0.2))"
					/>
					{/* image uplaod */}
					<input
						className="input_file"
						type="file"
						onChange={handleFileChange}
						accept="image/*"
						required
					/>
					<Spinner
						w="100%"
						h="100%"
						position="absolute"
						top="0"
						left="0"
						thickness="0.3rem"
						speed="1s"
						emptyColor="white"
						color="teal.400"
						hidden={!isLoading}
					/>
				</Box>
			</Box>

			<Stack
				alignItems={"center"}
				bgColor="white"
				w="100%"
				h={{
					base: "10rem",
					sm: "10rem",
					md: "10rem",
					lg: "12rem",
					xl: "15rem",
					"2xl": "20rem",
				}}
				gap="1rem"
				pb={{
					base: "1rem",
					md: "1rem",
					xl: "2.5rem",
					"2xl": "3rem",
				}}
				flexDirection={"column-reverse"}>
				{!smallNav && (
					<Flex gap="2rem">
						<HStack title="Joining Date" gap="0.5rem">
							<FcCalendar size="25" />
							<Text fontWeight={600} color="gray.500" letterSpacing="0.05rem">
								{date.toDateString()}
							</Text>
						</HStack>
						<Divider orientation="vertical" borderColor={"rgba(0,0,0,0,5)"} />
						<HStack title="Email ID" gap="0.5rem">
							<FcAddressBook size="25" />
							<Text fontWeight={600} color="gray.500" letterSpacing="0.05rem">
								{data.email}
							</Text>
						</HStack>
						<Divider orientation="vertical" borderColor={"rgba(0,0,0,0,5)"} />
						<HStack title="Mobile Number" gap="0.5rem">
							<FcPhone size="25" />
							<Text fontWeight={600} color="gray.500" letterSpacing="0.05rem">
								{data.mobile}
							</Text>
						</HStack>
					</Flex>
				)}
				<Heading
					as="h1"
					size={{
						base: "xl",
						md: "xl",
						xl: "2xl",
						"2xl": "3xl",
					}}
					letterSpacing="0.2rem"
					color={"gray"}>
					{data.name}
				</Heading>
			</Stack>
		</Stack>
	);
};

export default ProfileCard;
