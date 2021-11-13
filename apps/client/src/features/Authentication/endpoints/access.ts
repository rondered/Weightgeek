import { axiosInstance } from "@/utils";

const getAccessToken = async () => {
  const { data } = await axiosInstance.get(`/auth/access`);
  return data.access_token;
};

export default getAccessToken;
