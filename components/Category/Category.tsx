import { useSelector } from "react-redux";
import { TAppState, TArticle, TCategory } from "../../store";
import { useRouter } from "next/router";
import { Box, Container, VStack, Flex, WrapItem, Text } from "@chakra-ui/react";
import { Nav, Footer } from "..";
import { Article } from "./Article";
import { IndexArticle } from "./IndexArticle";

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
      <Container maxW="container.xl" paddingBottom={12}>
        <Nav />
        {articles && articles?.length > 0 && (
          <IndexArticle {...(articles as TArticle[])[0]} />
        )}
        <Flex mt={8} gap={7} wrap="wrap">
          {renderArticles()}
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};
