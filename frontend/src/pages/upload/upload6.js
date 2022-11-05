import { AspectRatio, Box, Button, Container, Input, Text, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAnimation } from "framer-motion";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";

function Upload6Page() {
  const router = useRouter();
  const controls = useAnimation();
  const startAnimation = () => controls.start("hover");
  const stopAnimation = () => controls.stop();

  return (
    <SearchSectionLayout
      title="완성된 사진을 보여주세요!"
      stepString="6 / 6"
      onClickPrevButton={() => {
        router.push("/upload/upload5");
      }}
      onClickNextButton={() => {
        router.push("/");
      }}
      buttonText="완성!"
    >
      <AspectRatio h="72px" w="390px" ratio={1}>
        <Box
          backgroundColor="white"
          color={"black"}
          borderRadius="24px"
          fontSize={"24px"}
          fontWeight="bold"
        >
          사진 추가
          <Input
            type="file"
            accept="image/*"
            height="100%"
            width="100%"
            position="absolute"
            onDragEnter={startAnimation}
            onDragLeave={stopAnimation}
            aria-hidden="true"
            opacity="0"
          />
        </Box>
      </AspectRatio>
    </SearchSectionLayout>
  );
}

export default Upload6Page;
