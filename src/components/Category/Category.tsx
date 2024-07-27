"use client";

import { FC, useState } from "react";
import { useParams } from "next/navigation";
import { Box, Container, Button, Flex } from "@chakra-ui/react";
import { Article } from "../Article";
import { IndexArticle } from "../IndexArticle";
import { CategoryProps } from "./types";
import { fetchMoreArticles } from "./api";

export const Category: FC<CategoryProps> = ({
  articles: initialArticles,
  pagination: initialPagination,
}) => {
  const { slug } = useParams<{ slug?: string }>();
  const [articles, setArticles] = useState(initialArticles);
  const [pagination, setPagination] = useState(initialPagination);
  const [loading, setLoading] = useState(false);

  const renderArticles = () =>
    articles
      .slice(1)
      .map((article, index) => <Article key={index} {...article} />);

  const handleLoadMoreArticles = async () => {
    setLoading(true);
    const response = await fetchMoreArticles({
      page: pagination.currentPage + 1,
      slug,
    });

    if (response) {
      const { articles: fetchedArticles, pagination } = response;
      setArticles([...articles, ...fetchedArticles]);
      setPagination(pagination);
    }

    setLoading(false);
  };

  return (
    <Box>
      <Container
        maxW="container.xl"
        paddingBottom={12}
        px={{ base: 7, sm: 10, lg: 0 }}
      >
        {articles && articles.length > 0 && <IndexArticle {...articles[0]} />}
        <Flex mt={{ base: 6, md: 8 }} gap={{ base: 5, md: 7 }} wrap="wrap">
          {renderArticles()}
        </Flex>
        {pagination.currentPage < pagination.lastPage && (
          <Flex justify="center" mt={10} mb={2}>
            <Button
              variant="secondary"
              loadingText="More Articles"
              isLoading={loading}
              spinnerPlacement="end"
              onClick={handleLoadMoreArticles}
            >
              More Articles
            </Button>
          </Flex>
        )}
      </Container>
    </Box>
  );
};
