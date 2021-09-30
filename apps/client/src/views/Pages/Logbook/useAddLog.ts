import { useMutation } from "react-query";
import { axiosInstance } from "@/utils";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "@/hooks";
import React from "react";

const ADD_LOG = async (values: any) => {
  const { data } = await axiosInstance.post(`/log`, values);
  return data;
};

const schema = yup.object().shape({
  weight: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required("Required")
    .positive("Positive"),
  calories: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .positive("Positive"),
  date: yup
    .date()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required("Required"),
});

type CreateLog = yup.SchemaOf<typeof schema>;

export const useAddLog = () => {
  const { refetch } = useSession();

  const { handleSubmit, register, formState, reset, control } =
    useForm<CreateLog>({
      resolver: yupResolver(schema),
    });

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const { mutate, isLoading, data, isError, error, isSuccess } = useMutation<
    CreateLog,
    any,
    CreateLog
  >(ADD_LOG, {
    retry: false,
    onSuccess: () => {
      setIsModalOpen(false);
    },
  });

  return {
    handleSubmit: handleSubmit((values: CreateLog) => mutate(values)),
    register,
    formErrors: formState?.errors,
    formState,
    responseError: error?.response?.data.message,
    mutate,
    isLoading,
    data,
    isResponseError: isError,
    isSuccess,
    reset,
    Controller,
    control,
    isModalOpen,
    setIsModalOpen,
  };
};
