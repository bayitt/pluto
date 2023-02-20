import { useSelector } from "react-redux";
import { Flex, Text, Link, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { TAppState } from "../../store";

export const Nav = () => {
  const { categories } = useSelector<TAppState, TAppState>((state) => state);

  const renderCategories = () =>
    categories?.map(({ name, slug }, index) => (
      <NextLink href={slug} passHref>
        <Link
          key={index}
          href={slug}
          fontWeight={index === 0 ? 600 : 400}
          color={index === 0 ? "whaleBlue" : "black"}
          textDecoration="none"
        >
          {name}
        </Link>
      </NextLink>
    ));

  return (
    <Flex
      color="black"
      justifyContent="space-between"
      alignItems="center"
      py={7}
    >
      <Text size="sm">OLAMILEKE</Text>
      <Flex gap={4} fontSize="15px">
        {renderCategories()}
      </Flex>
      <Button>Subscribe</Button>
    </Flex>
  );
};
