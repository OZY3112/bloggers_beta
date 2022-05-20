import { Dropzone } from "@mantine/dropzone";
import { Group, Stepper, Text, Pagination } from "@mantine/core";
import { useState } from "react";
import useFirebase from "../hooks/useFirebase";

const PostTab = ({
  setPostTabOpen,
}: {
  setPostTabOpen: (open: boolean) => void;
}) => {
  const { postType, setPostType } = useFirebase();
  const [animationDelay, setAnimationDelay] = useState(false);
  const [postPage, setPostPage] = useState(1);

  const dropzoneContent = (status: any) => {
    return (
      <Group
        position="center"
        spacing="xl"
        style={{ minHeight: 220, pointerEvents: "none" }}
      >
        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            you can only submit 1 image per post
          </Text>
        </div>
      </Group>
    );
  };
  /*
  add pagination to all states of the post tab:
  --post type:
  add a button for each choice:
  photo
  code
  text
  --post caption:
  field to add caption
  --post content:
  optional: field to add content
  
  */

  const PostTypePage = () => {
    return (
      <div className="">
        <h1 className="">what type of post would you like to post?</h1>
        <div className="flex">
          <button className="form-btn" onClick={() => setPostType("photo")}>
            Photo
          </button>
          <button className="form-btn" onClick={() => setPostType("code")}>
            Code
          </button>
          <button className="form-btn" onClick={() => setPostType("text")}>
            text
          </button>
        </div>
      </div>
    );
  };

  const PostCaptionPage = () => {
    return <div></div>;
  };

  const PostConformPage = () => {
    return <div></div>;
  };

  const [activePage, setPage] = useState(1);
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const PaginationSetup = () => {
    return (
      <>
        <Pagination
          page={activePage}
          onChange={setPage}
          total={3}
          initialPage={1}
          radius="xl"
          withControls={false}
        />
        <Text mb={10} mt={30}>
          <PostTypePage />
        </Text>
      </>
    );
  };
  return (
    <div
      className={`w-full h-full ${
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
            <div className="">
              <PaginationSetup />
            </div>
          </div>
          {/* {postType === "photo" && (
            <Dropzone
              onDrop={(files) => console.log("accepted files", files)}
              onReject={(files) => console.log("rejected files", files)}
              maxSize={3 * 1024 ** 2}
              className={` w-1/2 rounded-xl `}
            >
              {(status) => dropzoneContent(status)}
            </Dropzone>
          )} */}
          {postType === "code" && (
            <div className="w-1/2">
              <textarea
                className="w-full h-full rounded-xl"
                placeholder="Write your code here"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostTab;
