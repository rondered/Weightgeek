import { axiosInstance } from "@/utils";

export const postLogin = async (values: any) => {
  const { data } = await axiosInstance.post(`auth/login`, values);
  return data;
};
