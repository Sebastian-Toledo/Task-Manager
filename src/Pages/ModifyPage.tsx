import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Order from "../Type/Order";
import ModifyOrder from "../Components/Molecules/ModifyOrder/index";
import OrderPlaceholder from "../Components/Atoms/OrderPlaceholder";

const ModifyPage = () => {
  const { orderId } = useParams();
  const [orderModify, setOrderModify] = useState<Order>();

  useEffect(() => {
    fetch(`https://63c06874e262345656fe70d5.mockapi.io/api/v1/Task/${orderId}`)
      .then((response) => response.json())
      .then((order) => setOrderModify(order));
  }, []);

  if (!orderModify) {
    return <OrderPlaceholder />;
  }

  return (
    <Flex backgroundColor="#f5f4f9" justifyContent="space-around">
      <ModifyOrder order={orderModify} />
    </Flex>
  );
};

export default ModifyPage;
