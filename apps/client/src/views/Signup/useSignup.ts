import {useMutation} from "react-query";
import * as yup from "yup";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useSession} from "@/hooks";
import React from "react";
import {SignUp} from "@/types";
import {postSignUp} from "@/endpoints/auth";

const schema = yup.object().shape({
  email: yup.string().email("Invalid address").required("Email Required"),
  password: yup
    .string()
    .min(6, `More than 6 characters`)
    .required("Password Required"),
});

export const useSignup = () => {
  const {setLoggedIn} = useSession();

  const {
    handleSubmit,
    register,
    formState: {errors},
    control,
  } = useForm<SignUp>({
    resolver: yupResolver(schema),
  });

  const {mutate, isLoading, data, isError, error, isSuccess} = useMutation(
    postSignUp,
    {
      retry: false,
      onSuccess: () => setLoggedIn(true),
    }
  );

  return {
    handleSubmit: handleSubmit((values: SignUp) => mutate(values)),
    register,
    formErrors: errors,
    responseError: error?.response?.data.message,
    mutate,
    isLoading,
    data,
    isResponseError: isError,
    isSuccess,
    control,
    Controller,
  };
};
