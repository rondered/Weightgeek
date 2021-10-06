import {useMutation} from "react-query";
import * as yup from "yup";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useSession} from "@/hooks";
import React from "react";
import {Login} from "@/types";
import {postLogin} from "@/endpoints/auth";

const schema = yup.object().shape({
  email: yup.string().email("Invalid address").required("Email Required"),
  password: yup
    .string()
    .min(6, `More than 6 characters`)
    .required("Password Required"),
});

export const useLogin = () => {
  const {setLoggedIn} = useSession();

  const {
    handleSubmit,
    register,
    control,
    formState: {errors},
  } = useForm<Login>({
    resolver: yupResolver(schema),
  });

  const {mutate, isLoading, data, isError, error, isSuccess} = useMutation(
    postLogin,
    {
      retry: false,
      onSuccess: () => setLoggedIn(true),
    }
  );

  return {
    handleSubmit: handleSubmit((values: Login) => mutate(values)),
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
