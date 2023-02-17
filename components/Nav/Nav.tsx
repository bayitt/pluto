import { useSelector } from "react-redux";
import { Flex, Text, Link, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { TAppState, TCategory } from "../../store";

export const Nav = () => {
  const { categories } = useSelector<TAppState, TAppState>((state) => state);

  const renderCategories = () =>
    categories?.map(({ name, slug }, index) => (
      <Link key={index} as={NextLink} href={slug}>
        {name}
      </Link>
    ));

  return (
    <Flex
      color="black"
      justifyContent="space-between"
      alignItems="center"
      py={7}
    >
      <Text size="sm">OLAMILEKE</Text>
      <Flex gap={4} fontSize="15.5px">
        {renderCategories()}
      </Flex>
      <Button>Subscribe</Button>
    </Flex>
  );
};
