import create from "zustand";

interface IUserStore {
  profilePhoto?: string;
  setProfilePhoto: (url: string) => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  profilePhoto: undefined,
  setProfilePhoto: (url: string) => set(() => ({ profilePhoto: url })),
}));
