import { Box, Input, Tag, Textarea, Wrap } from "@chakra-ui/react";
import { useRouter } from "next/router";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import { MOCKUP_TAGS } from "../../mockups/tags";

function Upload2Page() {
  const router = useRouter();

  return (
    <SearchSectionLayout
      title="술에 대해서 잘 설명하는 태그를 선택해주세요"
      stepString="3 / 6"
      onClickPrevButton={() => {
        router.push("/upload/upload1");
      }}
      onClickNextButton={() => {
        router.push("/upload/upload3");
      }}
      buttonText="다음 단계로"
    >
      <Wrap spacing="8px">
        {MOCKUP_TAGS.map((tag, idx) => (
          <Tag key={idx} size="lg">
            {tag.name}
          </Tag>
        ))}
      </Wrap>
    </SearchSectionLayout>
  );
}

export default Upload2Page;
