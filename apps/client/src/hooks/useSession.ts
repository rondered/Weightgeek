import React from "react";
import { useQuery } from "react-query";
import { axiosInstance } from "@/utils/axios";
import { useAuthStore } from "@/stores";
import { IGetAuthorization } from "@/types";

const AUTH = async (values: any) => {
  const { data } = await axiosInstance.get(`auth/me`);
  return data;
};

const LOGOUT = async (values: any) => {
  const { data } = await axiosInstance.get(`auth/logout`);
  return data;
};

export const useSession = () => {
  const {
    isLoggedIn,
    setLoggedIn,
    setInitalized,
    isInitalized,
    removeAccessToken,
  } = useAuthStore((state) => ({
    isLoggedIn: state.isLoggedIn,
    setLoggedIn: state.setLoggedIn,
    isInitalized: state.isInitalized,
    setInitalized: state.setInitalized,
    removeAccessToken: state.removeAccessToken,
  }));

  const { isLoading: isAuthLoading, refetch } = useQuery<
    IGetAuthorization,
    Error
  >("AUTH", AUTH, {
    retry: false,
    enabled: !isInitalized,
    onSettled: () => {
      setInitalized();
    },
    onSuccess: (data: any) => {
      setLoggedIn(true);
    },
    onError: () => {
      setLoggedIn(false);
    },
  });

  const [isLoggingOut, setIsLoggingOut] = React.useState<boolean>(false);

  const { isLoading: isLogoutLoading } = useQuery<any, Error>(
    "LOGOUT",
    LOGOUT,
    {
      retry: false,
      enabled: isLoggingOut,
    }
  );

  return {
    isLoggedIn,
    setLoggedIn,
    isLoading: isAuthLoading || isLogoutLoading,
    refetch,
    logout: () => {
      setIsLoggingOut(true);
      removeAccessToken();
    },
  };
};
