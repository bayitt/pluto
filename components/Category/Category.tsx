import { useSelector } from "react-redux";
import { TAppState, TArticle, TCategory } from "../../store";
import { useRouter } from "next/router";
import { Box, Container, VStack, Flex, WrapItem, Text } from "@chakra-ui/react";
import { Article } from "./Article";
import { IndexArticle } from "./IndexArticle";
import { Nav } from "..";

export const Category = () => {
  const { categories, articles } = useSelector<TAppState, TAppState>(
    (state) => state
  );

  const router = useRouter();
  const category = categories?.find(
    (category) => category?.slug === router.asPath
  ) as TCategory;

  const renderArticles = () =>
    articles
      ?.slice(1)
      .map((article, index) => <Article key={index} {...article} />);

  return (
    <Box>
      <Nav />
      <Container
        maxW="container.xl"
        paddingBottom={12}
        px={{ base: 7, sm: 10, lg: 0 }}
      >
        {articles && articles?.length > 0 && <IndexArticle />}
        <Flex mt={{ base: 6, md: 8 }} gap={{ base: 5, md: 7 }} wrap="wrap">
          {renderArticles()}
        </Flex>
      </Container>
    </Box>
  );
};
