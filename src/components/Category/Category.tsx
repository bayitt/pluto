"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { Box, Container, Button, Flex } from "@chakra-ui/react";
import { Article } from "../Article";
import { IndexArticle } from "../IndexArticle";
import { CategoryProps } from "./types";

export const Category: FC<CategoryProps> = ({ articles }) => {
  const pathname = usePathname();
  const isCategoryPage = pathname.includes("/category/");

  const renderArticles = () =>
    articles
      ?.slice(1)
      .map((article, index) => <Article key={index} {...article} />);

  return (
    <Box>
      <Container
        maxW="container.xl"
        paddingBottom={12}
        px={{ base: 7, sm: 10, lg: 0 }}
      >
        {articles && articles?.length > 0 && <IndexArticle />}
        <Flex mt={{ base: 6, md: 8 }} gap={{ base: 5, md: 7 }} wrap="wrap">
          {renderArticles()}
        </Flex>
        {/* {pagination && pagination?.currentPage < pagination?.lastPage && (
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
        )} */}
      </Container>
    </Box>
  );
};
