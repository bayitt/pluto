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
    const {
      document: {
        documentElement: { scrollHeight, scrollTop, clientHeight },
      },
    } = window;
    if (scrollHeight - (scrollTop + clientHeight) < 184) setIsAtBottom(true);
    else setIsAtBottom(false);
  };

  return (
    <ChakraSpinner
      size="md"
      position="fixed"
      color={isAtBottom ? "white" : "whaleBlue"}
      bottom="5vh"
      right="50px"
      transition="all 0.3s ease-in"
    />
  );
};
