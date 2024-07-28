import { FC } from "react";
import {
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
  ModalBody,
} from "@chakra-ui/react";
import { TModal } from ".";

export const Modal: FC<TModal> = ({
  title,
  isOpen,
  onClose,
  children,
  isCentered = true,
}) => {
  return (
    <ChakraModal
      onClose={onClose}
      isOpen={isOpen}
      size="lg"
      isCentered={isCentered}
    >
      <ModalOverlay />
      <ModalContent py={5} borderRadius={"4px"} w={["90%", "100%"]}>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
