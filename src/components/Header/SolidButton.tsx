import { Button, ResponsiveValue } from "@chakra-ui/react";
import React from "react";

type Props = {
	outline?: boolean;
	onClick?: () => void;
	width?:
		| ResponsiveValue<
				| number
				| "px"
				| (string & {})
				| "-moz-initial"
				| "inherit"
				| "initial"
				| "revert"
				| "revert-layer"
				| "unset"
				| "-moz-fit-content"
				| "-moz-max-content"
				| "-moz-min-content"
				| "container.xl"
		  >
		| undefined;
	size?: ResponsiveValue<(string & {}) | "sm" | "md" | "lg" | "xs"> | undefined;
	children: React.ReactNode;
	leftIcon?:
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| undefined;
};

const SolidButton = ({
	onClick,
	outline,
	leftIcon,
	width = "auto",
	size = "md",
	children,
}: Props) => {
	return (
		<Button
			w={width}
			variant={outline ? "outline" : "solid"}
			size={size}
			colorScheme={"teal"}
			onClick={onClick}
			leftIcon={leftIcon}
			boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
			_hover={{
				background: "teal",
				color: "white",
			}}>
			{children}
		</Button>
	);
};

export default SolidButton;
