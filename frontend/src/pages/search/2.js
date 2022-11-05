import { Tag, Wrap } from "@chakra-ui/react";
import { useRouter } from "next/router";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import { MOCKUP_TAGS } from "../../mockups/tags";

function TagSearchPage() {
  const router = useRouter();

  return (
    <SearchSectionLayout
      title="선호하시는 태그를 선택해주세요"
      stepString="2 / 3"
      onClickPrevButton={() => {
        router.push("/search/1");
      }}
      onClickNextButton={() => {
        router.push("/search/3");
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

export default TagSearchPage;
