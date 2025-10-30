import { FC, useContext, useEffect } from "react";
import { Image as ChakraImage, Box, keyframes } from "@chakra-ui/react";
import { TImage } from "./types";
import { ImageContext } from "../../contexts";

export const Image: FC<TImage> = ({ src, width, height }) => {
  const { images, addImage } = useContext(ImageContext);

  useEffect(() => {
    if (!images[src]) {
      setTimeout(() => {
        addImage(src);
      }, 1200);
    }
  }, []);

  const pulse = keyframes`
    50% {
        opacity: 0.5;
    }
  `;

  if (!images[src])
    return (
      <Box
        height={height}
        width={width}
        background={"#ddd"}
        animation={`${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`}
        borderRadius="4px"
      />
    );

  return (
    <ChakraImage
      src={src}
      height={height}
      width={width}
      objectFit="cover"
      borderRadius="4px"
    />
  );
};
