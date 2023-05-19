import { Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const Logo = () => {
	const router = useRouter();
	return (
		<Image
			onClick={() => router.replace("/")}
			w={180}
			src="/CloudyNest-Logo_Title.png"
			alt="CloudyNest-Logo_Title.png"
		/>
	);
};

export default Logo;
