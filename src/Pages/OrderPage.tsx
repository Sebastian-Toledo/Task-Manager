import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderPlaceholder from "../Components/Atoms/OrderPlaceholder";
import BigOrder from "../Components/Molecules/BigOrder";
import Order from "../Type/Order";
import { Flex } from "@chakra-ui/react";
import { HOST } from "../utils/envirementConfiguration";

const OrderPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    fetch(`http://${HOST}/task/${orderId}`)
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
