import validateEmail from "@/functions/validataEmail";
import validateInputString from "@/functions/validateInputString";
import validatePassword from "@/functions/validatePassword";
import useSetCookie from "@/hooks/useSetCookie";
import useThrottle from "@/hooks/useThrottle";
import useToastAlert from "@/hooks/useToastalert";
import { userFormType } from "@/Types";
import {
	Button,
	Heading,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightElement,
	Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdClose, MdFace } from "react-icons/md";

type Props = {};

const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

const Login = (props: Props) => {
	const setCookie = useSetCookie();
	const throttle = useThrottle();
	const toastAlert = useToastAlert();
	const router = useRouter();

	const [show, setShow] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// :: inputs ::
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleFormValidation() {
		const _email = validateEmail(email);
		if (_email != email) {
			toastAlert("warning", `Email Error : ${_email}`);
			setIsError(true);
			return false;
		}

		const _password = validatePassword(password);
		if (_password != password) {
			toastAlert("warning", `Password Error : ${_password}`);
			setIsError(true);
			return false;
		}
		throttle(handleFormSubmit, 2000);
	}

	async function handleFormSubmit() {
		const formData: userFormType = { email, password };
		try {
			const { data } = await axios.post(`${base_url}/user/login`, formData);

			if (data === "Above Email is not registered with us") {
				toastAlert("error", `Email Error : ${data}`);
				setIsError(true);
			} else if (data === "Oopss.. you have enterd a wrong password") {
				toastAlert("error", `Passowrd Error : ${data}`);
				setIsError(true);
			} else {
				toastAlert("success", "Congrats! Your are successfully Login");
				setCookie("user_cloudynest_jwt_token", data.token);
				router.back();
			}
			setIsLoading(false);
		} catch (error) {
			toastAlert("error", "interanl server Error");
			setIsLoading(false);
			setIsError(true);
		}
	}

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
					type="email"
					onKeyDown={() => setIsError(false)}
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
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
					onKeyDown={() => setIsError(false)}
					type={show ? "text" : "password"}
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</InputGroup>

			{/* Submit */}

			<Button
				_hover={{ color: "white" }}
				colorScheme={isError ? "red" : "teal"}
				isLoading={isLoading}
				isDisabled={isError}
				onClick={() => {
					throttle(handleFormValidation, 500);
				}}>
				Login to Continue
			</Button>
		</Stack>
	);
};

export default Login;
