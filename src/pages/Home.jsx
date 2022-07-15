import {
	Heading,
	Flex,
	Image,
	useColorModeValue,
	SimpleGrid,
	Spinner,
	Text,
	Box,
} from "@chakra-ui/react";
import Header from "../components/Header";
import OurProduct from "../components/OurProduct";

import coklat_2 from "../assets/coklat_2.jpeg";
import bawah_menu from "../assets/bawah_menu.svg";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<Flex flexDirection="column" className="homepage" maxW="2000px">
			<Header />
			<Image
				src={coklat_2}
				h={{ md: "620px", base: "250px" }}
				objectFit="cover"
			/>
			<OurProduct />
			<Footer />
		</Flex>
	);
}
