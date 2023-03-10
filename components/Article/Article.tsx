import { useSelector } from "react-redux";
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
import { Nav, Meta, RelatedArticle } from "..";
import { Share } from "./Share";
import { TAppState, TArticle, TCategory } from "../../store";
import { parseTimestampString } from "../../utilities";

export const Article = () => {
  const { categories, articles } = useSelector<TAppState, TAppState>(
    (state) => state
  );
  const article = articles?.[0] as TArticle;
  const category = categories?.find(
    (category) => category?.uuid === article?.category?.uuid
  ) as TCategory;

  const renderTags = () =>
    article?.tags?.map(({ name }, index) => (
      <Text key={index}>#{name.toLowerCase()}</Text>
    ));

  const renderRelatedArticles = () =>
    article?.related_articles?.map((article, index) => (
      <GridItem key={index}>
        <RelatedArticle {...article} />
      </GridItem>
    ));

  return (
    <Box pb={12}>
      <Meta />
      <Box bg="rgba(224, 225, 221, 0.4)" position="relative" pb={32}>
        <Nav />
        <VStack mt={7} mb={9} spacing={5} alignItems="center">
          <Badge bg={category?.color} p={1}>
            {category?.name}
          </Badge>
          <Text
            fontSize="2xl"
            textAlign="center"
            fontWeight="bold"
            width={{ base: "80%", md: "50%" }}
          >
            {article?.title}
          </Text>
          <HStack>{renderTags()}</HStack>
          <Text>
            Fambegbe Olamileke.{" "}
            {parseTimestampString(article?.created_at ?? "")}
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
          src={article?.featured_image}
          height={{ base: "30vh", md: "36vh", lg: "60vh" }}
          objectFit="cover"
          width="100%"
          borderRadius="4px"
        />
        <Box
          mt={5}
          dangerouslySetInnerHTML={{
            __html: article?.content as string,
          }}
          sx={{
            p: {
              margin: "15px 0",
            },
            a: {
              color: "blue.500",
            },
            img: {
              position: "relative",
              left: "10%",
              width: "80% !important",
              height: { base: "300px !important", md: "400px !important" },
              objectFit: "cover",
              margin: "20px 0px",
              borderRadius: "4px",
            },
          }}
        />
        <Share />
        {article?.related_articles && article?.related_articles?.length > 0 && (
          <Box mt={{ base: 5, md: 0 }}>
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
