import { FC } from "react";
import NextLink from "next/link";
import {
  VStack,
  HStack,
  Badge,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Image } from "../Image";
import { TArticle } from "../../models";
import { parseDate } from "../../utilities";

export const Article: FC<TArticle> = ({
  title,
  featured_image,
  category,
  slug,
  created_at,
  tags,
}) => {
  const renderTags = () =>
    tags.map(({ name }, index) => (
      <Text key={index}>#{name.toLowerCase()}</Text>
    ));

  return (
    <LinkBox
      width={{
        base: "100%",
        sm: "calc((100% - 20px)/2)",
        md: "calc((100% - 56px)/3)",
        lg: "calc((100% - 56px)/3)",
      }}
    >
      <Image src={featured_image} height="220px" width="100%" />
      <VStack alignItems="flex-start" mt={5} spacing={2}>
        <Badge bg={category.color} p={1}>
          {category.name}
        </Badge>
        <LinkOverlay
          as={NextLink}
          href={slug.startsWith("/") ? slug : "/" + slug}
        >
          <Text
            fontSize="18px"
            fontWeight="bold"
            lineHeight="short"
            noOfLines={2}
          >
            {title}
          </Text>
        </LinkOverlay>
        <HStack>{renderTags()}</HStack>
        <Text>{parseDate(created_at)}</Text>
      </VStack>
    </LinkBox>
  );
};
