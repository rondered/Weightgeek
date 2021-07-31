import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { config } from "../config";

const agentConfig: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: "http://localhost:4444",
};

export const axiosInstance: AxiosInstance = axios.create(agentConfig);

const getAccessToken = () => {
  const ACCESS_URL = `/auth/access`;
  return axios.get(ACCESS_URL, agentConfig);
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log('here1')
    const request = error.config;
    if (error.response.status === 401) {
      try {
        await getAccessToken();
        console.log('here2')
        return axios(error.config, agentConfig);
      } catch (error) {
        console.log('here3')
        throw error;
      }
    } else {
      console.log('here4')
      console.log(error.response.data.message);
      throw error;
    }
  }
);
