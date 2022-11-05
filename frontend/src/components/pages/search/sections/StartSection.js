import { Box, Button, Container, Heading, VStack } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";
import cocktailImage from "/public/images/cocktail.png";

function StartSection() {
  return (
    <Box position="relative" as="section" paddingTop="40px" height="100vh">
      <Container>
        <VStack spacing="32px" align="flex-start">
          <Link href="/">
            <ChevronLeftIcon w="48px" h="48px" marginLeft="-12px" />
          </Link>
          <Heading fontSize="32px">취향에 맞는 술 제조 레시피를 찾아볼까요?</Heading>
        </VStack>

        <Box position="absolute" top="calc(50% - 80px)" left="calc(50% - 80px)">
          <Image src={cocktailImage} alt="술 이미지" width={160} height={160} objectFit="contain" />
        </Box>

        <Button
          variant="solid"
          size="lg"
          width="calc(100% - 40px)"
          position="absolute"
          bottom="60px"
          margin="0 auto"
        >
          시작하기
        </Button>
      </Container>
    </Box>
  );
}

export default StartSection;
