import { Input, InputGroup, InputLeftElement, SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Search2Icon } from "@chakra-ui/icons";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import SimpleDrinkCard from "../../components/common/SimpleDrinkCard";
import { useCallback, useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "../../constants/localStorage";
import useAlcoholsWithoutQuery from "../../hooks/useAlcoholsWithoutQuery";

function Upload4Page() {
  const { data } = useAlcoholsWithoutQuery();

  const router = useRouter();

  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    if (!data) {
      return;
    }

    setDrinks(data.map((drink) => ({ ...drink, selected: false })));
  }, [data]);

  const [selectedCount, setSelectedCount] = useState(0);

  const handleClickNextButton = useCallback(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY.UPLOAD_ALCOHOLS_KEY,
      JSON.stringify(drinks.filter((drink) => drink.selected).map((drink) => drink.id))
    );
    router.push("/upload/5");
  }, [router, drinks]);

  return (
    <SearchSectionLayout
      title="필요한 주류는 뭐가 있나요?"
      stepString="4 / 6"
      onClickPrevButton={() => {
        router.push("/upload/3");
      }}
      onClickNextButton={handleClickNextButton}
      buttonText="다음 단계로"
      disableButton={selectedCount <= 0}
    >
      <InputGroup size="lg" alignItems="center" marginBottom="20px">
        {/* eslint-disable-next-line react/no-children-prop */}
        <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.400" />} />
        <Input variant="filled" bgColor="white" borderRadius="99px" placeholder="주류 찾기" />
      </InputGroup>

      <SimpleGrid columns={2} spacing="20px">
        {drinks.map((drink, idx) => (
          <SimpleDrinkCard
            key={idx}
            onClick={() => {
              if (drink.selected) {
                setSelectedCount(selectedCount - 1);
              } else {
                setSelectedCount(selectedCount + 1);
              }

              setDrinks([
                ...drinks.slice(0, idx),
                { ...drink, selected: !drink.selected },
                ...drinks.slice(idx + 1, drinks.length),
              ]);
            }}
            _hover={{
              cursor: "pointer",
            }}
            selected={drink.selected}
            name={drink.name}
            imageSrc={process.env.NEXT_PUBLIC_SERVER_URL + "/" + drink.photoKey}
          />
        ))}
      </SimpleGrid>
    </SearchSectionLayout>
  );
}

export default Upload4Page;
