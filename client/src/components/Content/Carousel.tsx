import { Image } from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as A } from "react-responsive-carousel";

function Carousel() {
	return (
		<A autoPlay infiniteLoop interval={2000} className="carousel-container">
			<div>
				<Image
					alt=""
					w={{ base: "100%", sm: "95%", "2xl": "80%" }}
					src="https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-E-commerce-Product-Banner-Design-with-Green-Colors-scaled.jpg"
				/>
			</div>
			<div>
				<Image
					alt=""
					w={{ base: "100%", sm: "95%", "2xl": "80%" }}
					src="ad1.png"
				/>
			</div>
			<div>
				<Image
					alt=""
					w={{ base: "100%", sm: "95%", "2xl": "80%" }}
					src="https://static.vecteezy.com/system/resources/previews/003/692/287/original/big-sale-discount-promotion-banner-template-with-blank-product-podium-scene-graphic-free-vector.jpg"
				/>
			</div>
		</A>
	);
}

export default Carousel;
