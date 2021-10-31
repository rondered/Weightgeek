import { axiosInstance } from "@/utils";

const getMe = async () => {
  const { data } = await axiosInstance.get(`/auth/me`);
  return data.access_token;
};

export default getMe;
