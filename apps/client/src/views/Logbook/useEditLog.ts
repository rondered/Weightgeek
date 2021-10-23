import React from "react";
import {useMutation, useQueryClient} from "react-query";
import * as yup from "yup";
import {AddLog, Log, PatchLog} from "@/types";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {getLog, deleteLog, patchLog} from "@/endpoints/log";

const schema = yup.object().shape({
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
});

export const useEditLog = () => {
  const queryClient = useQueryClient();

  const [logToEdit, setLogToEdit] = React.useState<PatchLog | undefined>(
    undefined
  );

  const {handleSubmit, register, formState, reset, control} = useForm<PatchLog>(
    {
      resolver: yupResolver(schema),
    }
  );

  React.useEffect(() => {
    reset({
      weight: logToEdit?.weight,
      calories: logToEdit?.calories,
      date: logToEdit?.date,
    });
  }, [logToEdit]);

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const {mutate, isLoading, data, isError, error, isSuccess} = useMutation<
    Log,
    Error,
    PatchLog
  >(patchLog, {
    retry: false,
    onMutate: async (patchedLog) => {
      await queryClient.cancelQueries(getLog.name);

      const previousLogs = queryClient.getQueryData(getLog.name);

      if (previousLogs?.length) {
        queryClient.setQueryData(getLog.name, () => {
          previousLogs[previousLogs.findIndex((log) => log.id == logToEdit.id)] =
            patchedLog;
          return previousLogs;
        });
      }

      return {previousLogs};
    },
    onError: (err, newLog, context) => {
      queryClient.setQueryData(getLog.name, context.previousLogs);
    },
    onSettled: () => {
      queryClient.invalidateQueries(getLog.name);
    },
    onSuccess: () => {
      setIsModalOpen(false);
      reset();
    },
  });

  return {
    handleSubmit: handleSubmit((values: AddLog) => {
        console.log('mutate');
        console.log(logToEdit?.id);
      mutate({...values, id: logToEdit?.id});
    }),
    register,
    formErrors: formState?.errors,
    formState,
    responseError: error?.response?.data.message,
    mutate: () => {},
    isLoading,
    data,
    isResponseError: isError,
    isSuccess,
    reset,
    Controller,
    control,
    isModalOpen,
    setIsModalOpen,
    setLogToEdit,
    logToEdit,
  };
};
