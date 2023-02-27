import { useEffect, useState } from "react";
import { Spinner as ChakraSpinner } from "@chakra-ui/react";

export const Spinner = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const threshhold = window.screen.width <= 480 ? 228 : 184;
    const {
      document: {
        documentElement: { scrollHeight, scrollTop, clientHeight },
      },
    } = window;
    if (scrollHeight - (scrollTop + clientHeight) < threshhold)
      setIsAtBottom(true);
    else setIsAtBottom(false);
  };

  return (
    <ChakraSpinner
      zIndex={20}
      size="md"
      position="fixed"
      color={isAtBottom ? "white" : "whaleBlue"}
      bottom="5vh"
      right={{ base: "35px", lg: "50px" }}
      transition="all 0.3s ease-in"
    />
  );
};
