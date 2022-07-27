import create from "zustand";
import { persist } from "zustand/middleware";

const settingsStore = (set) => ({
  sidebarOpen: true,
  closeSideBar: () => set({ sidebarOpen: false }),
  openSideBar: () => set({ sidebarOpen: true }),

  postTabOpen: false,
  closePostTab: () => set({ postTabOpen: false }),
  openPostTab: () => set({ postTabOpen: true }),

  theme: "light"
});

const useSettings = create(
  persist(settingsStore, {
    name: "settings",
  })
);

export default useSettings;
