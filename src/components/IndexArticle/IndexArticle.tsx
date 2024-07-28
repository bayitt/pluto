import { FC } from "react";
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
import { parseTimestampString } from "../../utilities";
import { TArticle } from "../../models";

export const IndexArticle: FC<TArticle> = ({
  title,
  slug,
  tags,
  excerpt,
  featured_image,
  category,
  created_at,
}) => {
  const renderTags = () =>
    tags.map(({ name }, index) => (
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
        src={featured_image}
        height={{ base: "220px", sm: "320px" }}
        objectFit="cover"
        width={{ base: "100%", md: "50%" }}
        borderRadius="4px"
      />
      <VStack alignItems="flex-start" spacing={{ base: 2, md: 4 }}>
        <Badge bg={category?.color} p={1}>
          {category?.name}
        </Badge>
        <LinkOverlay
          as={NextLink}
          href={slug.startsWith("/") ? slug : "/" + slug}
        >
          <Text
            fontSize={{ base: "18px", sm: "xl", md: "2xl" }}
            fontWeight="bold"
          >
            {title}
          </Text>
        </LinkOverlay>
        <Box
          fontSize={{ base: "15px", md: "md" }}
          display={{ base: "none", sm: "block" }}
          dangerouslySetInnerHTML={{ __html: excerpt ?? "" }}
        />
        <HStack fontSize={{ base: "15px", md: "md" }}>{renderTags()}</HStack>
        <Text fontSize={{ base: "15px", md: "md" }}>
          {parseTimestampString(created_at)}
        </Text>
      </VStack>
    </LinkBox>
  );
};
