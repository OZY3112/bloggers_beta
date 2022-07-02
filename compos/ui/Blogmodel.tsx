import React from "react";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
export default function Blog() {
  const noUserPfp =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2VR27b_2TRmQQmTK3rMt8xNxUedXsodYg2Q2nUcH4XwCU0de4dvhK8vlhDChqcoM0Qs&usqp=CAU";
  return (
    <figure
      className="w-[850px] h-[450px] p-4 rounded-md 
     bg-[#ffffff] border-[1px] solid border-[#1d1d1d] m-3"
    >
      {/* user pfp and name  */}
      <div className="flex">
        <figure className="my-auto">
          <Image
            src={noUserPfp}
            alt="profile"
            className="rounded-full w-10 h-10"
            height={55}
            width={55}
          />
        </figure>
        <p className="my-auto ">Mario abas</p>
      </div>
      {/* post content  */}
      <div className="">
        <h2 className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          numquam.
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          quisquam commodi, iusto explicabo minima tenetur natus amet laudantium
          in a quia consequatur ipsam ea animi voluptates soluta? Ducimus, at
          incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus quisquam commodi, iusto explicabo minima tenetur natus amet
          laudantium in a quia consequatur ipsam ea animi voluptates soluta?
          Ducimus, at incidunt? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Doloribus quisquam commodi, iusto explicabo minima
          tenetur natus amet laudantium in a quia consequatur ipsam ea animi
          voluptates soluta? Ducimus, at incidunt?
        </p>
      </div>
      {/* share like button   */}
      <div className="">
        <button className="">
          <AiFillLike />
        </button>
        <button className="">
          <BsShareFill />
        </button>
      </div>
    </figure>
  );
}
