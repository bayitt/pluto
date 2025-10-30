import { FC } from "react";
import NextLink from "next/link";
import { LinkBox, LinkOverlay, Text, VStack, HStack } from "@chakra-ui/react";
import { Image } from "../Image";
import { TArticle } from "../../models";
import { parseDate } from "../../utilities";

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
      />
      <VStack
        spacing={2}
        lineHeight="tall"
        alignItems="flex-start"
        width={{ base: "100%", md: "60%" }}
      >
        <LinkOverlay
          as={NextLink}
          href={slug?.startsWith("/") ? slug : "/" + slug}
        >
          <Text fontWeight="bold">{title}</Text>
        </LinkOverlay>
        <HStack>{renderTags()}</HStack>
        <Text fontSize="sm">{parseDate(created_at)}</Text>
      </VStack>
    </LinkBox>
  );
};
