import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { config } from "../config";

const agentConfig: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: "http://localhost:4444",
};

export const axiosInstance: AxiosInstance = axios.create(agentConfig);

const refreshToken = () => {
  const REFRESH_URL = `/auth/refresh`;
  return axios.get(REFRESH_URL, agentConfig);
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config;
    if (error.response.status === 401) {
      try {
        await refreshToken();
        return axios(error.config, agentConfig);
      } catch (error) {
        throw error;
      }
    } else {
      throw error;
    }
  }
);
