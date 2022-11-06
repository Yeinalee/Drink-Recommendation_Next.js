import { Input, InputGroup, InputLeftElement, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Search2Icon } from "@chakra-ui/icons";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import SimpleDrinkCard from "../../components/common/SimpleDrinkCard";
import { useCallback, useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "../../constants/localStorage";
import useAlcohols from "../../hooks/useAlcohols";

function IngredientsSearchPage() {
  const [alcoholTypes, setAlcoholTypes] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY.SEARCH_KINDS_KEY);
    if (!data) {
      return;
    }
    setAlcoholTypes(JSON.parse(data));
  }, []);

  const { data } = useAlcohols(alcoholTypes);

  const router = useRouter();

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (!data) {
      return;
    }

    setIngredients(data.map((ingredient) => ({ ...ingredient, selected: false })));
  }, [data]);

  const [selectedCount, setSelectedCount] = useState(0);

  const handleClickNextButton = useCallback(() => {
    const selectedTags = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.SEARCH_TAGS_KEY));
    const selectedIngredientIds = ingredients
      .filter((ingredient) => ingredient.selected)
      .map((ingredient) => ingredient.id);

    const tagQueries = selectedTags.reduce((prev, cur) => `${prev}&tag=${cur}`, "").slice(1);
    const queryString = selectedIngredientIds.reduce(
      (prev, cur) => `${prev}&alcoholId=${cur}`,
      tagQueries
    );

    router.push(`/search?${queryString}`);
  }, [router, ingredients]);

  return (
    <SearchSectionLayout
      title="조합에 넣고 싶은 주류를 선택해주세요"
      stepString="3 / 3"
      onClickPrevButton={() => {
        router.push("/search/2");
      }}
      onClickNextButton={handleClickNextButton}
      buttonText="검색하기"
    >
      <SimpleGrid columns={2} spacing="20px">
        {ingredients.map((ingredient, idx) => (
          <SimpleDrinkCard
            key={idx}
            onClick={() => {
              if (ingredient.selected) {
                setSelectedCount(selectedCount - 1);
              } else {
                setSelectedCount(selectedCount + 1);
              }

              setIngredients([
                ...ingredients.slice(0, idx),
                { ...ingredient, selected: !ingredient.selected },
                ...ingredients.slice(idx + 1, ingredients.length),
              ]);
            }}
            _hover={{
              cursor: "pointer",
            }}
            selected={ingredient.selected}
            name={ingredient.name}
            imageSrc={ingredient.photoUrl}
          />
        ))}
      </SimpleGrid>
    </SearchSectionLayout>
  );
}

export default IngredientsSearchPage;
