import { useSelector } from "react-redux";
import { TAppState, TCategory } from "../../store";
import { useRouter } from "next/router";
import { Box, Container, Button, Flex } from "@chakra-ui/react";
import { Article } from "./Article";
import { IndexArticle } from "./IndexArticle";
import { Nav, Meta } from "..";

export const Category = () => {
  const { articles, pagination, loading } = useSelector<TAppState, TAppState>(
    (state) => state
  );

  const renderArticles = () =>
    articles
      ?.slice(1)
      .map((article, index) => <Article key={index} {...article} />);

  return (
    <Box>
      <Meta />
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
        {pagination && pagination?.currentPage < pagination?.lastPage && (
          <Flex justify="center" mt={10} mb={2}>
            <Button
              variant="secondary"
              loadingText="More Articles"
              isLoading={loading}
              spinnerPlacement="end"
            >
              More Articles
            </Button>
          </Flex>
        )}
      </Container>
    </Box>
  );
};
