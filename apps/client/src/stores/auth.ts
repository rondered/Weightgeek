import create from "zustand";

interface IAuthStore {
  // state
  isLoggedIn: boolean;
  isInitalized: boolean;
  accessToken: string | undefined;

  //actions
  setLoggedIn: (loggedIn: boolean) => void;
  setInitalized: () => void;
  setAccessToken: (token: string) => void;
  removeAccessToken: () => void;
  disconnect: () => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  // state
  isLoggedIn: false,
  isInitalized: false,
  accessToken: undefined,

  // actions
  setLoggedIn: (logged: boolean) => set((state) => ({ isLoggedIn: logged })),
  setInitalized: () => set({ isInitalized: true }),
  setAccessToken: (token: string) => set({ accessToken: token }),
  removeAccessToken: () => set({ accessToken: undefined }),
  disconnect: () =>
    set({ isLoggedIn: false, accessToken: undefined, isInitalized: false }),
}));
