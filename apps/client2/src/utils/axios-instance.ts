import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useAuthenticationStore } from "@/features/Authentication/stores";

const agentConfig: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_BASE_URL,
};

export const axiosInstance: AxiosInstance = axios.create(agentConfig);

const getAccessToken = async () => {
  const { data } = await axios.get(`/auth/access`, agentConfig);
  return data.access_token;
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      try {
        const access_token = await getAccessToken();
        useAuthenticationStore().setAccessToken(access_token);
        return axiosInstance(error.config, agentConfig);
      } catch (error) {
        throw error;
      }
    } else {
      throw error;
    }
  }
);
