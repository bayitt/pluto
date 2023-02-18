import { FC } from "react";
import {
  Flex,
  Image,
  VStack,
  HStack,
  Text,
  Badge,
  Heading,
} from "@chakra-ui/react";
import { TArticle } from "../../../store";

export const IndexArticle: FC<TArticle> = ({
  title,
  category,
  featured_image,
  tags,
  slug,
  created_at,
}) => {
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
        <Badge bg="platinum" p={1}>
          TOOLS
        </Badge>
        <Text fontSize="2xl" fontWeight="bold">
          {title}
        </Text>
        <Text>
          Sed luctus lobortis odio ut semper. Nam commodo facilisis suscipit.
          Nullam convallis diam sit amet eros rutrum
        </Text>
        <HStack>{renderTags()}</HStack>
        <Text>{created_at}</Text>
      </VStack>
    </Flex>
  );
};
