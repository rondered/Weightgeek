import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useAuthStore } from "../stores";

const agentConfig: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: "http://localhost:4444",
  headers: {
    Authorization: `Bearer ${useAuthStore.getState().accessToken}`,
  },
};

export const axiosInstance: AxiosInstance = axios.create(agentConfig);

const getAccessToken = () => {
  const ACCESS_URL = `/auth/access`;
  return axios.get(ACCESS_URL, agentConfig);
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config;
    if (error.response.status === 401) {
      try {
        await getAccessToken();
        return axios(error.config, agentConfig);
      } catch (error) {
        throw error;
      }
    } else {
      throw error;
    }
  }
);
