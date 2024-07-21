import { FC } from "react";
import NextLink from "next/link";
import {
  Box,
  Image,
  VStack,
  HStack,
  Badge,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { TArticle } from "../../models";
import { parseTimestampString } from "../../../utilities";

export const Article: FC<TArticle> = ({
  title,
  featured_image,
  category: { uuid: categoryUuid },
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
        <NextLink href={slug.startsWith("/") ? slug : "/" + slug} passHref>
          <LinkOverlay>
            <Text
              fontSize="18px"
              fontWeight="bold"
              lineHeight="short"
              noOfLines={2}
            >
              {title}
            </Text>
          </LinkOverlay>
        </NextLink>
        <HStack>{renderTags()}</HStack>
        <Text>{parseTimestampString(created_at)}</Text>
      </VStack>
    </LinkBox>
  );
};
