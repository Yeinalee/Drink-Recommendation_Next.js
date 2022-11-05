import { Box, Button, Input, Text, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";

function Upload5Page() {
  const router = useRouter();
  const controls = useAnimation();
  const startAnimation = () => controls.start("hover");
  const stopAnimation = () => controls.stop();

  return (
    <SearchSectionLayout
      title="완성된 사진을 보여주세요!"
      stepString="6 / 6"
      onClickPrevButton={() => {
        router.push("/upload/upload4");
      }}
      onClickNextButton={() => {
        router.push("/");
      }}
      buttonText="완성!"
    >
      사진 추가
      <Input
        type="file"
        accept="image/*"
        borderRadius="24px"
        h="72px"
        w="390px"
        onDragEnter={startAnimation}
        onDragLeave={stopAnimation}
        aria-hidden="true"
        //opacity="0" //하면 그냥 안보임..
      />
    </SearchSectionLayout>
  );
}

export default Upload5Page;
