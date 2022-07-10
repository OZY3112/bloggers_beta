import { useState } from "react";

export default function useApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [postTabOpen, setPostTabOpen] = useState(false);

  return { sidebarOpen, setSidebarOpen, setPostTabOpen, postTabOpen };
}
