import React, { FC, useState, useEffect } from "react";
import { Modal } from "../Wrappers";
import { useFormState } from "react-dom";
import {
  Box,
  Text,
  FormControl,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { Button } from "../Wrappers";
import { SubscribeProps } from "./types";
import { subscribe } from "./api";

export const Subscribe: FC<SubscribeProps> = ({ isOpen, onClose }) => {
  const [formState, formAction] = useFormState(subscribe, {
    status: false,
    message: "",
  });
  const [email, setEmail] = useState("");
  const [formCompleted, setFormCompleted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setEmail("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (formState.status) {
      setEmail("");
      setFormCompleted(true);

      setTimeout(() => {
        setFormCompleted(false);
      }, 4000);
    }
  }, [formState.status]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="">
      <Box as="form" action={formAction}>
        <Text mb={3}>
          Receive updates right in your inbox when new articles are published
        </Text>
        <FormControl mb={4}>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            _placeholder={{ fontWeight: "normal" }}
            border="1px solid"
            borderColor={"#A9B3CE"}
            focusBorderColor={"#A9B3CE"}
          />
          {formCompleted && formState.message && (
            <FormHelperText
              mt={3}
              color={formState.status ? "gray.800" : "#FF0000"}
            >
              {formState.message}
            </FormHelperText>
          )}
        </FormControl>
        <Button
          width="100%"
          type="submit"
          loadingText="Subscribe"
          spinnerPlacement="end"
        >
          Subscribe
        </Button>
      </Box>
    </Modal>
  );
};
