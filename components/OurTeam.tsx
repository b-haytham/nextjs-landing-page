import { Avatar, Box, Flex, Text, Heading } from "@chakra-ui/react";
import { PoepleType } from "../pages/about";

interface OurTeamProps {
	isLoading: boolean;
	peoples: PoepleType[] | null;
	greaterThan764: boolean;
}

const OurTeam: React.FC<OurTeamProps> = ({
	isLoading,
	peoples,
	greaterThan764,
}) => {
	console.log(peoples);
	return (
		<Box>
			<Heading marginY={10} textAlign="center">
				Our Team
			</Heading>
			<Flex
				justifyContent="space-between"
				alignItems="center"
				padding="20px 50px"
				marginY={50}
				wrap="wrap"
			>
				{peoples &&
					peoples.map((p, indx) => (
						<Flex
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
						>
							<Avatar
								src={p.picture.medium}
								margin={10}
								size={greaterThan764 ? "2xl" : "xl"}
							/>
							<Text>
								<strong>{p.name.title}</strong>
								{` ${p.name.first} ${p.name.last}`}
							</Text>
						</Flex>
					))}
			</Flex>
		</Box>
	);
};

export default OurTeam;
