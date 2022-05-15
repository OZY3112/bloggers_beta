import Nav from "./ui/Nav";

export default function HomeBlogs({ sidebarOpen }: { sidebarOpen: boolean }) {
  return (
    <section className={` h-full transition-[300ms] ${sidebarOpen ? " w-4/5 " : " w-[92%] "} `}>
      <Nav />
    </section>
  );
}
