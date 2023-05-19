import { Image } from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as A } from "react-responsive-carousel";

const images = [
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426762/hi2ilkoczrgwhip9rt3h.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426764/ksiz5kouhe4lexjg4aqb.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426765/lnupuousyrho1ebcpc2s.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426762/jd4erqwxepaqo7spb99t.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426764/pxgwvltd5x7s56om27p6.png",
	"https://res.cloudinary.com/due9pi68z/image/upload/v1684426764/jv2zjdoe3fvnyxf3evp5.png",
];

function Carousel() {
	return (
		<A autoPlay infiniteLoop interval={2000} className="carousel-container">
			{images.map((e) => (
				<div key={e}>
					<Image alt="" w={{ base: "100%", sm: "95%", "2xl": "80%" }} src={e} />
				</div>
			))}
		</A>
	);
}

export default Carousel;
