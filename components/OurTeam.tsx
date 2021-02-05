import { Avatar, Box, Flex, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import { useCallback, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { PoepleType } from "../pages/about";
import useGreaterThan from "../utils/useGreaterThan";
import AnimatedListItem from "./Animated/AnimatedListItem";

interface OurTeamProps {
  isLoading: boolean;
  peoples: PoepleType[] | null;
}

const gridColumn = (
  greaterThan455: boolean,
  greaterThan630: boolean,
  greaterThan1000: boolean,
  greaterThan1150: boolean
) => {
  if (greaterThan1000 && !greaterThan1150) {
    return 4;
  } else if (greaterThan630 && !greaterThan1000) {
    return 3;
  } else if (greaterThan455 && !greaterThan630) {
    return 2;
  } else if (!greaterThan455) {
    return 1;
  } else {
    return 5;
  }
};

const OurTeam: React.FC<OurTeamProps> = ({ isLoading, peoples }) => {
  const { theme } = useContext(ThemeContext);

  const isGreaterThan455 = useGreaterThan(455); // 2
  const isGreaterThan630 = useGreaterThan(630); //3
  const isGreaterThan764 = useGreaterThan(764);
  const isGreaterThan1000 = useGreaterThan(1000); //4
  const isGreaterThan1150 = useGreaterThan(1150); //5

  const getGridColumnNumber = useCallback(
    (
      Than455: boolean,
      than630: boolean,
      than1000: boolean,
      than1150: boolean
    ) => {
      return gridColumn(Than455, than630, than1000, than1150);
    },
    [isGreaterThan455, isGreaterThan630, isGreaterThan1000, isGreaterThan1150]
  );

  return (
    <Box>
      <Heading
        marginY={10}
        textAlign="center"
        color={theme === "DARK" && "#d1d1d1"}
      >
        Our Team
      </Heading>
      {/* <Flex
        justifyContent={isGreaterThan764 ? "space-between" : "space-around"}
        alignItems="center"
        padding="80px 50px 100px"
        wrap="wrap"
      > */}
      <SimpleGrid
        columns={getGridColumnNumber(
          isGreaterThan455,
          isGreaterThan630,
          isGreaterThan1000,
          isGreaterThan1150
        )}
        pb={100}
      >
        {peoples &&
          peoples.map((p, indx) => (
            <AnimatedListItem
              minHeightPlaceholder={isGreaterThan764 ? 232 : 200}
              indx={indx / 5}
            >
              <Flex
                key={indx}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Avatar
                  src={p.picture.medium}
                  margin={10}
                  size={isGreaterThan764 ? "2xl" : "xl"}
                />
                <Text color={theme === "DARK" && "#757573"}>
                  <strong>{p.name.title}</strong>
                  {` ${p.name.first} ${p.name.last}`}
                </Text>
              </Flex>
            </AnimatedListItem>
          ))}
      </SimpleGrid>
      {/* </Flex> */}
    </Box>
  );
};

export default OurTeam;
