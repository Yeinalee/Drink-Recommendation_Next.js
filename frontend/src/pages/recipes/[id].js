import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
  Tag,
  Spacer,
  IconButton,
  Wrap,
} from "@chakra-ui/react";
import Image from "next/image";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import SimpleDrinkCard from "../../components/common/SimpleDrinkCard";
import { serverAxios } from "../../utils/axios";

function DetailPage() {
  const router = useRouter();
  const recipeId = router.query.id;

  const { data, error, mutate } = useSWR(recipeId ? `/recipes/${recipeId}` : null, fetcher);

  const loading = !data && !error;

  if (loading) return "loading";

  return (
    <Box>
      <Box bgColor="white" height="300px" padding="12px">
        <VStack spacing="3px" align="flex-start" height="50px" padding="12px">
          <Flex width="100%" justify="flex-start" columnGap="12px">
            <IconButton
              onClick={() => {
                router.push("/");
              }}
              variant="ghost"
              icon={<ChevronLeftIcon w="30px" h="30px" color="#5C5769" />}
            />
            <Spacer />
            <HStack>
              <IconButton
                onClick={() => {
                  try {
                    serverAxios.post(`/recipes/${recipeId}/likeCount`);
                    mutate({ ...data, likeCount: data.likeCount + 1 });
                  } catch (e) {
                    console.log(e);
                  }
                }}
                variant="ghost"
                icon={<Icon as={AiFillHeart} w="24px" h="24px" color="#EE5757" />}
              />
              <Text fontSize="15px" color="black" as="b">
                {data.likeCount}
              </Text>
            </HStack>
          </Flex>
        </VStack>

        <Box minWidth="200px" borderRadius="24px" bgColor="white" padding="20px">
          <Flex direction="column">
            <Box position="relative" height="200px">
              <Image
                src={process.env.NEXT_PUBLIC_SERVER_URL + "/" + data.photoKey}
                alt={"주류 이미지"}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Box>
      </Box>

      <Container paddingBottom="80px" overflow="hidden">
        <VStack width="100%" align="flex-start" paddingTop="40px" spacing="20px">
          <Text fontSize="32px" as="b">
            {data.name}
          </Text>
          <Wrap spacing={4}>
            {data.tags.map((tag) => (
              <Tag
                key={tag}
                variant="solid"
                bgColor="#5F2FE8"
                borderRadius="full"
                fontSize="15px"
                color="white"
                height="40px"
              >
                {tag}
              </Tag>
            ))}
          </Wrap>

          <Text fontSize="24px" as="b" paddingTop="20px">
            필요한 주류
          </Text>

          <Box width="100%" overflow="hidden">
            <HStack spacing="20px" overflowX="scroll">
              {data.alcohols.map((alcohol) => (
                <SimpleDrinkCard
                  key={alcohol.id}
                  minWidth="185px"
                  name={alcohol.name}
                  imageSrc={process.env.NEXT_PUBLIC_SERVER_URL + "/" + alcohol.photoKey}
                />
              ))}
            </HStack>
          </Box>

          <Text fontSize="24px" as="b" paddingTop="20px">
            재료
          </Text>
          <Text fontSize="16px" color="#5C5769">
            {data.ingredient}
          </Text>
          <Text fontSize="24px" as="b" paddingTop="20px">
            레시피
          </Text>
          {data.detailSteps.split("|").map((step, idx) => (
            <Box
              key={idx}
              variant="solid"
              bgColor="white"
              borderRadius="full"
              color="#5C5769"
              fontSize="16px"
              width="100%"
              padding="12px 16px"
            >
              {step}
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}

export default DetailPage;
