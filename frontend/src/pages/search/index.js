import { SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import DrinkCard from "../../components/common/DrinkCard";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";

function SearchResultPage() {
  const router = useRouter();

  const { data, error } = useSWR(`/recipes?${router.asPath.split("?")[1]}`, fetcher);

  const loading = !data && !error;

  return (
    <SearchSectionLayout
      title="검색 결과"
      stepString="홈으로"
      onClickPrevButton={() => {
        router.push("/");
      }}
    >
      <SimpleGrid columns={2} spacing="20px">
        {!loading && data.length === 0 ? (
          <Text>검색 결과가 없습니다.</Text>
        ) : (
          data?.map((drink) => (
            <DrinkCard
              id={drink.id}
              key={drink.id}
              imageSrc={drink.photoUrl}
              name={drink.name}
              description={drink.description}
              likeCount={drink.likeCount}
            />
          ))
        )}
      </SimpleGrid>
    </SearchSectionLayout>
  );
}

export default SearchResultPage;
