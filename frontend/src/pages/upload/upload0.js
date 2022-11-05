import { Box, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";

function UploadStartPage() {
    const router = useRouter();

    return (
        <SearchSectionLayout
            title="레시피의 이름을 입력해주세요"
            stepString="1 / 6"
            onClickPrevButton={() => {
                router.push("/");
            }
            }

            onClickNextButton={() => {
                router.push("/upload/upload1");
            }
            }
            buttonText="다음 단계로"
        >
            <Input size="md" placeholder='레시피 이름' fontSize={"20px"} focusBorderColor='white'
                backgroundColor="white" borderRadius={100}
                h="48px" w="390px"
            />
        </SearchSectionLayout >
    );
}

export default UploadStartPage;