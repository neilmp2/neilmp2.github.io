import { Heading, Text, Flex, Box, Image, VStack, Divider, Avatar, Tag, TagLabel, Icon, HStack } from "@chakra-ui/react";
import { BiCodeBlock, BiCodeCurly } from "react-icons/bi";
import { AiFillFire, AiFillDatabase } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { IoMdLeaf } from "react-icons/io";

const AboutMe = () => {
  return (
    <Box id="aboutme">
      <Flex>
        <VStack w="full" h={"full"} p={20} spacing={4} bg="purple.50">
          <Heading as="h2" size="2xl">
            Hi! I'm Neil ~
          </Heading>
          <Text>University of Illinois at Urbana-Champaign</Text>
          <Text>B.S Agricultural and Biological Engineering | Minor of Computer Science | Dec 2022</Text>
          <Text w={{ base: '100%', md: '75%' }}>
            A year into my degree, I decided to explore the computational specialization, where I discovered that I enjoyed programming and design. I
            self-taught myself basic machine vision during an internship with the USGS, which catalyzed my journey into software development. I'm now
            finishing up my education, interning and looking for future opportunities.{" "}
          </Text>
          <Heading as="h3" size="lg">
            Current Coursework & Projects
          </Heading>
          <Flex flexDir={{ base: 'column', md: 'row' }}>
            <Tag size="lg" colorScheme="green" borderRadius="full" m="0.5rem">
              <Icon as={IoMdLeaf}></Icon>
              <TagLabel>Bioinformatics</TagLabel>
            </Tag>
            <Tag size="lg" colorScheme="green" borderRadius="full" m="0.5rem">
              <Icon as={BiCodeBlock}></Icon>
              <TagLabel>Data Science for ABE</TagLabel>
            </Tag>
            <Tag size="lg" colorScheme="orange" borderRadius="full" m="0.5rem">
              <Icon as={AiFillFire}></Icon>
              <TagLabel>Heat and Transport Processes</TagLabel>
            </Tag>
          </Flex>
          <Heading as="h3" size="lg">
            Past Coursework
          </Heading>
          <Flex flexDir={{ base: 'column', md: 'row' }}>
            <Tag size="lg" colorScheme="blue" borderRadius="full" m="0.5rem">
              <Icon as={BiCodeCurly}></Icon>
              <TagLabel>Data Structures</TagLabel>
            </Tag>
            <Tag size="lg" colorScheme="teal" borderRadius="full" m="0.5rem">
              <Icon as={MdComputer}></Icon>
              <TagLabel>Systems Programming</TagLabel>
            </Tag>
            <Tag size="lg" colorScheme="green" borderRadius="full" m="0.5rem">
              <Icon as={AiFillDatabase}></Icon>
              <TagLabel>Database Systems</TagLabel>
            </Tag>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default AboutMe;
