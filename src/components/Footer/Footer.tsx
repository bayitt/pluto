"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, HStack, Container, Text } from "@chakra-ui/react";
import { HiMail } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <Box
      py={{ base: 12, sm: 20 }}
      px={{ base: 10, lg: 0 }}
      bg="whaleBlue"
      color="white"
      position="relative"
      bottom={0}
      width="100%"
    >
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
        flexDirection={{ base: "column", sm: "row" }}
        px={0}
      >
        <Text
          mb={{ base: 5, sm: 0 }}
          textAlign={{ base: "center", sm: "left" }}
        >
          olamileke.dev &copy; {new Date().getFullYear()}
        </Text>

        <HStack
          spacing={6}
          justifyContent={{ base: "center", sm: "flex-start" }}
        >
          <Link
            href="mailto:olamileke.f@gmail.com"
            target="_top"
            fontSize="2xl"
            _hover={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
          >
            <HiMail />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/olamileke"
            fontSize="2xl"
            _hover={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
          >
            <AiFillGithub />
          </Link>
          <Link
            target="_blank"
            href="https://twitter.com/f_olamileke"
            fontSize="xl"
            _hover={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
          >
            <BsTwitter />
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/in/fambegbe-olamileke-4a9731145"
            fontSize="2xl"
            _hover={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
          >
            <AiFillLinkedin />
          </Link>
        </HStack>
      </Container>
    </Box>
  );
};
