import { Heading, Text, Flex, Box, VStack, Divider } from "@chakra-ui/react";

const Experience = () => {
  return (
    <Box id="experience" padding={0}>
      <Flex h="70vh">
        <VStack w="full" h={"full"} p={10} spacing={4} bg="green.50">
          <Heading as="h2" size="2xl">
            Work Experience
          </Heading>
          <Heading as="h4" size="md">
            Software Engineering Intern | Optum - UnitedHealthGroup
          </Heading>
          <Heading as="h5" size="sm">
            June 2021 - August 2021
          </Heading>
          <Text fontSize="lg">
            Write a short blurb about my reponsibilities and project. Include skills learned and general interest in tech/swe and healthcare
          </Text>
          <Heading as="h4" size="md">
            Software Engineering Intern | United States Geological Survey
          </Heading>
          <Heading as="h5" size="sm">
            October 2020 - January 2021
          </Heading>
          <Text fontSize="lg">
            Write a short blurb about my reponsibilities and project. Include skills learned and general interest in tech/swe and healthcare
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Experience;
