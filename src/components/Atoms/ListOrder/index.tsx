import CardOrder from "../CardOrder";
import PlacementExample from "../NavBar/NavBar";
import { Divider, List, ListItem } from "@chakra-ui/react";
import Order from "../../../Type/Order";
import { useState, useEffect } from "react";

const ListOrder = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  //const [stateOrders, setStateOrders] = useState(" ");

  useEffect(() => {
    fetch(`https://63c06874e262345656fe70d5.mockapi.io/api/v1/Task`)
      .then((response) => response.json())
      .then((order) => setOrders(order));
  }, []);

  // const filterOrders = (order: Order) => {
  //   if (!stateOrders) {
  //     return true;
  //   }
  //   return order.stateOrder
  //     .toLowerCase()
  //     .includes(order.stateOrder.toLowerCase());
  // };

  const renderOrder = (order: Order, index: number) => (
    <CardOrder order={order} key={`${JSON.stringify(order)}/${index}`} />
  );

  const rederContent = () => {
    if (!orders.length) {
      return "hola";
    }
    return orders.map(renderOrder);
  };

  return (
    <List backgroundColor="red" paddingBottom="2" paddingTop="2">
      <ListItem backgroundColor="gray" alignItems="center" padding="2">
        <PlacementExample />
        <Divider height="2px" />
        {rederContent()}
      </ListItem>
    </List>
  );
};

export default ListOrder;
