import { useSelector } from "react-redux";
import { TAppState, TArticle } from "../../../store";
import { chakra, Flex, Box, VStack, Text, Circle } from "@chakra-ui/react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";

export const Share = () => {
  const { articles } = useSelector<TAppState, TAppState>((state) => state);
  const article = (articles as TArticle[])[0];
  const FacebookIcon = chakra(BsFacebook);
  const EmailIcon = chakra(HiMail);
  const TwitterIcon = chakra(BsTwitter);
  const LinkedinIcon = chakra(AiFillLinkedin);

  return (
    <Flex
      width="100%"
      my={5}
      alignItems="center"
      justifyContent="center"
      gap="12px"
    >
      <Box width="36%" mt={1} height="1px" background="rgba(0,0,0,0.1)" />
      <VStack spacing={2}>
        <Text>Share this article</Text>
        <Flex gap="12px">
          <Circle size="50px" border="1px solid" borderColor="rgba(0,0,0,0.1)">
            <FacebookIcon fontSize="xl" />
          </Circle>
          <Circle size="50px" border="1px solid" borderColor="rgba(0,0,0,0.1)">
            <EmailIcon fontSize="2xl" />
          </Circle>
          <Circle size="50px" border="1px solid" borderColor="rgba(0,0,0,0.1)">
            <TwitterIcon fontSize="xl" />
          </Circle>
          <Circle size="50px" border="1px solid" borderColor="rgba(0,0,0,0.1)">
            <LinkedinIcon fontSize="2xl" />
          </Circle>
        </Flex>
      </VStack>
      <Box width="36%" mt={1} height="1px" background="rgba(0,0,0,0.1)" />
    </Flex>
  );
};
