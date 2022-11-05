import { Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";

function Upload1Page() {
    const router = useRouter();

    return (
        <SearchSectionLayout
            title="술에 대해 간단히 소개해주세요"
            stepString="2 / 6"
            onClickPrevButton={() => {
                router.push("/upload/upload0");
            }
            }

            onClickNextButton={() => {
                router.push("/upload/upload2");
            }
            }
            buttonText="다음 단계로"
        >
            <Textarea size="md" placeholder='레시피 설명'
                fontSize={"20px"} focusBorderColor='white'
                backgroundColor="white" borderRadius={"24px"}
                padding={"12px 16px 12px 16px"}
                h="200px" w="390px"
            />
        </SearchSectionLayout >
    );
}

export default Upload1Page;