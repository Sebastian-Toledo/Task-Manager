import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderPlaceholder from "../Components/Atoms/OrderPlaceholder";
import BigOrder from "../Components/Molecules/BigOrder";
import Order from "../Type/Order";
import { Flex } from "@chakra-ui/react";

const OrderPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    fetch(`https://63c06874e262345656fe70d5.mockapi.io/api/v1/Task/${orderId}`)
      .then((response) => response.json())
      .then((order) => setOrder(order));
  }, []);

  if (!order) {
    return <OrderPlaceholder />;
  }

  return (
    <Flex backgroundColor="#f5f4f9" justifyContent="space-around">
      <BigOrder order={order} />
    </Flex>
  );
};

export default OrderPage;
