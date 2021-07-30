import { useQuery } from "react-query";
import { axiosInstance } from "../utils/axios";

const auth = async (values: any) => {
  const { data } = await axiosInstance.get(`auth`, values);
  return data;
};

export const useAuthorization = () => {
  const { isLoading, data, isError, error } = useQuery<any, Error>(
    "auth",
    auth,
    { retry: false }
  );

  return {
    isLoggedIn: !!data,
    isLoading,
  };
};
