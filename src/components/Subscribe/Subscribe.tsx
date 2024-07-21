import React, { FC, useState, useEffect } from "react";
import { Modal } from "../Wrappers";
import {
  Box,
  Text,
  Button,
  FormControl,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { SubscribeProps } from "./types";

export const Subscribe: FC<SubscribeProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setIsSuccess(false);
    }
  }, [isOpen]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<any>) => {
    event.preventDefault();

    if (email.trim() === "") return;

    const onSubscribe = () => {
      setIsSuccess(true);
      setEmail("");
    };

    // await subscribe(dispatch, { email }, onSubscribe);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="">
      <Box as="form" onSubmit={handleSubmit}>
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
            borderColor="#A9B3CE"
            focusBorderColor="#A9B3CE"
          />
          {isSuccess && (
            <FormHelperText mt={3} color="gray.800">
              You are subscribed successfully!
            </FormHelperText>
          )}
        </FormControl>
        <Button
          width="100%"
          type="submit"
          // isLoading={loading}
          loadingText="Subscribe"
          spinnerPlacement="end"
        >
          Subscribe
        </Button>
      </Box>
    </Modal>
  );
};
