import {
	Button,
	Heading,
	Image,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightElement,
	Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdClose, MdFace } from "react-icons/md";
import BannerHeading from "../Misc/BannerHeading";

type Props = {};

const initalState = {
	email: "",
	password: "",
};

const SellerLogin = (props: Props) => {
	const [show, setShow] = useState(false);
	const [isError, setIsError] = useState(false);
	const [formData, setFormData] = useState(initalState);
	const [isLoading, setIsLoading] = useState(false);
	return (
		<Stack
			spacing={"5"}
			w="40%"
			m="auto"
			bgColor={"white"}
			p="2rem"
			boxShadow={"2px 2px 6px gray"}
			borderRadius={"0.5rem"}>
			<Image
				w={"min-content"}
                m="auto"
				h={150}
				filter="drop-shadow(0 0 1px teal)"
				src="/CloudyNest-Complete_logo.png"
				alt="CloudyNest-Complete_logo"
			/>
			{/* Name Field */}
			<Heading as="h2" size="md" textAlign={"start"}>
				Enter Credentials to Login
			</Heading>

			<InputGroup size="md">
				<InputLeftAddon>
					<MdFace size={22} />
				</InputLeftAddon>
				<Input
					focusBorderColor={"teal.500"}
					pr="4.5rem"
					type={"text"}
					placeholder="Email Address"
					value={formData.email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				/>
				<InputRightElement>
					{isError ? <MdClose color="red" size={22} /> : null}
				</InputRightElement>
			</InputGroup>

			{/* Password Filed */}
			<InputGroup size="md">
				<InputLeftAddon onClick={() => setShow(!show)}>
					{!show ? <FaEyeSlash size="20" /> : <FaEye size="20" />}
				</InputLeftAddon>
				<Input
					focusBorderColor={"teal.500"}
					pr="4.5rem"
					type={show ? "text" : "password"}
					placeholder="Password"
					value={formData.password}
					onChange={(e) =>
						setFormData({ ...formData, password: e.target.value })
					}
				/>
			</InputGroup>

			{/* Submit */}

			<Button
				_hover={{ color: "white" }}
				colorScheme={"teal"}
				isLoading={isLoading}
				disabled={isError}>
				Login to Continue
			</Button>
		</Stack>
	);
};

export default SellerLogin;
