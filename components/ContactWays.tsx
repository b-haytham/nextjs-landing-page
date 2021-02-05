import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useContext } from "react";

import { MdMail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import AnimatedContactIcons from "./Animated/AnimatedContactIcons";
import useGreaterThan from "../utils/useGreaterThan";
import { ThemeContext } from "../context/ThemeContext";

interface ContactWaysProps {}

const ContactWays: React.FC<ContactWaysProps> = () => {
  const isGreaterThan = useGreaterThan(764);
  const { theme } = useContext(ThemeContext)

  return (
    <SimpleGrid columns={isGreaterThan ? 4 : 2}>
      <AnimatedContactIcons indx={0}>
        <Flex
          color={theme === 'DARK' && '#505c75'}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          margin={5}
          className="contact-ways-icon"
        >
          <FaAddressCard fontSize="3rem" />
          <Text fontWeight="bolder">Address</Text>
        </Flex>
      </AnimatedContactIcons>
      <AnimatedContactIcons indx={0.3}>
        <Flex
          color={theme === 'DARK' && '#505c75'}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          margin={5}
          className="contact-ways-icon"
        >
          <FaPhone fontSize="2.7rem" />
          <Text fontWeight="bolder">Phone number</Text>
        </Flex>
      </AnimatedContactIcons>
      <AnimatedContactIcons indx={0.6}>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          margin={5}
          className="contact-ways-icon"
          color={theme === 'DARK' && '#505c75'}
        >
          <TiLocation fontSize="3rem" />
          <Text fontWeight="bolder">Location</Text>
        </Flex>
      </AnimatedContactIcons>
      <AnimatedContactIcons indx={0.8}>
        <Flex
          color={theme === 'DARK' && '#505c75'}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          margin={5}
          className="contact-ways-icon"
        >
          <MdMail fontSize="3rem" />
          <Text fontWeight="bolder">Email address</Text>
        </Flex>
      </AnimatedContactIcons>
    </SimpleGrid>
  );
};

export default ContactWays;
