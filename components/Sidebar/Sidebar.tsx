import { FC } from "react";
import { useSelector } from "react-redux";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, VStack, Link, Button } from "@chakra-ui/react";
import { TAppState } from "../../store";
import { TSidebar } from "./types";

export const Sidebar: FC<TSidebar> = () => {
  const { categories } = useSelector<TAppState, TAppState>((state) => state);
  const router = useRouter();

  const renderCategories = () =>
    categories?.map(({ name, slug }, index) => (
      <NextLink key={index} href={slug} passHref>
        <Link
          href={slug}
          fontWeight={router.asPath === slug ? 600 : 400}
          color={router.asPath === slug ? "whaleBlue" : "black"}
          _hover={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          {name}
        </Link>
      </NextLink>
    ));

  return (
    <Box
      width={{ base: "80vw", sm: "50vw" }}
      px={{ base: 8, md: 16 }}
      pt={{ base: "35%", sm: "20%" }}
      position="fixed"
      top={0}
      right={0}
      height="100vh"
      bg="white"
      zIndex={10}
    >
      <VStack spacing={5} alignItems="flex-start">
        {renderCategories()}
        <Button>Subscribe</Button>
      </VStack>
    </Box>
  );
};
