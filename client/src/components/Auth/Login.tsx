import {
	Button,
	Heading,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightElement,
	Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdClose, MdFace } from "react-icons/md";

type Props = {};

const initalState = {
	name: "",
	password: "",
};

const Login = (props: Props) => {
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

export default Login;
