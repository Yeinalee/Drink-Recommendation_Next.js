import { Button, Input, Text, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";

function Upload4Page() {
  const router = useRouter();

  return (
    <SearchSectionLayout
      title="추가 재료와 레시피를 적어주세요"
      stepString="5 / 6"
      onClickPrevButton={() => {
        router.push("/upload/upload3");
      }}
      onClickNextButton={() => {
        router.push("/upload/upload5");
      }}
      buttonText="다음 단계로"
    >
      <Text fontSize="20px" fontWeight="bold">
        재료
      </Text>
      <Input
        variant="filled"
        bgColor="white"
        borderRadius="24px"
        placeholder="재료 입력"
        w="390px"
        h="48px"
        marginTop={"20px"}
      />
      <Text fontSize="20px" fontWeight="bold" paddingTop={"50px"} paddingBottom={"20px"}>
        Step 1
      </Text>
      <Textarea
        size="md"
        placeholder="레시피 설명"
        fontSize={"20px"}
        focusBorderColor="white"
        backgroundColor="white"
        borderRadius={"24px"}
        padding={"12px 16px 12px 16px"}
        marginBottom="20px"
        h="120px"
        w="390px"
      />
      <Button
        backgroundColor="white"
        color={"black"}
        borderRadius="24px"
        h="72px"
        w="390px"
        fontSize={"24px"}
        fontWeight="bold"
      >
        단계 추가
      </Button>
    </SearchSectionLayout>
  );
}

export default Upload4Page;
