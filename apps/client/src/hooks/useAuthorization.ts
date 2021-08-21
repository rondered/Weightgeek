import { useQuery } from "react-query";
import { axiosInstance } from "../utils/axios";
import { useAuthStore } from "../stores";
import { IGetAuthorization } from '../types';

const AUTH = async (values: any) => {
  const { data } = await axiosInstance.get(`auth/me`, values);
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

  const { isLoading, refetch } = useQuery<IGetAuthorization, Error>("AUTH", AUTH, {
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
  });

  return {
    isLoggedIn: isLoggedIn,
    isLoading,
    refetch,
  };
};
