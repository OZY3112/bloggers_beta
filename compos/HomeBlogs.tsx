import useSettings from "../stores/settingStore";
import Blogs from "./Blogs";
import Nav from "./ui/Nav";

export default function HomeBlogs() {
  const { sidebarOpen } = useSettings();

  return (
    <section
      className={`transition-[300ms] right-0 absolute bg-bg ${
        sidebarOpen ? " w-4/5 " : " w-[92%] "
      }`}
    >
      <Nav />
      <Blogs />
    </section>
  );
}
