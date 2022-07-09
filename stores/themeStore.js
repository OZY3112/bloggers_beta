import create from "zustand";
import { persist } from "zustand/middleware";

const themeStore = (set) => ({
  theme: "light",
  toggleDarkMode: () => set({ theme: "dark" }),
  toggleLightMode: () => set({ theme: "light" }),
});

const useTheme = create(
  persist(themeStore, {
    name: "theme",
  })
);

export default useTheme;
