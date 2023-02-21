import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Flex, Box, Text, Link, Button, Container } from "@chakra-ui/react";
import NextLink from "next/link";
import { Sidebar } from "..";
import { TAppState } from "../../store";

export const Nav = () => {
  const { categories } = useSelector<TAppState, TAppState>((state) => state);
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();

  const renderCategories = () =>
    categories?.map(({ name, slug }, index) => (
      <NextLink key={index} href={slug} passHref>
        <Link
          href={slug}
          fontWeight={router.asPath === slug ? 600 : 400}
          color={router.asPath === slug ? "whaleBlue" : "black"}
          _hover={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          {name}
        </Link>
      </NextLink>
    ));

  return (
    <Box color="black" py={7} px={{ base: 7, sm: 10, lg: 0 }}>
      <Container
        maxWidth="container.xl"
        display={{ base: "none", lg: "flex" }}
        justifyContent="space-between"
        px={0}
      >
        <Text size="sm">OLAMILEKE</Text>
        <Flex gap={4} fontSize="md">
          {renderCategories()}
        </Flex>
        <Button>Subscribe</Button>
      </Container>
      <Container
        maxWidth="container.xl"
        display={{ base: "flex", lg: "none" }}
        justifyContent="space-between"
        px={0}
      >
        <Text size="sm">OLAMILEKE</Text>
        <Sidebar open={showSidebar} handleOpen={setShowSidebar} />
      </Container>
    </Box>
  );
};
