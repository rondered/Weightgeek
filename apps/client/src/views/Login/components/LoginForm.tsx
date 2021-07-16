import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { LoginButton } from ".";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";

const LoginFormContainer = styled.div`
  display: grid;
  gap: 20px;
`;

export const LoginForm = () => {
  const validationSchema = z.object({
    email: z.string().email({ message: "Must be a valid email address" }),
    password: z.string().min(6, { message: "Must be 6 or more characters" }),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(validationSchema) });

  const onSubmit = (values: any) => {
    const lala = async () => {
      const rawResponse = await fetch("http://localhost:4444/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const content = await rawResponse.json();
    };
    lala();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginFormContainer>
        <FormControl isInvalid={errors.email}>
          <Input
            {...register("email")}
            type="email"
            name="email"
            placeholder="email"
            isInvalid={errors.email}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <Input
            {...register("password")}
            type="password"
            name="password"
            placeholder="password"
            isInvalid={errors.password}
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <LoginButton isLoading={isSubmitting} text="Login" />
      </LoginFormContainer>
    </form>
  );
};
