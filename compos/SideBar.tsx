import Image from "next/image";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { links, SidebarListItem, PostTabLink } from "./ui/SidebarListItem";
import { useState } from "react";
import { googleLogout } from "@react-oauth/google";
import useAuthStore from "../stores/authStore";
export default function SideBar({
  sidebarOpen,
  setSidebarOpen,
  setPostTabOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
  setPostTabOpen: (postTabOpen: boolean) => void;
}) {
  const { userProfile, logout }: any = useAuthStore();

  const [dropDownOpen, setDropDownOpen] = useState(false);
  const date = new Date();
  const noUserPfp: string =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2VR27b_2TRmQQmTK3rMt8xNxUedXsodYg2Q2nUcH4XwCU0de4dvhK8vlhDChqcoM0Qs&usqp=CAU";

  return (
    <section
      className={` bg-bg fixed left-0 h-screen duration-200 ${
        sidebarOpen ? "w-1/5" : "w-[8%]"
      }`}
    >
      <div
        className="overflow-hidden bg-pri h-full 
      rounded-r-[22px] p-[1rem] relative"
      >
        <ul className=" mx-[1rem] my-[2rem] ">
          <li
            className=" duration-300 py-2 rounded-3xl "
            onClick={() =>
              sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true)
            }
          >
            <div className=" px-3 flex text-font duration-300 hover:text-fontActive mb-2 gap-3  ">
              <p className={"my-auto text-[1.8rem] text-fontActive "}>
                {sidebarOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
              </p>
            </div>
          </li>
          {links.map((link, i) => (
            <SidebarListItem link={link} sidebarOpen={sidebarOpen} key={i} />
          ))}
          <PostTabLink
            setPostTabOpen={setPostTabOpen}
            sidebarOpen={sidebarOpen}
          />
        </ul>
        <figure
          className="  
         text-font justify-around py-3 border-font border-t-2 absolute bottom-[-8px]
          bg-sec left-0 flex mb-2 mx-auto  w-full button-0 "
        >
          <div className="my-auto flex justify-center ">
            <Image
              src={userProfile ? userProfile.picture : noUserPfp}
              alt="profile"
              className="rounded-full w-10 h-10"
              height={50}
              width={50}
            />
          </div>
          {sidebarOpen && (
            <div className="text-fontActive">
              {/* <h4 className="font-bold ">{userName}</h4> */}
              <h6 className="flex justify-center">
                {date.getMonth() + 1} / {date.getDate()} / {date.getFullYear()}{" "}
              </h6>
            </div>
          )}
          <div className="">
            <button
              className="text-fontActive text-[1.8rem] my-[8px]"
              onClick={() => {
                googleLogout();
                logout();
              }}
            >
              <BiLogOut />
            </button>
          </div>
        </figure>
      </div>
    </section>
  );
}
