import { useSelector } from "react-redux";
import { Flex, Image, VStack, HStack, Text, Badge } from "@chakra-ui/react";
import { TArticle, TAppState, TCategory } from "../../../store";
import { parseTimestampString } from "../../../utilities";

export const IndexArticle = () => {
  const { categories, articles } = useSelector<TAppState, TAppState>(
    (state) => state
  );
  const category = categories?.find(
    (category) => category?.uuid === article?.category?.uuid
  ) as TCategory;
  const article = articles?.[0] as TArticle;

  const renderTags = () =>
    article?.tags?.map(({ name }, index) => (
      <Text key={index}>#{name.toLowerCase()}</Text>
    ));

  return (
    <Flex gap={10} mt={5}>
      <Image
        src={article?.featured_image}
        height="320px"
        objectFit="cover"
        width="50%"
        borderRadius="4px"
      />
      <VStack alignItems="flex-start" spacing={4}>
        <Badge bg={category?.color} p={1}>
          {category?.name}
        </Badge>
        <Text fontSize="2xl" fontWeight="bold">
          {article?.title}
        </Text>
        <Text>{article?.excerpt}</Text>
        <HStack>{renderTags()}</HStack>
        <Text>{parseTimestampString(article?.created_at)}</Text>
      </VStack>
    </Flex>
  );
};
