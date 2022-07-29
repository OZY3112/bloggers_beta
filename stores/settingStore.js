import create from "zustand";

const settingsStore = (set) => ({
  // sidebar
  sidebarOpen: true,
  closeSideBar: () => set({ sidebarOpen: false }),
  openSideBar: () => set({ sidebarOpen: true }),

  // post tab
  postTabOpen: false,
  closePostTab: () => set({ postTabOpen: false }),
  openPostTab: () => set({ postTabOpen: true }),

  // theme
  theme: "light",
  
});

const useSettings = create(settingsStore);

export default useSettings;
