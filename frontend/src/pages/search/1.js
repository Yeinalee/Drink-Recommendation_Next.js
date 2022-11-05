import { SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import SimpleDrinkCard from "../../components/common/SimpleDrinkCard";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import { LOCAL_STORAGE_KEY } from "../../constants/localStorage";
import { MOCKUP_KIND_OF_DRINKS } from "../../mockups/kindOfDrink";

function PreferredKindSearchPage() {
  const router = useRouter();

  const [kinds, setKinds] = useState(
    MOCKUP_KIND_OF_DRINKS.map((kind) => ({ ...kind, selected: false }))
  );

  const handleClickNextButton = useCallback(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY.SEARCH_KINDS_KEY,
      JSON.stringify(kinds.filter((kind) => kind.selected))
    );
    router.push("/search/2");
  }, [router, kinds]);

  return (
    <SearchSectionLayout
      title="어떤 주종을 선호하시나요?"
      stepString="1 / 3"
      onClickPrevButton={() => {
        router.push("/search/0");
      }}
      onClickNextButton={handleClickNextButton}
      buttonText="다음 단계로"
    >
      <SimpleGrid columns={2} spacing="20px" overflowY="scroll">
        {kinds.map((kind, idx) => (
          <SimpleDrinkCard
            onClick={() => {
              setKinds([
                ...kinds.slice(0, idx),
                { ...kind, selected: !kind.selected },
                ...kinds.slice(idx + 1, kinds.length),
              ]);
            }}
            _hover={{
              cursor: "pointer",
            }}
            selected={kind.selected}
            key={idx}
            name={kind.name}
            imageSrc={kind.photo}
          />
        ))}
      </SimpleGrid>
    </SearchSectionLayout>
  );
}

export default PreferredKindSearchPage;
