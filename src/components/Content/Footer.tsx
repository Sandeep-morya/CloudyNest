import {
	Box,
	Divider,
	Flex,
	HStack,
	Grid,
	Stack,
	Text,
	SimpleGrid,
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
			p={{
				base: "1rem",
				sm: "1rem",
				md: "2rem",
				xl: "2rem",
				"2xl": "2rem 15rem",
			}}
			bgColor="teal.400">
			<SimpleGrid
				columns={{
					base: 1,
					sm: 1,
					lg: 1,
					xl: 2,
					"2xl": 2,
				}}
				gap="2rem">
				<Stack>
					<Text as="b" fontSize={"1.1rem"}>
						ABOUT
					</Text>
					<Text></Text>
					<Text>
						Cloudynest - Your One-Stop Destination for Seamless Online Shopping.
						<br /> <br />
						At Cloudynest, we strive to provide you with an exceptional online
						shopping experience. With a wide range of products from top brands,
						competitive prices, and convenient delivery options, we make it easy
						for you to find exactly what you need. Explore our extensive
						collection of fashion, electronics, home decor, beauty products, and
						much more.
						<br />
						<br />
						Stay connected with us through our social media channels to stay
						up-to-date with the latest product launches, promotions, and
						exclusive offers.
						<br /> <br />
						Thank you for choosing Cloudynest - your trusted online shopping
						destination.
					</Text>
				</Stack>
				<SimpleGrid columns={2}>
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
				</SimpleGrid>
			</SimpleGrid>
			<Divider />
			<Flex
				w="100%"
				flexDirection={{
					base: "column-reverse",
					xl: "row",
					"2xl": "row",
				}}
				justifyContent={"space-between"}
				alignItems={"center"}>
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
