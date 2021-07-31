import create from "zustand";

export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  setLoggedIn: (logged: boolean) => set((state) => ({ isLoggedIn: logged })),
  authTried: false,
  setAuthTried: () => set({ authTried: true }),
}));
