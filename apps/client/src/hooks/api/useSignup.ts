import { useMutation } from "react-query";
import { axiosInstance } from "../../utils/axios";

const signup = async (values: any) => {
  const result = await axiosInstance.post(`user/signup`, values);
  const { data } = result;
  return data;
};

export const useSignup = () => {
  const { mutate, isLoading, data, isError } = useMutation(signup);
  return { mutate, isLoading, data, isError };
};
