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
  Center,
} from "@chakra-ui/react";
import Image from "next/image";
import defaultDrinkImage from "/public/images/drink.png";
import aperollImage from "/public/images/aperoll.png";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { AiFillHeart } from "react-icons/ai";

function DetailPage({ imageSrc, imageAlt }) {
  return (
    <>
      <Box bgColor="white" height="300px" padding="0px">
        <VStack spacing="8px" align="flex-start" height="50px" padding="12px">
          <Flex width="100%" justify="flex-start" columnGap="12px">
            <ChevronLeftIcon w="30px" h="30px" color="primary" />
            <Spacer />
            <Icon as={AiFillHeart} w="24px" h="24px" color="#EE5757" />
            <Text fontSize="15px" color="black" as="b">
              12
            </Text>
          </Flex>
        </VStack>

        <Box minWidth="200px" borderRadius="24px" bgColor="white">
          <Flex direction="column">
            <Box position="relative" height="200px">
              <Image
                src={imageSrc ?? defaultDrinkImage}
                alt={imageAlt ?? "주류 이미지"}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Box>
      </Box>

      <Container overflow={"auto"} height="100vh">
        <VStack spacing="8px" align="flex-start" height="90px" padding="12px">
          <Text fontSize="20px" as="b">
            아페롤 스프리츠(Aperol Spritz)
          </Text>
          <HStack spacing={4}>
            <Tag
              variant="solid"
              bgColor="primary"
              borderRadius="full"
              fontSize="12px"
              color="white"
            >
              여성이 선호하는
            </Tag>
            <Tag
              variant="solid"
              bgColor="primary"
              borderRadius="full"
              fontSize="12px"
              color="white"
            >
              연인끼리
            </Tag>
            <Tag
              variant="solid"
              bgColor="primary"
              borderRadius="full"
              fontSize="12px"
              color="white"
            >
              달달한
            </Tag>
          </HStack>
          <Text fontSize="20px" as="b">
            필요한 주류
          </Text>

          <Box minWidth="150px" borderRadius="24px" bgColor="white">
            <Flex direction="column">
              <Box position="relative" height="150px">
                <Image
                  src={imageSrc ?? aperollImage}
                  alt={imageAlt ?? "주류 이미지"}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
              <Center fontSize="15px" as="b">
                아페롤
              </Center>
            </Flex>
          </Box>
          <Text fontSize="12px">
            *아페롤 : 씁쓸한 비터 오렌지와 새콤한 맛으로 15도, 17도 버전 & 가격 : 750mL 기준
            38,000원
          </Text>
          <Text fontSize="20px" as="b">
            재료
          </Text>
          <Text fontSize="12px">
            프로세코 60mL, 아페롤 40mL, 탄산수 20mL, 오렌지 슬라이스 1/2조각, 큐브 얼음
          </Text>
          <Text fontSize="20px" as="b">
            레시피
          </Text>
          <Tag variant="solid" bgColor="white" borderRadius="full" color="black" fontSize="12px">
            1. 잔에 얼음을 채운다.
          </Tag>
          <Tag variant="solid" bgColor="white" borderRadius="full" color="black" fontSize="12px">
            2. 오렌지 슬라이스를 제외한 나머지 재료를 넣고 바 스푼으로 젓는다.
          </Tag>
          <Tag variant="solid" bgColor="white" borderRadius="full" color="black" fontSize="12px">
            3. 오렌지 슬라이스를 넣는다.
          </Tag>
        </VStack>
      </Container>
    </>
  );
}
export default DetailPage;
