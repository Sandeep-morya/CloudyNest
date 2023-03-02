import {
	Button,
	Center,
	Heading,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";

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
		<Stack spacing={"5"}>
			{/* Name Field */}
			<InputGroup size="md">
				<Input
					pr="4.5rem"
					type={"name"}
					placeholder="Name"
					value={formData.name}
					onChange={(e) => setFormData({ ...formData, name: e.target.value })}
				/>
			</InputGroup>
			{/* Email Field */}
			<InputGroup size="md">
				<Input
					pr="4.5rem"
					type={"email"}
					placeholder="Email"
					value={formData.email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				/>
				{/* <InputRightElement children={<FaAt />} /> */}
			</InputGroup>

			{/* Password Filed */}
			<InputGroup size="md">
				<Input
					pr="4.5rem"
					type={show ? "text" : "password"}
					placeholder="Enter password"
					value={formData.password}
					onChange={(e) =>
						setFormData({ ...formData, password: e.target.value })
					}
				/>
				{/* <InputRightElement
					children={!show ? <FaEyeSlash /> : <FaEye />}
					onClick={() => setShow(!show)}
				/> */}
			</InputGroup>

			{/* Submit */}

			<Button colorScheme={"cyan"} isLoading={isLoading} disabled={isError}>
				Create a new Account
			</Button>
		</Stack>
	);
};

export default SignUp;
