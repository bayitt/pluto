"use client";

import { FC, useEffect } from "react";
import {
  Box,
  VStack,
  HStack,
  Badge,
  Text,
  Image,
  Container,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import { Nav } from "../Nav";
import Router from "next/router";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import php from "highlight.js/lib/languages/php";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import { RelatedArticle } from "../RelatedArticle";
import { Share } from "./Share";
import { parseTimestampString } from "../../utilities";
import { ArticleContentProps } from "./types";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("php", php);

export const ArticleContent: FC<ArticleContentProps> = ({
  title,
  content,
  slug,
  featured_image,
  tags,
  related_articles,
  category,
  created_at,
  categories,
}) => {
  useEffect(() => {
    hljs.highlightAll();

    Router.events.on("routeChangeComplete", () => {
      hljs.highlightAll();
    });
  }, []);

  const renderTags = () =>
    tags.map(({ name }, index) => (
      <Text key={index}>#{name.toLowerCase()}</Text>
    ));

  const renderRelatedArticles = () =>
    related_articles?.map((article, index) => (
      <GridItem key={index}>
        <RelatedArticle {...article} />
      </GridItem>
    ));

  return (
    <Box pb={12}>
      <Box bg="rgba(224, 225, 221, 0.4)" position="relative" pb={32}>
        <Nav categories={categories} />
        <VStack mt={7} mb={9} spacing={5} alignItems="center">
          <Badge bg={category?.color} p={1}>
            {category?.name}
          </Badge>
          <Text
            fontSize={{ base: "xl", sm: "2xl" }}
            textAlign="center"
            fontWeight="bold"
            width={{ base: "90%", sm: "80%", md: "50%" }}
          >
            {title}
          </Text>
          <HStack>{renderTags()}</HStack>
          <Text>
            Fambegbe Olamileke. {parseTimestampString(created_at ?? "")}
          </Text>
        </VStack>
      </Box>
      <Container
        maxWidth="container.lg"
        px={{ base: 7, sm: 10, lg: 0 }}
        position="relative"
        top="-108px"
        marginBottom="-108px"
        lineHeight="taller"
      >
        <Image
          src={featured_image}
          height={{ base: "30vh", md: "36vh", lg: "60vh" }}
          objectFit="cover"
          width="100%"
          borderRadius="4px"
        />
        <Box
          mt={5}
          dangerouslySetInnerHTML={{
            __html: content as string,
          }}
          sx={{
            "@media(max-width: 1024px)": {
              p: {
                margin: "10px 0 !important",
              },
            },
            "@media(max-width: 768px)": {
              img: {
                left: "0 !important",
                width: "100% !important",
              },
            },
            h3: {
              fontSize: "20px",
            },
            p: {
              margin: "12px 0",
            },
            "h3 + p": {
              marginTop: "0px !important",
            },
            br: {
              display: "none",
            },
            a: {
              color: "blue.600",
              textDecoration: "underline",
            },
            pre: {
              display: "flex",
              fontFamily: "Work Sans, sans-serif",
              lineHeight: 1.75,
            },
            "pre code.hljs": {
              padding: "0 1em !important",
              width: "100%",
            },
            img: {
              position: "relative",
              left: "25%",
              width: "50%",
              margin: "20px 0px",
              borderRadius: "4px",
            },
          }}
        />
        <Share title={title} slug={slug} />
        {related_articles && related_articles?.length > 0 && (
          <Box mt={5} mb={{ base: 2, lg: 5 }}>
            <Text
              mb={5}
              fontWeight={{ base: "normal", md: "bold" }}
              textAlign={{ base: "center", md: "left" }}
            >
              More from {category?.name}
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
              {renderRelatedArticles()}
            </SimpleGrid>
          </Box>
        )}
      </Container>
    </Box>
  );
};
