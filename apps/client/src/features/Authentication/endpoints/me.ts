import { axiosInstance } from "@/utils";

const getMe = async () => {
  const { data } = await axiosInstance.get(`/auth/me`);
  return data;
};

export default getMe;
