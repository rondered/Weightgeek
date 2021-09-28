import { useMutation } from "react-query";
import { axiosInstance } from "@/utils";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "@/hooks";

const SIGN_UP = async (values: any) => {
  const { data } = await axiosInstance.post(`auth/signup`, values);
  return data;
};

const schema = yup.object().shape({
  email: yup.string().email("Invalid address").required("Required"),
  password: yup.string().min(6, `More than 6 characters`).required("Required"),
});

type CreateSignUp = yup.SchemaOf<typeof schema>;

export const useSignup = () => {
  const { refetch } = useSession();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateSignUp>({
    resolver: yupResolver(schema),
  });

  const { mutate, isLoading, data, isError, error, isSuccess } = useMutation<
    CreateSignUp,
    any,
    CreateSignUp
  >(SIGN_UP, {
    retry: false,
    onSuccess: () => refetch(),
  });

  return {
    handleSubmit: handleSubmit((values: CreateSignUp) => mutate(values)),
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
