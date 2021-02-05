import { Avatar, Box, Flex, Text, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { PoepleType } from "../pages/about";
import useGreaterThan from "../utils/useGreaterThan";
import AnimatedListItem from "./Animated/AnimatedListItem";

interface OurTeamProps {
  isLoading: boolean;
  peoples: PoepleType[] | null;
}

const OurTeam: React.FC<OurTeamProps> = ({ isLoading, peoples }) => {
  const { theme } = useContext(ThemeContext);

  const isGreaterThan = useGreaterThan(764);

  return (
    <Box>
      <Heading
        marginY={10}
        textAlign="center"
        color={theme === "DARK" && "#d1d1d1"}
      >
        Our Team
      </Heading>
      <AnimatedListItem indx={1}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          padding="80px 50px 100px"
          wrap="wrap"
        >
          {peoples &&
            peoples.map((p, indx) => (
              <Flex
                key={indx}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Avatar
                  src={p.picture.medium}
                  margin={10}
                  size={isGreaterThan ? "2xl" : "xl"}
                />
                <Text color={theme === "DARK" && "#757573"}>
                  <strong>{p.name.title}</strong>
                  {` ${p.name.first} ${p.name.last}`}
                </Text>
              </Flex>
            ))}
        </Flex>
      </AnimatedListItem>
    </Box>
  );
};

export default OurTeam;
