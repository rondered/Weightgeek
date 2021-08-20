import create from "zustand";

interface IAuthStore {
  isLoggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  authTried: boolean;
  setAuthTried: () => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isLoggedIn: false,
  setLoggedIn: (logged: boolean) => set((state) => ({ isLoggedIn: logged })),
  authTried: false,
  setAuthTried: () => set({ authTried: true }),
}));
