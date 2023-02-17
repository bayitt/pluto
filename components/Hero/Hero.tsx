import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Box, Container, VStack, Flex, Text } from "@chakra-ui/react";
import { TAppState, TArticle, TCategory } from "../../store";
import { Nav } from "..";
import { IndexArticle } from "./IndexArticle";

export const Hero = () => {
  const { categories, articles: allArticles } = useSelector<
    TAppState,
    TAppState
  >((state) => state);

  const router = useRouter();
  const category = categories?.find(
    (category) => category?.slug === router.asPath
  ) as TCategory;
  const articles = allArticles?.slice(0, 3) as TArticle[];

  return (
    <Box h="100vh">
      <Container maxW="container.xl">
        <Nav />
        <IndexArticle {...(articles[0] as TArticle)} />
      </Container>
    </Box>
  );
};
