import { Box, Flex, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import defaultDrinkImage from "/public/images/drink.png";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";

function DrinkCard({ id, imageSrc, imageAlt, name, description, likeCount, commentCount }) {
  return (
    <Link href={`/recipes/${id}`}>
      <Box
        _hover={{ cursor: "pointer" }}
        minWidth="100px"
        borderRadius="24px"
        bgColor="white"
        overflow="hidden"
      >
        <Flex direction="column">
          <Box position="relative" height="200px">
            <Image
              src={imageSrc ?? defaultDrinkImage}
              alt={imageAlt ?? "주류 이미지"}
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <VStack spacing="8px" align="flex-start" height="90px" padding="12px">
            <Heading noOfLines={1} size="sm">
              {name}
            </Heading>
            <Text noOfLines={1} fontSize="10px">
              {description}
            </Text>
            <Flex width="100%" justify="flex-end" columnGap="12px">
              <HStack spacing="4px">
                <Icon as={AiFillHeart} w="12px" h="12px" color="#EE5757" />
                <Text fontSize="12px" color="#EE5757">
                  {likeCount}
                </Text>
              </HStack>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </Link>
  );
}

export default DrinkCard;
