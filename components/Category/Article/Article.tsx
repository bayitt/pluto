import { FC } from "react";
import { useSelector } from "react-redux";
import { Box, Image, VStack, HStack, Badge, Text } from "@chakra-ui/react";
import { TArticle, TCategory, TAppState } from "../../../store";
import { parseTimestampString } from "../../../utilities";

export const Article: FC<TArticle> = ({
  title,
  featured_image,
  category: { uuid: categoryUuid },
  created_at,
  tags,
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
    <Box width="calc((100% - 56px)/3)">
      <Image
        src={featured_image}
        height="220px"
        width="100%"
        objectFit="cover"
        borderRadius="4px"
      />
      <VStack alignItems="flex-start" mt={5} spacing={2}>
        <Badge bg={category?.color} p={1}>
          {category?.name}
        </Badge>
        <Text
          fontSize="18px"
          fontWeight="bold"
          lineHeight="short"
          noOfLines={2}
        >
          {title}
        </Text>
        <HStack>{renderTags()}</HStack>
        <Text>{parseTimestampString(created_at)}</Text>
      </VStack>
    </Box>
  );
};
