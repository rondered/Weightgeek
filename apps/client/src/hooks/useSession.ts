import React from "react";
import { useQuery } from "react-query";
import { useAuthStore } from "@/stores";
import { getMe, getLogout } from "@/endpoints/auth";

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

  const { isLoading: isAuthLoading, refetch } = useQuery(getMe.name, getMe, {
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

  const { isLoading: isLogoutLoading } = useQuery(getLogout.name, getLogout, {
    retry: false,
    enabled: isLoggingOut,
  });

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
