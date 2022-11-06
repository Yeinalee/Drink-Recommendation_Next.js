import { Center, Spinner } from "@chakra-ui/react";

function FullPageLoading() {
  return (
    <Center width="100%" height="100vh">
      <Spinner size="xl" />
    </Center>
  );
}

export default FullPageLoading;
