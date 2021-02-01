import { Flex, Text } from "@chakra-ui/react";

import { BsCodeSlash } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

interface MeComponentProps {}

const MeComponent: React.FC<MeComponentProps> = () => {
	return (
		<Flex
			bgColor="white"
			borderRadius={50}
			marginTop={10}
			padding="5px 20px"
			justifyContent="center"
			alignItems="center"
		>
			<Text color="black" fontFamily="Roboto" fontWeight="bolder">
				This webside is created by `haytham boussarsar`{" "}
			</Text>
			<BsCodeSlash
				fontSize="1.3rem"
				color="black"
				style={{ margin: "0 10px" }}
			/>
			<AiFillGithub fontSize="1.3rem" color="black" />
		</Flex>
	);
};

export default MeComponent;
