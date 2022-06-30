import { ReactNode } from "react";

export type LinkType = {
  title: string;
  logo: ReactNode;
};

export function SidebarListItem({
  link,
  sidebarOpen,
}: {
  link: any;
  sidebarOpen: boolean;
}) {
  return (
    <li className="mb-2 duration-300 py-2 hover:bg-priActive rounded-3xl">
      <div className="px-3 flex text-font mb-2 gap-3">
        <p
          className={`my-auto text-[1.8rem] text-fontActive ${
            !sidebarOpen && "mx-auto"
          } `}
        >
          {link.logo}
        </p>
        {sidebarOpen && (
          <p className="my-auto text-[1.5rem font-thine"> {link.title} </p>
        )}
      </div>
    </li>
  );
}
