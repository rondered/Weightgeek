import { useMutation, useQueryClient } from "react-query";
import * as yup from "yup";
import { IAddLog, IGetLogs } from "@/types";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "@/hooks";
import React from "react";
import { postLog, getLog } from "@/endpoints/log";

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

  const queryClient = useQueryClient();

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
    IGetLogs,
    any[],
    IAddLog
  >(postLog, {
    retry: false,
    onMutate: async (newLog) => {
      await queryClient.cancelQueries(getLog.name);
      const previousLogs = queryClient.getQueryData(getLog.name);
      queryClient.setQueryData(getLog.name, (oldLogs) => [...oldLogs, newLog]);
      return { previousLogs };
    },
    onError: (err, newLog, context) => {
      queryClient.setQueryData(getLog.name, context.previousLogs);
    },
    onSettled: () => {
      queryClient.invalidateQueries(getLog.name);
    },
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
