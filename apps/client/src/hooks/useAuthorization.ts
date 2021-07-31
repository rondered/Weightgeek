import { useQuery } from "react-query";
import { axiosInstance } from "../utils/axios";
import { useAuthStore } from "../stores";

const auth = async (values: any) => {
  const { data } = await axiosInstance.get(`auth`, values);
  return data;
};

export const useAuthorization = () => {
  const { isLoggedIn, setLoggedIn, authTried, setAuthTried } = useAuthStore(
    (state) => ({
      isLoggedIn: state.isLoggedIn,
      setLoggedIn: state.setLoggedIn,
      authTried: state.authTried,
      setAuthTried: state.setAuthTried,
    })
  );

  const { isLoading, data, isError, error } = useQuery<any, Error>(
    "auth",
    auth,
    {
      retry: false,
      enabled: !authTried,
      onSettled: () => {
        setAuthTried();
      },
      onSuccess: () => {
        setLoggedIn(true);
      },
      onError: () => {
        setLoggedIn(false);
      },
    }
  );

  return {
    isLoggedIn: !!data,
    isLoading,
  };
};
