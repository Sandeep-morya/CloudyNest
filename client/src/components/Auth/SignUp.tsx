import {
	Button,
	Center,
	Heading,
	Image,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightElement,
	Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
	MdFace,
	MdOutlineAlternateEmail,
	MdLockOutline,
	MdClose,
	MdCheck,
} from "react-icons/md";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import BannerHeading from "../Misc/BannerHeading";

type Props = {};

const initalState = {
	name: "",
	email: "",
	password: "",
};

const SignUp = (props: Props) => {
	const [show, setShow] = useState(false);
	const [isError, setIsError] = useState(false);
	const [formData, setFormData] = useState(initalState);
	const [isLoading, setIsLoading] = useState(false);
	return (
		<Stack spacing={"5"} w="90%">
			{/* Name Field */}
			<InputGroup size="md">
				<InputLeftAddon>
					<MdFace size={22} />
				</InputLeftAddon>
				<Input
					focusBorderColor={"teal.500"}
					pr="4.5rem"
					type={"name"}
					placeholder="Username"
					value={formData.name}
					onChange={(e) => setFormData({ ...formData, name: e.target.value })}
				/>
				<InputRightElement>
					{isError ? <MdClose color="red" size={22} /> : null}
				</InputRightElement>
			</InputGroup>
			{/* Email Field */}
			<InputGroup size="md">
				<InputLeftAddon>
					<MdOutlineAlternateEmail size={22} />
				</InputLeftAddon>
				<Input
					focusBorderColor={"teal.500"}
					pr="4.5rem"
					type={"email"}
					placeholder="Email"
					value={formData.email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				/>
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
				Create a new Account
			</Button>
		</Stack>
	);
};

export default SignUp;
