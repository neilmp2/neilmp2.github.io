import { Box, Flex, Text, IconButton, Button, Stack, useColorModeValue, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";

export default function Nav() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="fixed" w="100%">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"40px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}>
        <Flex display={{ base: "none", md: "flex" }}>
          <DesktopNav />
        </Flex>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <Flex display={{ base: "none", md: "flex" }} ml={10}>
        <Stack direction={"row"} spacing={4}>
          <Link activeClass="active" to="aboutme" spy={true} smooth={true} duration={1000}>
            <Text cursor="pointer" _hover={{ color: "blue" }}>
              About Me
            </Text>
          </Link>
          <Link activeClass="active" to="experience" spy={true} smooth={true} duration={1000}>
            <Text cursor="pointer" _hover={{ color: "blue" }}>
              Experience
            </Text>
          </Link>
          <Link activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>
            <Text cursor="pointer" _hover={{ color: "blue" }}>
              Projects
            </Text>
          </Link>
        </Stack>
      </Flex>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [];
