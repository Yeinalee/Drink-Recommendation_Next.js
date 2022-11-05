import { Input, InputGroup, InputLeftElement, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Search2Icon } from "@chakra-ui/icons";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import SimpleDrinkCard from "../../components/common/SimpleDrinkCard";
import { MOCKUP_KIND_OF_DRINKS } from "../../mockups/kindOfDrink";

function TagSearchPage() {
  const router = useRouter();

  return (
    <SearchSectionLayout
      title="조합에 넣고 싶은 주류를 선택해주세요"
      stepString="3 / 3"
      onClickPrevButton={() => {
        router.push("/search/2");
      }}
      onClickNextButton={() => {
        router.push("/search");
      }}
      buttonText="검색하기"
    >
      <InputGroup size="lg" alignItems="center" marginBottom="20px">
        {/* eslint-disable-next-line react/no-children-prop */}
        <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.400" />} />
        <Input variant="filled" bgColor="white" borderRadius="99px" placeholder="재료 찾기" />
      </InputGroup>

      <SimpleGrid columns={2} spacing="20px">
        {MOCKUP_KIND_OF_DRINKS.map((kind, idx) => (
          <SimpleDrinkCard key={idx} name={kind.name} imageSrc={kind.photo} />
        ))}
      </SimpleGrid>
    </SearchSectionLayout>
  );
}

export default TagSearchPage;
