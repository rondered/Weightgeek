import create from "zustand";

interface IAuthStore {
  isLoggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  accessToken: string | undefined;
  setAccessToken: (token: string) => void;
  removeAccessToken: () => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isLoggedIn: false,
  setLoggedIn: (logged: boolean) => set((state) => ({ isLoggedIn: logged })),
  accessToken: undefined,
  setAccessToken: (token: string) => set({ accessToken: token }),
  removeAccessToken: () => set({ accessToken: undefined }),
}));
