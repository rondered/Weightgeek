import {axiosInstance} from "@/utils";

const PATH = "log";

export const postLog = async (values: any) => {
  const {data} = await axiosInstance.post(`${PATH}`, values);
  return data;
};

export const patchLog = async (values: any) => {
  const {data} = await axiosInstance.patch(`${PATH}`, values);
  return data;
};

export const deleteLog = async (id: string) => {
  const {data} = await axiosInstance.delete(`${PATH}/${id}`);
  return data;
};

export const getLog = async (values: any) => {
  const {data} = await axiosInstance.get(`${PATH}`);
  return data;
};
