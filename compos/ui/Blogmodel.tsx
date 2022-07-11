import React from "react";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
export default function Blog() {
  // TODO: finish the post design

  const noUserPfp: string =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxMVITEhJSkrLi4uFx8zODMtNygtOisBCgoKDQ0NDw0NDisZFRkrKzctNzcrKzctLS03Kys3KystLSsrNy0rLSsrKysrKysrKysrKystKysrKy0rKysrK//AABEIAQMAwgMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMOAAAAAAAAAAAAAAAAAAUAAAABQAEUFEFRAAABQQABUUQEUVFEEURQABQAQAFAFBFAAEEUFEUEAAAAAAAAAAABQAQAFABAAUAAAABBEVAAVABUAUEBQAABQAQAABRUAUAEABRAURAEAAAAAABUAUAAAAAABQARRFBEFRQAQAAAAAAAAUEBRFFRQEAAAFABBFAVABAAAAAAAAAAAAFQUAAAAABVAEQAVUARAAAAAAAAAAAAFEVQEVAAAAFAAAAQAQAAAAAAAAAAABQAAAABQAABQAQEVFQAQAAAAAAAAAAUAAAAAUAAAUAAEUBAVEQVAAAAAVAAUAABQAABQAEABQAAAAAABBFARBQAAAAUAAAAAUAEABQAAAAAQAAAAAAAAAFABAAAAUABAAUAAAQAAAAAAAAAFAAAAAAAAAAAVAAUEAAAAAAAQAFAAAAAAAAAABQQBaiiCgIKgAqACgIAACggqACgIKAgoACgYGKKlAESAAAAigAigoAIIogAKAAAABAQFqigAqv/Z";
  return (
    <figure
      className="w-[850px] h-fit p-4 rounded-md 
     bg-[#ffffff] border-[1px] solid border-[#1d1d1d] m-3"
    >
      {/* user pfp and name  */}
      <div className="flex  ">
        <figure className="my-auto">
          <Image
            src={noUserPfp}
            alt="profile"
            className="rounded-full my-auto"
            height={55}
            width={55}
          />
        </figure>
        <p className="my-auto text-lg  mx-2">Mario abas</p>
      </div>
      {/* post content  */}
      <div className="">
        <h2 className="text-lg">
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
      <div className="border-t-[1px] border-font mt-4 gap-4 text-3xl">
        <button className="">
          <figure className="flex">
            <p className="my-auto">
              <AiFillLike />
            </p>
            <p className="my-auto">30</p>
          </figure>
        </button>
        <button className=" my-auto">
          <BsShareFill />
        </button>
      </div>
    </figure>
  );
}
