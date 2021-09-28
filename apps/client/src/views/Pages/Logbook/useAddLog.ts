import { useMutation } from "react-query";
import { axiosInstance } from "@/utils";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "@/hooks";

const ADD_LOG = async (values: any) => {
  const { data } = await axiosInstance.post(`/log`, values);
  return data;
};

const schema = yup.object().shape({
  weight: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('Required')
    .positive(),
  calories: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .positive(),
  date: yup.date().required('Required'),
});

type CreateLog = yup.SchemaOf<typeof schema>;

export const useAddLog = () => {
  const { refetch } = useSession();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateLog>({
    resolver: yupResolver(schema),
  });

  const { mutate, isLoading, data, isError, error, isSuccess } = useMutation<
    CreateLog,
    any,
    CreateLog
  >(ADD_LOG, {
    retry: false,
    onSuccess: () => refetch(),
  });

  return {
    handleSubmit: handleSubmit((values: CreateLog) => mutate(values)),
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
