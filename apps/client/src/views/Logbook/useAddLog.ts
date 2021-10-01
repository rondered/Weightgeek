import { useMutation } from "react-query";
import { axiosInstance } from "@/utils";
import * as yup from "yup";
import { IAddLog } from "@/types";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "@/hooks";
import React from "react";

const ADD_LOG = async (values: any) => {
  const { data } = await axiosInstance.post(`/log`, values);
  return data;
};

export const useAddLog = () => {
  const schema = React.useMemo(
    () =>
      yup.object().shape({
        weight: yup
          .number()
          .transform((value) => (isNaN(value) ? undefined : value))
          .required("Weight Required")
          .positive("Positive Weight"),
        calories: yup
          .number()
          .optional()
          .transform((value) => (isNaN(value) ? undefined : value))
          .positive("Positive Calories"),
        date: yup.string().required("Required"),
      }),
    []
  );

  const { refetch } = useSession();

  const { handleSubmit, register, formState, reset, control } =
    useForm<IAddLog>({
      resolver: yupResolver(schema),
      defaultValues: {
        weight: undefined,
        calories: undefined,
        date: new Date().toISOString(),
      },
    });

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const { mutate, isLoading, data, isError, error, isSuccess } = useMutation<
    IAddLog,
    any,
    IAddLog
  >(ADD_LOG, {
    retry: false,
    onSuccess: () => {
      setIsModalOpen(false);
    },
  });

  return {
    handleSubmit: handleSubmit((values: IAddLog) => mutate(values)),
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
