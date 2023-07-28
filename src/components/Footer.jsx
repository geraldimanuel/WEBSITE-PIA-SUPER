import { Flex, Text, SimpleGrid } from "@chakra-ui/react";

import { ImLocation } from "react-icons/im";
import { MdAddIcCall } from "react-icons/md";
import { HiMailOpen } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";

export default function Footer() {
	return (
		<Flex
			w="100%"
			my={{ md: "50px", base: "20px" }}
			color="#8E1A13"
			justifyContent="space-evenly"
			alignItems="center"
			flexDirection={{ md: "row", base: "column" }}
			gap={{ md: "none", base: "35px" }}
		>
			<Flex className="info-text" flexDirection="column" gap={4}>
				<Flex className="location" alignItems="center" gap={3}>
					<ImLocation size="25px" />
					<Text fontSize="sm" fontWeight="bold">
						Jalan Let Jendral Suprapto No.128
					</Text>
				</Flex>
				<a href="https://wa.me/+6281224998556">
					<Flex className="phone" alignItems="center" gap={3}>
						<MdAddIcCall size="25px" />
						<Text fontSize="sm" fontWeight="semibold">
							+ 62 812 2499 8556
						</Text>
					</Flex>
				</a>
				<a
					href="
				https://mail.google.com/mail/?view=cm&to=dlanovdelights@gmail.com&su=[...]&body=..."
				>
					<Flex className="email" alignItems="center" gap={3}>
						<HiMailOpen size="25px" />
						<Text fontSize="sm" fontWeight="semibold">
							dlanovdelights@gmail.com
						</Text>
					</Flex>
				</a>
			</Flex>
			<SimpleGrid className="navbar-mini" columns={3} spacing={3}>
				<Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
					Tentang
				</Text>
				<Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
					Produk
				</Text>
				<Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
					Artikel
				</Text>
				<Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
					Toko
				</Text>
				<Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
					Promo
				</Text>
				<Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
					FAQ
				</Text>
			</SimpleGrid>
			<Flex className="social" justifyContent="center" gap={{ md: 2, base: 5 }}>
				<AiFillInstagram size="40px" />
				<FiFacebook size="40px" />
			</Flex>
		</Flex>
	);
}
