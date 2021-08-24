import { useQuery } from "react-query";
import { axiosInstance } from "../utils/axios";
import { useAuthStore, useUserStore } from "../stores";
import { IGetAuthorization } from "../types";

const AUTH = async (values: any) => {
  const { data } = await axiosInstance.get(`auth/me`, values);
  return data;
};

export const useSession = () => {
  const { isLoggedIn, setLoggedIn, authTried, setAuthTried } = useAuthStore(
    (state) => ({
      isLoggedIn: state.isLoggedIn,
      setLoggedIn: state.setLoggedIn,
      authTried: state.authTried,
      setAuthTried: state.setAuthTried,
    })
  );

  const { setProfilePhoto, profilePhoto } = useUserStore((state) => ({
    setProfilePhoto: state.setProfilePhoto,
    profilePhoto: state.profilePhoto,
  }));

  const { isLoading, refetch } = useQuery<IGetAuthorization, Error>(
    "AUTH",
    AUTH,
    {
      retry: false,
      enabled: !authTried,
      onSettled: () => {
        setAuthTried();
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
    isLoading,
    profilePhoto,
    refetch,
  };
};
