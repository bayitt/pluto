import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import {
  Flex,
  Box,
  Text,
  Link,
  Button,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Sidebar, Subscribe } from "..";
import { TAppState, TArticle } from "../../store";

export const Nav = () => {
  const { categories, articles } = useSelector<TAppState, TAppState>(
    (state) => state
  );
  const [showSidebar, setShowSidebar] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.screen.width <= 1024 && setShowSidebar(false);
    });
  }, []);

  const router = useRouter();
  const isCategoryPage =
    router.asPath === "/" || router.asPath.includes("/category/");
  const article = articles?.[0] as TArticle;

  const renderCategories = () =>
    categories?.map(({ name, slug, uuid }, index) => (
      <NextLink key={index} href={slug} passHref>
        <Link
          href={slug}
          fontWeight={
            isCategoryPage
              ? router.asPath === slug
                ? 600
                : 400
              : article?.category?.uuid === uuid
              ? 600
              : 400
          }
          color={
            isCategoryPage
              ? router.asPath === slug
                ? "whaleBlue"
                : "black"
              : article?.category?.uuid === uuid
              ? "whaleBlue"
              : "black"
          }
          _hover={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          {name}
        </Link>
      </NextLink>
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
        <NextLink href="/" passHref>
          <Link
            _hover={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
          >
            <Text color="whaleBlue" fontWeight={600}>
              olamileke.dev
            </Text>
          </Link>
        </NextLink>
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
        <NextLink href="/" passHref>
          <Link
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
        </NextLink>
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
        <Sidebar open={showSidebar} handleOpen={setShowSidebar} />
        <Subscribe isOpen={isOpen} onClose={onClose} />
      </Container>
    </Box>
  );
};
