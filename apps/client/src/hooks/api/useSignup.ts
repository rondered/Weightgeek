import { useMutation } from "react-query";
import { axiosInstance } from "../../utils/axios";

const signup = async (values: any) => {
  const { data } = await axiosInstance.post(`user/signup`, values);
  return data;
};

export const useSignup = () => {
  const { mutate, isLoading, data, isError, error } = useMutation(signup);
  return { mutate, isLoading, data, isError, error };
};
