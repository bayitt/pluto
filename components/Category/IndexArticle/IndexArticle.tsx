import { FC } from "react";
import { useSelector } from "react-redux";
import {
  Flex,
  Image,
  VStack,
  HStack,
  Text,
  Badge,
  Heading,
} from "@chakra-ui/react";
import { TArticle, TAppState, TCategory } from "../../../store";
import { parseTimestampString } from "../../../utilities";

export const IndexArticle: FC<TArticle> = ({
  title,
  category: { uuid: categoryUuid },
  featured_image,
  tags,
  excerpt,
  slug,
  created_at,
}) => {
  const { categories } = useSelector<TAppState, TAppState>((state) => state);
  const category = categories?.find(
    (category) => category?.uuid === categoryUuid
  ) as TCategory;

  const renderTags = () =>
    tags.map(({ name }, index) => (
      <Text key={index}>#{name.toLowerCase()}</Text>
    ));

  return (
    <Flex gap={10} mt={5}>
      <Image
        src={featured_image}
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
          {title}
        </Text>
        <Text>{excerpt}</Text>
        <HStack>{renderTags()}</HStack>
        <Text>{parseTimestampString(created_at)}</Text>
      </VStack>
    </Flex>
  );
};
