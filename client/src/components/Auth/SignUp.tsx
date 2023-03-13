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
import useThrottle from "@/hooks/useThrottle";
import useToastAlert from "@/hooks/useToastalert";
import validateEmail from "@/functions/validataEmail";
import validatePassword from "@/functions/validatePassword";
import validateInputString from "@/functions/validateInputString";
import { userFormType } from "@/Types";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

type Props = {};

const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

const SignUp = (props: Props) => {
	const [cookie, setCookie] = useCookies(["user_cloudynest_jwt_token"]);
	const throttle = useThrottle();
	const toastAlert = useToastAlert();
	const router = useRouter();

	const [show, setShow] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// :: inputs ::
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleFormValidation() {
		const _name = validateInputString(name);
		if (_name != name) {
			toastAlert("warning", `Name Error : ${_name}`);
			setIsError(true);
			return false;
		}
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
		// console.log(formData);
		const formData: userFormType = { name, email, password };
		try {
			const { data } = await axios.post(`${base_url}/user/register`, formData);

			if (data === "Email ID already Registered") {
				toastAlert("error", `Email Error : ${data}`);
				setIsError(true);
			} else {
				toastAlert("success", "Congrats! Your are successfully registered");
				setCookie("user_cloudynest_jwt_token", data.token);
				router.back();
			}
			setIsLoading(false);
		} catch (error) {
			toastAlert("error", "interanl server Error");
			setIsError(true);
			setIsLoading(false);
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
					type={"name"}
					placeholder="Your Name"
					onKeyDown={() => setIsError(false)}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
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
					onKeyDown={() => setIsError(false)}
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
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
				Create a new Account
			</Button>
		</Stack>
	);
};

export default SignUp;
