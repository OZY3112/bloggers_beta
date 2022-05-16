import { Group, Text } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
const PostTab = () => {
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
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    );
  };
  return (
    <div className="w-full h-full ">
      <div className="blur-3xl top-0 left-0 absolute h-screen w-screen bg-[#838383a4] z-10" />
      <div className="top-[50%] z-20 left-[50%] absolute translate-y-[-50%] translate-x-[-50%] ">
        
        <Dropzone
          onDrop={(files) => console.log("accepted files", files)}
          onReject={(files) => console.log("rejected files", files)}
          maxSize={3 * 1024 ** 2}
        >
          {(status) => dropzoneContent(status)}
        </Dropzone>
      </div>
    </div>
  );
};

export default PostTab;
