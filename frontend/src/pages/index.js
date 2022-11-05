import { Container, Heading } from "@chakra-ui/react";
import DrinkCard from "../components/common/DrinkCard";
import drinkImage from "/public/images/drink.png";

function HomePage() {
  return (
    <Container>
      <Heading size="lg" color="primary">
        알는체
      </Heading>
      <DrinkCard
        imageSrc={drinkImage}
        name="레시피"
        description="한줄설명한줄설명한줄설명한줄설명한줄설명"
        likeCount={10}
        commentCount={10}
      />
    </Container>
  );
}

export default HomePage;
