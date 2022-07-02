import Blogs from "./Blogs";
import Nav from "./ui/Nav";

export default function HomeBlogs({ sidebarOpen }: { sidebarOpen: boolean }) {
  return (
    <section
      className={` transition-[300ms] right-0 absolute right-0 bg-bg  ${
        sidebarOpen ? " w-4/5 " : " w-[92%] "
      } `}
    >
      <Nav />
      <Blogs />
    </section>
  );
}
