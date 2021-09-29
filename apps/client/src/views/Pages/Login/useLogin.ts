import { useMutation } from "react-query";
import { axiosInstance } from "@/utils";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "@/hooks";

const LOGIN = async (values: any) => {
  const { data } = await axiosInstance.post(`auth/login`, values);
  return data;
};

const schema = yup.object().shape({
  email: yup.string().email("Invalid address").required("Required"),
  password: yup.string().min(6, `More than 6 characters`).required("Required"),
});

type CreateLogin = yup.SchemaOf<typeof schema>;

export const useLogin = () => {
  const { refetch } = useSession();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<CreateLogin>({
    resolver: yupResolver(schema),
  });

  const { mutate, isLoading, data, isError, error, isSuccess } = useMutation<
    CreateLogin,
    any,
    CreateLogin
  >(LOGIN, {
    retry: false,
    onSuccess: () => refetch(),
  });

  return {
    handleSubmit: handleSubmit((values: CreateLogin) => mutate(values)),
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
