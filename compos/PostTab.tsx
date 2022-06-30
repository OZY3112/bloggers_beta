import { useState } from "react";

const PostTab = ({
  setPostTabOpen,
}: {
  setPostTabOpen: (open: boolean) => void;
}) => {
  const [animationDelay, setAnimationDelay] = useState(false);

  return (
    <div
      className={`w-full h-full fixed ${
        animationDelay ? "animate-fadeout" : "animate-fadein"
      }`}
    >
      <div
        onClick={() => {
          setAnimationDelay(true);
          setTimeout(() => setPostTabOpen(false), 200);
        }}
        className=" top-0 left-0 absolute h-screen w-screen bg-[#000000a4] z-10"
      />
      <div
        className={`top-[50%] z-20 left-[50%]  absolute translate-y-[-50%] translate-x-[-50%] `}
      >
        <div
          className={`bg-white w-[950px] h-[550px] flex rounded-xl ${
            animationDelay ? "animate-scaleout" : "animate-scalein"
          }`}
        >
          <div className="w-full">
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTab;
