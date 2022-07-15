import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import kacang_hijau_2 from "../assets/kacang_hijau_2.jpeg";
import coklat_2 from "../assets/coklat_2.jpeg";
import keju_1 from "../assets/keju_1.jpeg";

export default function OurProduct() {
	const [desc, setDesc] = useState(
		"Rasa kacang hijau yang renyah dan enak di dalam mulut"
	);
	const [varian, setVarian] = useState("Original Kacang Hijau");
	const [picture, setPicture] = useState(kacang_hijau_2);

	function coklatHandler() {
		setDesc("Rasa coklat enak yang meleleh di dalam mulut");
		setVarian("Original Coklat");
		setPicture(coklat_2);
	}

	function kejuHandler() {
		setDesc("Rasa keju enak yang manis siap menemani harimu");
		setVarian("Original Keju");
		setPicture(keju_1);
	}

	function kacangHandler() {
		setDesc("Rasa kacang hijau yang renyah dan enak di dalam mulut");
		setVarian("Original Kacang Hijau");
		setPicture(kacang_hijau_2);
	}

	return (
		<Flex className="bungkus-product" justifyContent="space-between">
			<Flex mt="170px">
				<Image
					src="https://bakpiakukustugu.co.id/assets/img/Vector-cok-atas-kiri.svg"
					w={{ md: "135px", base: "35px" }}
				/>
			</Flex>

			<Flex
				flexDirection="column"
				alignItems="center"
				py={{ md: "40px", base: "10px" }}
				className="content"
			>
				<Flex
					className="main-content"
					columnGap="50px"
					w="100%"
					flexDir={{ md: "row", base: "column-reverse" }}
					justifyContent="center"
				>
					<Flex
						flexDirection="column"
						alignItems="center"
						className="content-kiri"
						gap="40px"
						pt={{ md: 0, base: "50px" }}
						pb={{ md: 0, base: "10px" }}
					>
						<Flex flexDirection="column" alignItems="center" className="title">
							<Text
								color="#603E2A"
								letterSpacing="widest"
								fontWeight="semibold"
								fontSize="xl"
							>
								BAKPIA PANGGANG
							</Text>
							<Text
								color="#753E35"
								fontWeight="bold"
								fontSize="2xl"
								letterSpacing="tight"
							>
								{varian}
							</Text>
						</Flex>
						<Image
							src={picture}
							boxSize={{ md: "300px", base: "290px" }}
							objectFit="cover"
							borderRadius="100%"
						/>
						<Flex
							flexDirection="column"
							alignItems="center"
							className="selector"
							gap={4}
						>
							<Text color="#753E35" fontWeight="bold" fontSize="lg">
								Varian Rasa
							</Text>
							<Flex gap={7}>
								<Image
									src="https://bakpiakukustugu.co.id/uploads/2/2021-03/group_192.png"
									onClick={kacangHandler}
									border="10px"
								/>
								<Image
									src="https://bakpiakukustugu.co.id/uploads/2/2021-04/group_189.png"
									onClick={coklatHandler}
								/>
								<Image
									src="https://bakpiakukustugu.co.id/uploads/2/2021-03/group_190.png"
									onClick={kejuHandler}
								/>
							</Flex>
						</Flex>
					</Flex>
					<Flex
						flexDirection="column"
						className="content-kanan"
						pt="60px"
						gap={{ md: 8, base: 7 }}
						w={{ md: "400px", base: "100%" }}
					>
						<Flex
							className="selector-bakpia"
							alignItems="center"
							justifyContent="center"
							gap={10}
							ms={{ md: 4, base: 0 }}
						>
							<Text
								color="#753E35"
								fontWeight="bold"
								fontSize={{ md: "xl", base: "lg" }}
							>
								Bakpia Panggang
							</Text>
							<Text
								color="#E0D0AA"
								fontWeight="bold"
								fontSize={{ md: "xl", base: "lg" }}
							>
								Bakpia Kukus
							</Text>
						</Flex>
						<Flex
							className="description"
							flexDirection="column"
							px={{ md: 0, base: 7 }}
							gap={{ md: 0, base: 2 }}
						>
							<Text
								color="#753E35"
								fontWeight="bold"
								fontSize={{ md: "2xl", base: "xl" }}
							>
								{varian}
							</Text>
							<Text color="#7B7F79" fontSize={{ md: "md", base: "sm" }}>
								{desc}
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex mt="170px">
				<Image
					src="https://bakpiakukustugu.co.id/assets/img/Vector-cok-atas-kanan.svg"
					w={{ md: "135px", base: "35px" }}
				/>
			</Flex>
		</Flex>
	);
}
