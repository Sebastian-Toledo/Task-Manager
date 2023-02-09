import CardOrder from "../../Atoms/CardOrder";
import {
  Center,
  Divider,
  Flex,
  Input,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import Order from "../../../Type/Order";
import { useState, useEffect } from "react";
import OrderPlaceholder from "../../Atoms/OrderPlaceholder";
import NavItem from "../../Atoms/NavItem";
import { AiFillFileAdd } from "react-icons/ai";
import Routes from "../../../Router/Routes";
import { Heading } from "@chakra-ui/react";

const ListOrder = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [author, setAuthor] = useState(" ");
  const [placement, setPlacement] = useState("En Proceso");

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
  const onChange = (event: any) => {
    setAuthor(event.currentTarget.value);
  };

  const renderOrder = (order: Order, index: number) => (
    <CardOrder order={order} key={`${JSON.stringify(order)}/${index}`} />
  );

  const renderContent = () => {
    if (!orders.length) {
      return [0, 1, 2].map((item) => <OrderPlaceholder key={item} />);
    }

    return orders.filter(filterOrders).map(renderOrder);
  };

  const filterOrders = (order: Order) => {
    if (!author) {
      return true;
    }
    return order.author.toLowerCase().includes(author.toLowerCase());
  };

  return (
    <Flex flexDirection="column" gap="5">
      <Flex backgroundColor="white" flexDirection="column" gap="2" padding="5">
        <Heading alignSelf="center" paddingBottom="2">
          Menu
        </Heading>
        <Divider />
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction="row" mb="4" gap="5">
            <Radio value="En Proceso">En Proceso</Radio>
            <Radio value="Terminados">Terminados</Radio>
            <Radio value="Entregados">Entregados</Radio>
            <Radio value="Anulados">Anulados</Radio>
            <Center height="50px" gap="10" paddingLeft="10">
              <Divider orientation="vertical" />
              <NavItem key="CREATE" icon={AiFillFileAdd} to={Routes.CREATE}>
                Crear Pedido
              </NavItem>
            </Center>
          </Stack>
        </RadioGroup>
        <Input
          type="text"
          onChange={onChange}
          _placeholder={{ color: "black" }}
          variant="outline"
          placeholder="Buscador Cliente"
        />
      </Flex>

      <List paddingBottom="2" paddingTop="2">
        <ListItem backgroundColor="white" alignItems="center" padding="2">
          <Divider height="2px" />
          {renderContent()}
        </ListItem>
      </List>
    </Flex>
  );
};

export default ListOrder;
