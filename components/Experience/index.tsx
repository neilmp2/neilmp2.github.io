import { Heading, Text, Flex, Box, VStack, Divider } from "@chakra-ui/react";

const Experience = () => {
  return (
    <Box id="experience" padding={0}>
      <Flex py="2rem" bg="green.50">
        <VStack w="full" h={"full"} p={10} spacing={4}>
          <Heading as="h2" size="2xl">
            Work Experience
          </Heading>
          <Heading as="h4" size="md">
            Software Engineering Intern | Optum - UnitedHealthGroup
          </Heading>
          <Heading as="h5" size="sm">
            June 2021 - August 2021 and June 2022 - Current
          </Heading>
          <Text fontSize="lg">
            Worked in a team of interns to develop a functioning prototype of a new code sharing platform for Optum developers. We built off of a
            foundation our mentors had started and pitched the platform to buisness executives, including the Chief Innovation Officer. The website
            was built entirely in ReactJS with an Azure Cosmo backend. I was in charge of a page allowing logged-in users to mark the shared software
            they had downloaded and keep track of versions.
          </Text>
          <br />
          <Heading as="h4" size="md">
            Software Engineering Intern | United States Geological Survey
          </Heading>
          <Heading as="h5" size="sm">
            October 2020 - January 2021
          </Heading>
          <Text fontSize="lg">
            A contractor position where I taught myself machine learning principles and applied them to a machine vision project. My partner and I
            developed a program that identified the type, transit time and direction of ships passing through a outlet in Lake Michigan. We customized
            a neural network from Keras to perform the identification. Thissparked my interest in developing software to solve problems, and led me to
            add computer science to my education.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Experience;
