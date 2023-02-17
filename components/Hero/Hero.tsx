import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Box, Container, VStack, Text } from "@chakra-ui/react";
import { TAppState, TCategory } from "../../store";
import { Nav } from "..";

export const Hero = () => {
  const { categories, articles: allArticles } = useSelector<
    TAppState,
    TAppState
  >((state) => state);

  const router = useRouter();
  const category = categories?.find(
    (category) => category?.slug === router.asPath
  ) as TCategory;
  const articles = allArticles?.slice(0, 3);

  return (
    <Box h="100vh" bg="honeyDew">
      <Container maxW="container.xl">
        <Nav />
        <VStack mt="2.5vh" spacing={6}>
          <Text fontSize="md" fontWeight="bold">
            Olamileke's Blog
          </Text>
          <Text fontSize="3xl" fontWeight="bold">
            {category?.name}
          </Text>
          <Text>{category?.description}</Text>
        </VStack>
      </Container>
    </Box>
  );
};
