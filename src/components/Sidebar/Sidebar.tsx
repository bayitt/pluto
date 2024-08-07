import { FC } from "react";
import { Link } from "@chakra-ui/next-js";
import { usePathname } from "next/navigation";
import { Box, VStack, Button, useDisclosure } from "@chakra-ui/react";
import { SidebarProps } from "./types";
import { Subscribe } from "../Subscribe";

export const Sidebar: FC<SidebarProps> = ({ open, handleOpen, categories }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  const renderCategories = () =>
    categories.map(({ name, slug }, index) => (
      <Link
        key={index}
        href={slug}
        fontWeight={pathname === slug ? 600 : 400}
        color={pathname === slug ? "whaleBlue" : "black"}
        _hover={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        {name}
      </Link>
    ));

  return (
    <Box position="absolute">
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
        transition="right 0.7s ease-in"
        zIndex={open ? 10 : -9999}
      >
        <VStack spacing={5} alignItems="flex-start">
          {renderCategories()}
          <Button onClick={onOpen}>Subscribe</Button>
        </VStack>
      </Box>
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        background="rgba(0,0,0,.1)"
        zIndex={open ? 5 : -9999}
        opacity={Number(open)}
        transition="all 0.7s ease-in"
        onClick={() => {
          handleOpen(false);
        }}
      />
      <Subscribe isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
