import { Input, InputGroup, InputLeftElement, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Search2Icon } from "@chakra-ui/icons";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import SimpleDrinkCard from "../../components/common/SimpleDrinkCard";
import { MOCKUP_KIND_OF_DRINKS } from "../../mockups/kindOfDrink";

function Upload3Page() {
  const router = useRouter();

  return (
    <SearchSectionLayout
      title="필요한 주류는 뭐가 있나요?"
      stepString="4 / 6"
      onClickPrevButton={() => {
        router.push("/upload/upload2");
      }}
      onClickNextButton={() => {
        router.push("/upload/upload4");
      }}
      buttonText="다음 단계로"
    >
      <InputGroup size="lg" alignItems="center" marginBottom="20px">
        {/* eslint-disable-next-line react/no-children-prop */}
        <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.400" />} />
        <Input variant="filled" bgColor="white" borderRadius="99px" placeholder="주류 찾기" />
      </InputGroup>

      <SimpleGrid columns={2} spacing="20px">
        {MOCKUP_KIND_OF_DRINKS.map((kind, idx) => (
          <SimpleDrinkCard key={idx} name={kind.name} imageSrc={kind.photo} />
        ))}
      </SimpleGrid>
    </SearchSectionLayout>
  );
}

export default Upload3Page;
