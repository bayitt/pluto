import NextLink from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Box, HStack, Container, Text, Link, chakra } from "@chakra-ui/react";
import { HiMail } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { TAppState } from "../../store";

export const Footer = () => {
  const { articles } = useSelector<TAppState, TAppState>((state) => state);
  const router = useRouter();
  const isFixed =
    (router.asPath === "/" || router.asPath.includes("category/")) &&
    articles?.length === 1;
  const EmailIcon = chakra(HiMail);
  const GithubIcon = chakra(AiFillGithub);
  const TwitterIcon = chakra(BsTwitter);
  const LinkedinIcon = chakra(AiFillLinkedin);

  return (
    <Box
      py={20}
      px={{ base: 10, lg: 0 }}
      bg="whaleBlue"
      color="white"
      position={isFixed ? "fixed" : "relative"}
      bottom={0}
      width="100%"
    >
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
        px={0}
      >
        <HStack spacing={3}>
          <Text>&copy; {new Date().getFullYear()}</Text>
          <Text>Subscribe</Text>
          <NextLink href="/sitemap" passHref>
            <Link
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
            >
              Sitemap
            </Link>
          </NextLink>
          <NextLink href="/rss" passHref>
            <Link
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
            >
              RSS
            </Link>
          </NextLink>
        </HStack>

        <HStack spacing={6}>
          <Link
            href="mailto:olamileke.f@gmail.com"
            target="_top"
            fontSize="2xl"
            _hover={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
          >
            <EmailIcon />
          </Link>
          <NextLink href="https://github.com/olamileke" passHref>
            <Link
              target="_blank"
              fontSize="2xl"
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
            >
              <GithubIcon />
            </Link>
          </NextLink>
          <NextLink href="https://twitter.com/f_olamileke" passHref>
            <Link
              target="_blank"
              fontSize="xl"
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
            >
              <TwitterIcon />
            </Link>
          </NextLink>
          <NextLink
            href="https://www.linkedin.com/in/fambegbe-olamileke-4a9731145"
            passHref
          >
            <Link
              target="_blank"
              fontSize="2xl"
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
            >
              <LinkedinIcon />
            </Link>
          </NextLink>
        </HStack>
      </Container>
    </Box>
  );
};
