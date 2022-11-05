import { Button, Input, Text, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";

function Upload5Page() {
  const router = useRouter();

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
      <Button
        backgroundColor="white"
        color={"black"}
        borderRadius="24px"
        h="72px"
        w="390px"
        fontSize={"24px"}
        fontWeight="bold"
      >
        사진 추가
      </Button>
    </SearchSectionLayout>
  );
}

export default Upload5Page;
