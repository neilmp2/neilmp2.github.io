import { Tabs, TabList, TabPanels, Tab, TabPanel, Container, Flex, VStack, Box, Heading, Divider, Link, Tag, TagLabel } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box id="projects">
      <Flex h="50vh">
        <VStack w="full" h={"full"} p={10} spacing={4} bg="blue.50">
          <Heading as="h2" size="2xl">
            Projects
          </Heading>
          <Tabs size="lg" align="center">
            <TabList>
              <Tab>Malloc Implementation (C)</Tab>
              <Tab>Spotify Vis Dashboard (SQL, Databases, React)</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Link href="https://github.com/neilmp2/mp_malloc" isExternal>
                  Github Repository Link
                </Link>
                <br></br>
                <br></br>
                <p>
                  My favorite programming assignment! Originally assigned in Systems Programming, it involves implementing memory allocation in C. It
                  was a challenging, yet fun experience in lower-level programming. The code itself is simple, involving only a doubly linked list, so
                  the challenge was about managing the list correctly and efficiently. The ReadMe file in the repository gives an overview of the
                  major functions and what they do.
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  A group project CS411: Database Systems, where I was in charge of the frontend and most of the backend! I made a simple website in
                  React using MaterialUI that would serve as a user interface to a MySQL database on my computer. We originally were using a database
                  on Google Cloud Platform, but then we ran out of credits!
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Projects;
