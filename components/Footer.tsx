//#FFD700
//#FFD700
interface FooterProps {}
import { Box, Flex, Text } from "@chakra-ui/react";
import FooterBottomComponent from "./FooterBottomComponent";

const Footer: React.FC<FooterProps> = () => {
	return (
		<Box
			bgColor="#000000"
			padding={50}
			borderRadius="10px 10px 0 0"
			boxShadow="5px 9px 50px -23px #FFD700"
		>
			<Flex
				justifyContent="space-between"
				alignItems="center"
				marginBottom={50}
			>
				<Flex flexDirection="column">
					<Text
						color="#FFD700"
						fontFamily="Roboto"
						fontWeight="bold"
						marginBottom={10}
						fontSize="1.4rem"
					>
						Section
					</Text>
					<Text
						className="footer-link"
						cursor="pointer"
						fontFamily="Roboto"
					>
						Lorem ipsum
					</Text>
					<Text
						className="footer-link"
						cursor="pointer"
						fontFamily="Roboto"
					>
						Lorem ipsum
					</Text>
					<Text
						className="footer-link"
						cursor="pointer"
						fontFamily="Roboto"
					>
						Lorem ipsum
					</Text>
					<Text
						className="footer-link"
						cursor="pointer"
						fontFamily="Roboto"
					>
						Lorem ipsum
					</Text>
				</Flex>

				<Flex flexDirection="column">
					<Text
						color="#FFD700"
						fontFamily="Roboto"
						fontWeight="bold"
						marginBottom={10}
						fontSize="1.4rem"
					>
						Section
					</Text>
					<Text
						className="footer-link"
						cursor="pointer"
						fontFamily="Roboto"
					>
						{" "}
						Lorem ipsum
					</Text>
					<Text
						className="footer-link"
						cursor="pointer"
						fontFamily="Roboto"
					>
						Lorem ipsum
					</Text>
					<Text
						className="footer-link"
						cursor="pointer"
						fontFamily="Roboto"
					>
						Lorem ipsum
					</Text>
					<Text
						className="footer-link"
						cursor="pointer"
						fontFamily="Roboto"
					>
						Lorem ipsum
					</Text>
				</Flex>

				<Flex flexDirection="column">
					<Text
						color="#FFD700"
						fontFamily="Roboto"
						fontWeight="bold"
						marginBottom={10}
						fontSize="1.4rem"
					>
						Section
					</Text>
					<Text
						className="footer-link"
						cursor="pointer"
						fontFamily="Roboto"
					>
						Lorem ipsum
					</Text>
					<Text
						className="footer-link"
						cursor="pointer"
						fontFamily="Roboto"
					>
						Lorem ipsum
					</Text>
					<Text
						className="footer-link"
						cursor="pointer"
						fontFamily="Roboto"
					>
						Lorem ipsum
					</Text>
					<Text
						className="footer-link"
						cursor="pointer"
						fontFamily="Roboto"
					>
						Lorem ipsum
					</Text>
				</Flex>
			</Flex>
			<FooterBottomComponent />
		</Box>
	);
};

export default Footer;
