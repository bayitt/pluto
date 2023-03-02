import { useSelector } from "react-redux";
import NextLink from "next/link";
import {
  Box,
  Image,
  VStack,
  HStack,
  Text,
  Badge,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { TArticle, TAppState, TCategory } from "../../../store";
import { parseTimestampString } from "../../../utilities";

export const IndexArticle = () => {
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

  return (
    <LinkBox
      display="flex"
      gap={{ base: 6, md: 10 }}
      mt={5}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Image
        src={article?.featured_image}
        height="320px"
        objectFit="cover"
        width={{ base: "100%", md: "50%" }}
        borderRadius="4px"
      />
      <VStack alignItems="flex-start" spacing={{ base: 2, md: 4 }}>
        <Badge bg={category?.color} p={1}>
          {category?.name}
        </Badge>
        <NextLink
          href={
            article.slug.startsWith("/") ? article.slug : "/" + article.slug
          }
          passHref
        >
          <LinkOverlay>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
              {article?.title}
            </Text>
          </LinkOverlay>
        </NextLink>
        <Box
          fontSize={{ base: "15px", md: "md" }}
          dangerouslySetInnerHTML={{ __html: article?.excerpt ?? "" }}
        />
        <HStack fontSize={{ base: "15px", md: "md" }}>{renderTags()}</HStack>
        <Text fontSize={{ base: "15px", md: "md" }}>
          {parseTimestampString(article?.created_at)}
        </Text>
      </VStack>
    </LinkBox>
  );
};
