import { useMutation } from "react-query";
import { axiosInstance } from "../../utils/axios";

const login = async (values: any) => {
    const result = await axiosInstance.post(`user/login`,values);
    const { data } = result;
    return data;
};

export const useLogin = () => {
  const { mutate, isLoading, data, isError } = useMutation(login);
  return { mutate, isLoading, data, isError };
};
