import { FC } from "react";
import NextLink from "next/link";
import {
  LinkBox,
  LinkOverlay,
  Text,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { TArticle } from "../../models";
import { parseTimestampString } from "../../utilities";

export const RelatedArticle: FC<TArticle> = ({
  title,
  featured_image,
  tags,
  slug,
  created_at,
}) => {
  const renderTags = () =>
    tags?.map(({ name }, index) => (
      <Text key={index}>#{name.toLowerCase()}</Text>
    ));

  return (
    <LinkBox
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: 4 }}
    >
      <Image
        width={{ base: "100%", md: "40%" }}
        height="150px"
        src={featured_image}
        borderRadius="2px"
        objectFit="cover"
      />
      <VStack spacing={2} lineHeight="tall" alignItems="flex-start">
        <LinkOverlay
          as={NextLink}
          href={slug?.startsWith("/") ? slug : "/" + slug}
        >
          <Text fontWeight="bold">{title}</Text>
        </LinkOverlay>
        <HStack>{renderTags()}</HStack>
        <Text fontSize="sm">{parseTimestampString(created_at)}</Text>
      </VStack>
    </LinkBox>
  );
};
