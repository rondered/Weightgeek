import {useMutation} from "react-query";
import * as yup from "yup";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useSession} from "@/hooks";
import React from "react";
import {ILogin} from "@/types";
import {postLogin} from "@/endpoints/auth";

export const useLogin = () => {
  const {refetch} = useSession();

  const schema = React.useMemo(
    () =>
      yup.object().shape({
        email: yup.string().email("Invalid address").required("Email Required"),
        password: yup
          .string()
          .min(6, `More than 6 characters`)
          .required("Password Required"),
      }),
    []
  );

  const {
    handleSubmit,
    register,
    control,
    formState: {errors},
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
  });

  const {mutate, isLoading, data, isError, error, isSuccess} = useMutation(
    postLogin,
    {
      retry: false,
      onSuccess: () => refetch(),
    }
  );

  return {
    handleSubmit: handleSubmit((values: ILogin) => mutate(values)),
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
