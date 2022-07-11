import { VStack } from "@chakra-ui/react";
import React from "react";
import Blog from "./ui/Blogmodel";

export default function Blogs() {
  return (
    <section className="w-full align-center ">
      <VStack>
        {new Array(3).fill(0).map((_, i) => (
          <Blog key={i} />
        ))}
      </VStack>
    </section>
  );
}
