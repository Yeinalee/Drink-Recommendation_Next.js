import { SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import SimpleDrinkCard from "../../components/common/SimpleDrinkCard";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import { MOCKUP_KIND_OF_DRINKS } from "../../mockups/kindOfDrink";

function IntroducealcoholPage() {
  const router = useRouter();

  return (
    <SearchSectionLayout
      title="어떤 주종을 선호하시나요?"
      stepString="1 / 3"
      onClickPrevButton={() => {
        router.push("/search/0");
      }}
      onClickNextButton={() => {
        router.push("/search/2");
      }}
      buttonText="다음 단계로"
    >
      <SimpleGrid columns={2} spacing="20px" overflowY="scroll">
        {MOCKUP_KIND_OF_DRINKS.map((kind, idx) => (
          <SimpleDrinkCard
            selected={idx % 2 === 0}
            key={idx}
            name={kind.name}
            imageSrc={kind.photo}
          />
        ))}
      </SimpleGrid>
    </SearchSectionLayout>
  );
}

export default IntroducealcoholPage;
