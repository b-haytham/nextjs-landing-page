import { Flex, Text } from "@chakra-ui/react";
import React from "react";

import { MdMail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import AnimatedContactIcons from "./Animated/AnimatedContactIcons";

interface ContactWaysProps {}

const ContactWays: React.FC<ContactWaysProps> = () => {
  return (
    <Flex
      padding="30px"
      justifyContent="space-between"
      alignItems="center"
      wrap="wrap"
    >
      <AnimatedContactIcons indx={0}>
        <Flex
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
        >
          <TiLocation fontSize="3rem" />
          <Text fontWeight="bolder">Location</Text>
        </Flex>
      </AnimatedContactIcons>
      <AnimatedContactIcons indx={0.8}>
        <Flex
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
    </Flex>
  );
};

export default ContactWays;
