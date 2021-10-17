import {axiosInstance} from "@/utils";
import { SignUpUserDto, LoginUserDto } from '@wg/types';

const PATH = "auth";

export const getMe = async (values: any) => {
  const {data} = await axiosInstance.get(`${PATH}/me`);
  return data;
};

export const getLogout = async (values: any) => {
  const {data} = await axiosInstance.get(`${PATH}/logout`);
  return data;
};

export const postLogin = async (values: LoginUserDto) => {
  const {data} = await axiosInstance.post(`${PATH}/login`, values);
  return data;
};

export const postSignUp = async (values: SignUpUserDto) => {
  const {data} = await axiosInstance.post(`${PATH}/signup`, values);
  return data;
};
