import { Flex } from "@chakra-ui/react";
import ListOrder from "../Components/Molecules/ListOrder";

const HomePage = () => {
  return (
    <Flex backgroundColor="#f5f4f9" justifyContent="space-around">
      <ListOrder />
    </Flex>
  );
};

export default HomePage;
