import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Order from "../Type/Order";
import OrderPlaceholder from "../Components/Atoms/OrderPlaceholder";
import { HOST } from "../utils/envirementConfiguration";
import BigOrderModify from "../Components/Molecules/BigOrderModify";

const HistorialPage = () => {
  const { orderId } = useParams();
  const [orderModify, setOrderModify] = useState<Order>();

  useEffect(() => {
    fetch(`http://${HOST}/task/${orderId}`)
      .then((response) => response.json())
      .then((order) => setOrderModify(order));
  }, []);

  if (!orderModify) {
    return <OrderPlaceholder />;
  }

  return (
    <Flex backgroundColor="#f5f4f9" justifyContent="space-around">
      <BigOrderModify order={orderModify} />
    </Flex>
  );
};

export default HistorialPage;
