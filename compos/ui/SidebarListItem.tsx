import { ReactNode } from "react";
import { FaUserAlt } from "react-icons/fa";
import {
  BsFillSignpostFill,
  BsFillChatFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
type LinkType = {
  title: string;
  logo: ReactNode;
};

export const links: LinkType[] = [
  {
    title: "Blogs",
    logo: <AiFillHome />,
  },
  {
    title: "Chat",
    logo: <BsFillChatFill />,
  },
  {
    title: "Profile",
    logo: <FaUserAlt />,
  },
];
export const postTab: LinkType[] = [
  {
    title: "post",
    logo: <BsFillSignpostFill />,
  },
];

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

export const PostTabLink = ({ setPostTabOpen, sidebarOpen, link }: any) => (
  <li
    className=" duration-300 py-2 bg-acs  hover:bg-acsActive rounded-3xl"
    onClick={() => setPostTabOpen(true)}
  >
    <div className=" px-3 flex text-font duration-300 hover:text-fontActive mb-2 gap-3  ">
      <p
        className={`my-auto text-[1.8rem] text-fontActive ${
          !sidebarOpen && "mx-auto"
        } `}
      >
        {link.logo}
      </p>
      {sidebarOpen && (
        <p className="my-auto text-[1.5rem font-thine "> {link.title} </p>
      )}
    </div>
  </li>
);
