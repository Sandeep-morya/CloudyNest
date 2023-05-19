import { Image } from "@chakra-ui/react";

type Props = {};

const Loader = (props: Props) => {
	return (
		<div className="loader-container">
			<div className="loader">
				<Image src="/CloudyNest-Logo-Image.png" alt="loading" />
			</div>
		</div>
	);
};

export default Loader;
