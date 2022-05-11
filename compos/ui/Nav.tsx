import React from "react";
import { BiSearch } from "react-icons/bi";
import { WiSunrise } from "react-icons/wi";
import { useAuth } from "../../firebase/firebase";
export default function Nav() {
  const currentUser = useAuth();
  return (
    <nav className=" flex justify-around mt-8 font-roboto-slab ">
      <h4 className=" flex text-xl text-3xl ">
        <span className="my-auto text-4xl text-yellow-500 ">
          <WiSunrise />
        </span>
        <span className="font-bold "> Good morning</span>
        <span className="font-open-sans">, {currentUser?.displayName} </span>
      </h4>
      <div className=" relative ">
        <input
          type="text"
          className=" h-[40px] w-[300px] bg-[#dedede]  rounded px-2"
          placeholder="Search for blogs"
        />
        <span
          className="top-0 right-0 text-fontActive
             absolute w-[40px] h-[40px] bg-acs hover:bg-acsActive duration-300 rounded  "
        >
          <div className="absolute top-[30%] right-[30%]">
            <BiSearch />
          </div>
        </span>
      </div>
    </nav>
  );
}
