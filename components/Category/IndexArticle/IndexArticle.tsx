import { useSelector } from "react-redux";
import { Flex, Image, VStack, HStack, Text, Badge } from "@chakra-ui/react";
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
    <Flex
      gap={{ base: 6, md: 10 }}
      mt={5}
      direction={{ base: "column", md: "row" }}
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
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
          {article?.title}
        </Text>
        <Text fontSize={{ base: "15px", md: "md" }}>{article?.excerpt}</Text>
        <HStack fontSize={{ base: "15px", md: "md" }}>{renderTags()}</HStack>
        <Text fontSize={{ base: "15px", md: "md" }}>
          {parseTimestampString(article?.created_at)}
        </Text>
      </VStack>
    </Flex>
  );
};
