import { useMutation } from "react-query";
import { axiosInstance } from "@/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "@/hooks";

const LOGIN = async (values: any) => {
  const { data } = await axiosInstance.post(`auth/login`, values);
  return data;
};

const validationSchema = z.object({
  email: z.string().email({ message: "Must be a valid email address" }),
  password: z.string().min(6, { message: "Must be 6 or more characters" }),
});

type CreateLogin = z.infer<typeof validationSchema>;

export const useLogin = () => {
  const { refetch } = useSession();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
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
  };
};
