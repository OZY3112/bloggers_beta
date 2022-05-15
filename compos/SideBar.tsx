import Image from "next/image";
import {
  BsFillGearFill,
  BsFillSignpostFill,
  BsFillChatFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import useFirebase from "../hooks/useFirebase";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import SidebarListItem from "./ui/SidebarListItem";
import { useState } from "react";
export default function SideBar({}) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const { PhotoUrl } = useFirebase();
  const date = new Date();

  const noUserPfp: string =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2VR27b_2TRmQQmTK3rMt8xNxUedXsodYg2Q2nUcH4XwCU0de4dvhK8vlhDChqcoM0Qs&usqp=CAU";

  return (
    <section className=" w-1/5 h-screen ">
      <div
        className=" 
      overflow-hidden bg-pri h-full  w-full  
      rounded-r-[22px] p-[1rem] relative
       "
      >
        <ul className=" mx-[1rem] my-[2rem] ">
          <SidebarListItem title="Blogs" logo={<AiFillHome />} />
          <SidebarListItem title="Global chat" logo={<BsFillChatFill />} />
          <SidebarListItem title="Profile" logo={<FaUserAlt />} />
          <SidebarListItem title="Settings" logo={<BsFillGearFill />} />

          <li className=" duration-300 py-2 bg-acs  hover:bg-acsActive rounded-3xl ">
            <div className=" px-3 flex text-font duration-300 hover:text-fontActive mb-2 gap-3  ">
              <p className="my-auto text-[1.8rem] text-fontActive ">
                {" "}
                <BsFillSignpostFill />{" "}
              </p>
              <p className="my-auto text-[1.5rem font-thine "> Post </p>
            </div>
          </li>
        </ul>

        <figure
          className="  
         text-font justify-around py-3 border-font border-t-2 absolute bottom-[-8px]
          bg-sec left-0 flex mb-2 mx-auto  w-full button-0 "
        >
          <div className="my-auto flex justify-center ">
            <Image
              src={PhotoUrl ?? noUserPfp}
              alt="profile"
              className="rounded-full w-10 h-10"
              height={50}
              width={50}
            />
          </div>
          <div className="text-fontActive">
            <h4 className="font-bold ">{/* {currentUser?.displayName} */}</h4>
            <h6 className="flex justify-center">
              {date.getMonth() + 1} / {date.getDate()} / {date.getFullYear()}{" "}
            </h6>
          </div>
          <div className="">
            <button
              className="text-fontActive text-[1.8rem] my-[8px]  "
              onClick={() =>
                dropDownOpen ? setDropDownOpen(false) : setDropDownOpen(true)
              }
            >
              <BsThreeDotsVertical />
            </button>
          </div>
        </figure>
      </div>
      {dropDownOpen && (
        <div className=" absolute bottom-28 bg-pri left-64 rounded-md ">
          <figure className=" w-24 h-24 ">
            <button className=" bg-bg ">Log out</button>
          </figure>
        </div>
      )}
    </section>
  );
}
