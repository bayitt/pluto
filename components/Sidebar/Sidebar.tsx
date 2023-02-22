import { FC } from "react";
import { useSelector } from "react-redux";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, VStack, Link, Button } from "@chakra-ui/react";
import { TAppState } from "../../store";
import { TSidebar } from "./types";

export const Sidebar: FC<TSidebar> = ({ open, handleOpen }) => {
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
    <Box>
      <Box
        right={{ base: open ? 0 : "-75vw", sm: open ? 0 : "-50vw" }}
        width={{ base: "75vw", sm: "50vw" }}
        px={{ base: 8, md: 16 }}
        pt={{ base: "35%", sm: "20%" }}
        position="fixed"
        top={0}
        height="100vh"
        bg="white"
        opacity={Number(open)}
        zIndex={open ? 10 : -9999}
      >
        <VStack spacing={5} alignItems="flex-start">
          {renderCategories()}
          <Button>Subscribe</Button>
        </VStack>
      </Box>
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        background="rgba(0,0,0,.2)"
        zIndex={5}
        onClick={() => {
          handleOpen(false);
        }}
      />
    </Box>
  );
};
