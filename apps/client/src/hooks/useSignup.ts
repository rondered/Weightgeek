import { useMutation } from "react-query";
import { axiosInstance } from "../utils/axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { useSession } from "./useSession";

const SIGN_UP = async (values: any) => {
  const { data } = await axiosInstance.post(`auth/signup`, values);
  return data;
};

const validationSchema = z.object({
  email: z.string().email({ message: "Must be a valid email address" }),
  password: z.string().min(6, { message: "Must be 6 or more characters" }),
});

type CreateSignUp = z.infer<typeof validationSchema>;

export const useSignup = () => {
  const { refetch } = useSession();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const { mutate, isLoading, data, isError, error, isSuccess } = useMutation<
    CreateSignUp,
    any,
    CreateSignUp
  >(SIGN_UP, {
    retry: false,
    onSuccess: () => refetch(),
  });

  return {
    handleSubmit: handleSubmit((values: CreateSignUp) => mutate(values)),
    register,
    formErrors: errors,
    responseError: error?.response?.data.message,
    mutate,
    isLoading,
    data,
    isResponseError: isError,
    isSuccess,
  };
};
