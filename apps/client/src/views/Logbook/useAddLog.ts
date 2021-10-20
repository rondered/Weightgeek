import {useMutation, useQueryClient} from "react-query";
import * as yup from "yup";
import {AddLog, Log} from "@/types";
import React from "react";
import {postLog, getLog} from "@/endpoints/log";
import {useFormik} from "formik";

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

export const useAddLog = () => {
  const queryClient = useQueryClient();

  const {handleSubmit, handleChange, values, errors, resetForm} = useFormik({
    validationSchema: schema,
    onSubmit: (values) => {
      mutate(values);
    },
    initialValues: {
      weight: undefined,
      calories: undefined,
      date: new Date().toISOString(),
    },
  });

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const {mutate, isLoading, data, isError, error, isSuccess} = useMutation<
    Log[],
    Error,
    AddLog
  >(postLog, {
    retry: false,
    onMutate: async (newLog) => {
      await queryClient.cancelQueries(getLog.name);

      const previousLogs = queryClient.getQueryData(getLog.name);

      queryClient.setQueryData(getLog.name, () => [
        ...(previousLogs || []),
        newLog,
      ]);

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
      resetForm();
    },
  });

  return {
    handleSubmit,
    formErrors: errors,
    formValues: values,
    handleFormChange: handleChange,
    mutate,
    isLoading,
    data,
    resetForm,
    isResponseError: isError,
    isSuccess,
    isModalOpen,
    openModal: () => {
      setIsModalOpen(true);
    },
    closeModal: () => {
      resetForm();
      setIsModalOpen(false);
    },
  };
};
