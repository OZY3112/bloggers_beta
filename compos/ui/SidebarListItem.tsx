import { ReactNode } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsFillSignpostFill, BsFillChatFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import useSettings from "../../stores/settingStore";

type LinkType = {
  title: string;
  logo: ReactNode;
  path: string;
};

export const links: LinkType[] = [
  {
    title: "Home",
    logo: <AiFillHome />,
    path: "/",
  },
  {
    title: "Chat",
    logo: <BsFillChatFill />,
    path: "/chat",
  },
  {
    title: "Profile",
    logo: <FaUserAlt />,
    path: "/profile",
  },
];

export function SidebarListItem({
  link,
  sidebarOpen,
}: {
  link: any;
  sidebarOpen: boolean;
}) {
  const router = useRouter();
  return (
    <li
      className={`mb-2 duration-300 py-2
       hover:bg-priActive rounded-3xl ${
         router && router.asPath === link.path && "bg-linkActive"
       } `}
    >
      <Link href={link.path}>
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
      </Link>
    </li>
  );
}

export const PostTabLink = ({}) => {
  const { postTabOpen, closePostTab, openPostTab, sidebarOpen } = useSettings();
  return (
    <li
      className=" duration-300 py-2 bg-acs  hover:bg-acsActive rounded-3xl"
      onClick={() => (postTabOpen ? closePostTab() : openPostTab())}
    >
      <div className=" px-3 flex text-font duration-300 hover:text-fontActive mb-2 gap-3  ">
        <p
          className={`my-auto text-[1.8rem] text-fontActive ${
            !sidebarOpen && "mx-auto"
          } `}
        >
          <BsFillSignpostFill />
        </p>
        {sidebarOpen && (
          <p className="my-auto text-[1.5rem font-thine ">post</p>
        )}
      </div>
    </li>
  );
};
