import { FC } from "react";
import { chakra, Flex, Box, VStack, Text, Circle } from "@chakra-ui/react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import { ShareProps } from "./types";

export const Share: FC<ShareProps> = ({ title, slug }) => {
  const FacebookIcon = chakra(BsFacebook);
  const EmailIcon = chakra(HiMail);
  const TwitterIcon = chakra(BsTwitter);
  const LinkedinIcon = chakra(AiFillLinkedin);

  const handleShareClick = (
    type: "email" | "facebook" | "linkedin" | "twitter"
  ) => {
    const articleUrl =
      (process.env.NEXT_PUBLIC_APP_URL ??
        window.__env__.NEXT_PUBLIC_APP_URL ??
        "") + (slug?.startsWith("/") ? slug : "/" + slug);
    let url: string;

    switch (type) {
      case "email":
        url = `mailto:you@example.com?subject=${title}&body=${articleUrl}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${title}&url=${articleUrl}`;
        break;
      case "facebook":
        url = `https://web.facebook.com/sharer/sharer.php?u=${articleUrl}`;
        break;
      default:
        url = `https://twitter.com/intent/tweet?text=${title}&url=${articleUrl}`;
    }

    window.open(
      url,
      "Popup",
      "location,status,scrollbars,resizable,width=500,height=500"
    );
  };

  return (
    <Flex
      width="100%"
      mt={5}
      alignItems="center"
      justifyContent="center"
      gap="12px"
    >
      <Box width="36%" mt={1} height="1px" background="rgba(0,0,0,0.1)" />
      <VStack spacing={2}>
        <Text>Share this article</Text>
        <Flex gap="12px">
          <Circle
            size="50px"
            cursor="pointer"
            background="transparent"
            _hover={{ background: "rgba(0,0,0,0.06)" }}
            border="1px solid"
            borderColor="rgba(0,0,0,0.1)"
            transition="all 0.3s ease-in"
            onClick={() => {
              handleShareClick("facebook");
            }}
          >
            <FacebookIcon fontSize="xl" />
          </Circle>
          <Circle
            size="50px"
            cursor="pointer"
            background="transparent"
            _hover={{ background: "rgba(0,0,0,0.06)" }}
            border="1px solid"
            borderColor="rgba(0,0,0,0.1)"
            transition="all 0.3s ease-in"
            onClick={() => {
              handleShareClick("email");
            }}
          >
            <EmailIcon fontSize="2xl" />
          </Circle>
          <Circle
            size="50px"
            cursor="pointer"
            background="transparent"
            _hover={{ background: "rgba(0,0,0,0.06)" }}
            border="1px solid"
            borderColor="rgba(0,0,0,0.1)"
            transition="all 0.3s ease-in"
            onClick={() => {
              handleShareClick("twitter");
            }}
          >
            <TwitterIcon fontSize="xl" />
          </Circle>
          <Circle
            size="50px"
            cursor="pointer"
            background="transparent"
            _hover={{ background: "rgba(0,0,0,0.06)" }}
            border="1px solid"
            borderColor="rgba(0,0,0,0.1)"
            transition="all 0.3s ease-in"
            onClick={() => {
              handleShareClick("linkedin");
            }}
          >
            <LinkedinIcon fontSize="2xl" />
          </Circle>
        </Flex>
      </VStack>
      <Box width="36%" mt={1} height="1px" background="rgba(0,0,0,0.1)" />
    </Flex>
  );
};
