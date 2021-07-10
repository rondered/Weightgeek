import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
} from "@chakra-ui/react";
import { LoginButton } from ".";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
    alert(JSON.stringify(values));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
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
        <LoginButton type="submit" isLoading={isSubmitting} text="Login" />
      </VStack>
    </form>
  );
};
