import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useAuthStore } from "../stores";

const agentConfig: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: "http://localhost:4444",
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
        useAuthStore.setState({ accessToken: access_token });
        return axiosInstance(error.config, agentConfig);
      } catch (error) {
        throw error;
      }
    } else {
      throw error;
    }
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${
      useAuthStore.getState().accessToken
    }`;
    return config;
  },
  async (error) => {
    throw error;
  }
);
