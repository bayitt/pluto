"use client";

import { FC, useState, useEffect } from "react";
import Router from "next/router";
import {
  Flex,
  Box,
  Text,
  Button,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Sidebar } from "../Sidebar";
import { NavProps } from "./types";

export const Nav: FC<NavProps> = ({ categories }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.screen.width <= 1024 && setShowSidebar(false);
    });
  }, []);

  const renderCategories = () =>
    [...categories].map(({ name, slug, is_active }, index) => (
      <Link
        key={index}
        href={slug}
        fontWeight={is_active ? 600 : 400}
        color={is_active ? "whaleBlue" : "black"}
        _hover={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        {name}
      </Link>
    ));

  return (
    <Box
      color="black"
      pt={7}
      pb={{ base: 6, lg: 4 }}
      px={{ base: 7, sm: 10, lg: 0 }}
    >
      <Container
        maxWidth="container.xl"
        display={{ base: "none", lg: "flex" }}
        justifyContent="space-between"
        alignItems="center"
        px={0}
      >
        <Link
          href="/"
          _hover={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Text color="whaleBlue" fontWeight={600}>
            olamileke.dev
          </Text>
        </Link>
        <Flex gap={4}>{renderCategories()}</Flex>
        <Button fontSize="14.5px" onClick={onOpen}>
          Subscribe
        </Button>
      </Container>
      <Container
        maxWidth="container.xl"
        display={{ base: "flex", lg: "none" }}
        justifyContent="space-between"
        alignItems="center"
        px={0}
      >
        <Link
          href="/"
          _hover={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Text
            color="whaleBlue"
            position="relative"
            top="3px"
            fontSize="lg"
            fontWeight={600}
          >
            olamileke.dev
          </Text>
        </Link>
        <Box
          position="relative"
          zIndex={15}
          cursor="pointer"
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
          sx={{
            span: {
              width: "100%",
              transform: "rotate(180deg)",
            },
            "span, span::after, span::before": {
              position: "absolute",
              display: "block",
              height: "2px",
              width: "17px",
              left: "-17px",
              background: "whaleBlue",
            },
            "span::after, span::before": {
              top: "-8px",
              left: 0,
              width: "125%",
              content: '""',
              background: "whaleBlue",
            },
            "span::before": {
              top: "8px",
              width: "125%",
            },
          }}
        >
          <Text
            as="span"
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
          />
        </Box>
        <Sidebar
          open={showSidebar}
          handleOpen={setShowSidebar}
          categories={categories}
        />
        {/* <Subscribe isOpen={isOpen} onClose={onClose} /> */}
      </Container>
    </Box>
  );
};
