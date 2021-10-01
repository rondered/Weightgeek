import { axiosInstance } from "@/utils";

const PATH = "log";

export const postLog = async (values: any) => {
  const { data } = await axiosInstance.post(`${PATH}`, values);
  return data;
};

export const getLog = async (values: any) => {
  const { data } = await axiosInstance.get(`${PATH}`);
  return data;
};
