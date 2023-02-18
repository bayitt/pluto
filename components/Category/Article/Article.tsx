import { FC } from "react";
import { Box, Image, VStack, HStack, Badge, Text } from "@chakra-ui/react";
import { TArticle } from "../../../store";

export const Article: FC<TArticle> = ({
  title,
  featured_image,
  category,
  created_at,
  tags,
}) => {
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
        <Badge bg="platinum" p={1}>
          TOOLS
        </Badge>
        <Text fontSize="18px" fontWeight="bold" lineHeight="short">
          {title}
        </Text>
        <Text fontSize="sm" noOfLines={2}>
          Sed luctus lobortis odio ut semper. Nam commodo facilisis suscipit.
          Nullam convallis diam sit amet eros rutrum
        </Text>
        <HStack>{renderTags()}</HStack>
        <Text>{created_at}</Text>
      </VStack>
    </Box>
  );
};
