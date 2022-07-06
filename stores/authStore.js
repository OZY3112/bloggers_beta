import create from "zustand";
import { persist } from "zustand/middleware";

const authStore = (set) => ({
  useProfile: null,
  addUser: (user) => set({ userProfile: user }),
  logout: () => set({ userProfile: null }),
});

const useAuthStore = create(
  persist(authStore, {
    name: "auth",
  })
);

export default useAuthStore;
