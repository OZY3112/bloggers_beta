import { BiSearch } from "react-icons/bi";
import { WiSunrise, WiMoonrise } from "react-icons/wi";
export default function Nav() {
  return (
    <nav className="mb-12 flex justify-around mt-8 font-roboto-slab ">
      <h4 className=" flex text-xl text-3xl ">
        <span className="my-auto text-5xl text-yellow-500 transition-[300ms] hover:scale-[0.8] active:scale-[1.2] ">
          <WiSunrise />
          {/* for darkmode <WiMoonrise /> */}
        </span>
        <span className="font-bold  my-auto"> Good morning</span>
        {/* <span className="font-open-sans  my-auto">, {userName}</span> */}
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
