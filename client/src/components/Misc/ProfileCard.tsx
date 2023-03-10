import { SellerType } from "@/Types";
import { Box, Flex, Stack, Image, Heading } from "@chakra-ui/react";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";

type Props = {
	data: SellerType;
};

const ProfileCard = ({ data }: Props) => {
	return (
		<Stack w="100%" borderRadius={"0.5rem"} overflow="hidden" spacing={0}>
			<Box position={"relative"} w="100%" h="20rem">
				<Image
					w="100%"
					h="100%"
					objectFit={"cover"}
					src="https://picsum.photos/seed/picsum/1920/300"
					alt={"lorem"}
				/>
				<Box
					position="absolute"
					top={"50%"}
					left={"50%"}
					transform="translateX(-50%)"
					w={300}
					h={300}
					filter="drop-shadow(0 0 0.2rem black)">
					<FaPencilAlt className="edit_icon_pencil" />

					<Image
						w="100%"
						h="100%"
						objectFit={"cover"}
						src={data.image}
						alt="ds"
						borderRadius={"50%"}
						filter="drop-shadow(0 0 2px gray)"
					/>
					{/* image uplaod */}
					<input
						className="input_file"
						type="file"
						// onChange={handleFileChange}
						accept="image/*"
						required
					/>
				</Box>
			</Box>
			<Flex
				alignItems={"flex-end"}
				justifyContent="center"
				bgColor={"white"}
				w="100%"
				h="20rem">
				<Heading
					as="h1"
					size="3xl"
          letterSpacing="0.4rem"
					marginBottom={"4rem"}
					color={"gray"}>
					{data.name}
				</Heading>
			</Flex>
		</Stack>
	);
};

export default ProfileCard;
