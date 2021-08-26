import { useQuery } from "react-query";
import { axiosInstance } from "../utils/axios";
import { useAuthStore, useUserStore } from "../stores";
import { IGetAuthorization } from "../types";

const AUTH = async (values: any) => {
  const { data } = await axiosInstance.get(`auth/me`);
  return data;
};

export const useSession = () => {
  const {
    isLoggedIn,
    setLoggedIn,
    setAccessToken,
    setInitalized,
    isInitalized,
  } = useAuthStore((state) => ({
    isLoggedIn: state.isLoggedIn,
    setLoggedIn: state.setLoggedIn,
    isInitalized: state.isInitalized,
    setInitalized: state.setInitalized,
    accessToken: state.accessToken,
    setAccessToken: state.setAccessToken,
    removeAccessToken: state.removeAccessToken,
  }));

  const { setProfilePhoto, profilePhoto } = useUserStore((state) => ({
    setProfilePhoto: state.setProfilePhoto,
    profilePhoto: state.profilePhoto,
  }));

  const { isLoading, refetch } = useQuery<IGetAuthorization, Error>(
    "AUTH",
    AUTH,
    {
      retry: false,
      enabled: isLoggedIn || !isInitalized,
      onSettled: () => {
        setInitalized();
      },
      onSuccess: (data: any) => {
        setProfilePhoto(data.profile_photo);
        setLoggedIn(true);
      },
      onError: () => {
        setLoggedIn(false);
      },
    }
  );

  return {
    isLoggedIn,
    setLoggedIn,
    isLoading,
    setAccessToken,
    profilePhoto,
    refetch,
  };
};
