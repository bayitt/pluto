import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  getArticles,
  getCategoryArticles,
  TAppAction,
  TAppState,
} from "../../store";
import { Box, Container, Button, Flex } from "@chakra-ui/react";
import { Article } from "./Article";
import { IndexArticle } from "./IndexArticle";
import { Nav, Meta } from "..";

export const Category = () => {
  const { articles, pagination, loading } = useSelector<TAppState, TAppState>(
    (state) => state
  );
  const dispatch: Dispatch<TAppAction> = useDispatch();
  const router = useRouter();
  const isCategoryPage = router.asPath.includes("/category/");

  const renderArticles = () =>
    articles
      ?.slice(1)
      .map((article, index) => <Article key={index} {...article} />);

  const getMoreArticles = () => {
    isCategoryPage
      ? getCategoryArticles(dispatch, {
          category_slug: router?.query?.category_slug as string,
          page: (pagination?.currentPage as number) + 1,
          count: 10,
        })
      : getArticles(dispatch, {
          page: (pagination?.currentPage as number) + 1,
          count: 10,
        });
  };

  return (
    <Box>
      <Meta />
      <Nav />
      <Container
        maxW="container.xl"
        paddingBottom={
          pagination && pagination?.currentPage < pagination?.lastPage ? 12 : 16
        }
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
              onClick={getMoreArticles}
            >
              More Articles
            </Button>
          </Flex>
        )}
      </Container>
    </Box>
  );
};
