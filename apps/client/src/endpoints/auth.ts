import { axiosInstance } from "@/utils";

const PATH = "auth";

export const getMe = async (values: any) => {
  const { data } = await axiosInstance.get(`${PATH}/me`);
  return data;
};

export const getLogout = async (values: any) => {
  const { data } = await axiosInstance.get(`${PATH}/logout`);
  return data;
};

export const postLogin = async (values: any) => {
  const { data } = await axiosInstance.post(`${PATH}/login`, values);
  return data;
};

export const postSignUp = async (values: any) => {
  const { data } = await axiosInstance.post(`${PATH}/signup`, values);
  return data;
};
