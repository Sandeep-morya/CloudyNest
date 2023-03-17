import {
	Box,
	Divider,
	Flex,
	HStack,
	Grid,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";

// import "@/styles/footer.css";

const Footer = () => {
	return (
		<Flex
			w="100%"
			flexDirection={"column"}
			gap="1rem"
			p={{ md: "2rem", xl: "2rem", "2xl": "2rem 15rem" }}
			bgColor="teal.400">
			<Grid gridTemplateColumns={"2fr 1fr 1fr"}>
				<Stack>
					<Text as="b" fontSize={"1.1rem"}>
						ABOUT
					</Text>
					<Text></Text>
					<Text>
						Scanfcode.com CODE WANTS TO BE SIMPLE is an initiative to help the
						upcoming programmers with the code. Scanfcode focuses on providing
						the most efficient code or snippets as the code wants to be simple.
						We will help programmers build up concepts in different programming
						languages that include C, C++, Java, HTML, CSS, Bootstrap,
						JavaScript, PHP, Android, SQL and Algorithm.
					</Text>
				</Stack>
				<Stack>
					<Text as="b" fontSize={"1.1rem"}>
						Tech Stack
					</Text>
					<Text></Text>
					<Text>HTML5 CSS3 JavaScript</Text>
					<Text>TypeScript</Text>
					<Text>NextJS</Text>
					<Text>Chakra UI</Text>
					<Text>NodeJS</Text>
					<Text>ExpressJS</Text>
					<Text>MongoDB</Text>
				</Stack>
				<Stack>
					<Text as="b" fontSize={"1.1rem"}>
						Quick Links
					</Text>
					<Text></Text>
					<Text>About Us</Text>
					<Text>Contact Us</Text>
					<Text>Contribute</Text>
					<Text>Terms</Text>
					<Text>Privacy Policy</Text>
					<Text>Sitemap</Text>
				</Stack>
			</Grid>
			<Divider />
			<Flex w="100%" justifyContent={"space-between"} alignItems={"center"}>
				<Text>Copyright © 2023 All Rights Reserved by CloudyNest.</Text>
				<HStack>
					<FaFacebook size="35" />
					<FaGithub size="35" />
					<AiFillTwitterCircle size="40" />
					<TiSocialLinkedinCircular size="50" />
				</HStack>
			</Flex>
		</Flex>
	);
};

export default Footer;
