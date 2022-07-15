import { Flex, Text, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<Flex
			bgColor="#FFF8F0"
			w="100%"
			justifyContent="center"
			alignItems="center"
			columnGap={"50px"}
			position="sticky"
			top="0"
		>
			<Text
				color="#753E35"
				fontWeight="bold"
				display={{ md: "flex", base: "none" }}
			>
				Tentang
			</Text>
			<Text
				color="#753E35"
				fontWeight="bold"
				display={{ md: "flex", base: "none" }}
			>
				Produk
			</Text>
			<Text
				color="#753E35"
				fontWeight="bold"
				display={{ md: "flex", base: "none" }}
			>
				Artikel
			</Text>
			<Image src={logo} boxSize={{ md: "105px", base: "80px" }} />
			<Text
				color="#753E35"
				fontWeight="bold"
				display={{ md: "flex", base: "none" }}
			>
				Toko
			</Text>
			<Text
				color="#753E35"
				fontWeight="bold"
				display={{ md: "flex", base: "none" }}
			>
				Promo
			</Text>
			<Text
				color="#753E35"
				fontWeight="bold"
				display={{ md: "flex", base: "none" }}
			>
				FAQ
			</Text>
		</Flex>
	);
}
