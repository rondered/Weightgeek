import { defineStore } from "pinia";
import { axiosInstance } from "@/utils";

export const useAuthenticationStore = defineStore("Authentication", {
  state: () => {
    return { isLogged: false, accessToken: "" };
  },
  actions: {
    setIsLogged(isLogged: boolean) {
      this.isLogged = isLogged;
    },
    setAccessToken(accessToken: string) {
      this.accessToken = accessToken;
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.accessToken}`;
    },
  },
});
