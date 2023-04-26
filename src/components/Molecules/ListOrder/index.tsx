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
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import Order from "../../../Type/Order";
import { useState, useEffect } from "react";
import OrderPlaceholder from "../../Atoms/OrderPlaceholder";
import NavItem from "../../Atoms/NavItem";
import { AiFillFileAdd } from "react-icons/ai";
import Routes from "../../../Router/Routes";
import { Heading } from "@chakra-ui/react";
import { HOST } from "../../../utils/envirementConfiguration";
import cardOrderStyles from "../../Atoms/CardOrder/styles";
import CompletedTasks from "../../Atoms/CompletedTasks";

const ListOrder = () => {
  const [getOrders, setOrders] = useState<Order[]>([]);
  const [getAuthor, setAuthor] = useState("");
  const [getEmployee, setEmployee] = useState("");
  const [getSelect, setSelect] = useState("Cliente");
  const [placement, setPlacement] = useState("In Process");

  // const showDate = async () => {
  //   const response = await fetch(`${HOST}/task`);
  //   const data: Order[] = await response.json();
  //   setOrders(data);
  // };

  useEffect(() => {
    fetch(`http://${HOST}/task`)
      .then((response) => response.json())
      .then((orderss: Order[]) => {
        setOrders(orderss);
      });
  }, []);

  const onChange = (event: any) => {
    if (getSelect === "Empleado") {
      setEmployee(event.currentTarget.value);
    }
    if (getSelect === "Cliente") {
      setAuthor(event.currentTarget.value);
    }
  };

  const changeInput = (order: Order) => {
    if (getSelect === "Cliente")
      return order.author.toLowerCase().includes(getAuthor.toLowerCase());

    if (getSelect === "Empleado")
      return order.employee.toLowerCase().includes(getEmployee.toLowerCase());
  };

  const renderOrder = (order: Order, index: number) => {
    return (
      <CardOrder order={order} key={`${JSON.stringify(order)}/${index}`} />
    );
  };

  const stateFilter = (order: Order) => {
    console.log(order.stateOrder.includes(placement));
    switch (placement) {
      case "In Process":
        return order.stateOrder.includes(placement);
      case "Finished":
        return order.stateOrder.includes(placement);
      case "Delivered":
        return order.stateOrder.includes(placement);
      case "Canceled":
        return order.stateOrder.includes(placement);
    }
  };

  const filterTasks = (order: Order) => {
    if (
      order.stateOrder === placement &&
      getAuthor === "" &&
      getEmployee === ""
    ) {
      console.log("entra ", stateFilter(order));
      return stateFilter(order);
    } else {
      console.log(changeInput(order) && stateFilter(order));
      return changeInput(order) && stateFilter(order);
    }
  };

  const renderContent = () => {
    if (!getOrders.length) {
      return [0, 1, 2].map((item) => <OrderPlaceholder key={item} />);
    } else if (0 === getOrders.filter(filterTasks).length) {
      return CompletedTasks(placement);
    }
    return getOrders.filter(filterTasks).map(renderOrder);
  };

  return (
    <Flex flexDirection="column" gap="5" maxW="75%">
      <Flex backgroundColor="white" flexDirection="column" gap="2" padding="5">
        <Heading alignSelf="center" paddingBottom="2">
          Menu
        </Heading>
        <Divider />
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction="row" mb="4" gap="5">
            <Radio value="In Process">En Proceso</Radio>
            <Radio value="Finished">Terminados</Radio>
            <Radio value="Delivered">Entregados</Radio>
            <Radio value="Canceled">Anulados</Radio>
            <Center height="50px" gap="10" paddingLeft="10">
              <Divider orientation="vertical" />
              <NavItem key="CREATE" icon={AiFillFileAdd} to={Routes.CREATE}>
                Crear Pedido
              </NavItem>
            </Center>
          </Stack>
        </RadioGroup>
        <Flex gap="2">
          <Select
            w="15%"
            value={getSelect}
            onChange={(e) => setSelect(e.target.value)}
          >
            {" "}
            <option value="Cliente">Cliente</option>
            <option value="Empleado">Empleado</option>
          </Select>
          <Input
            w="84%"
            type="text"
            onChange={onChange}
            _placeholder={{ color: "black" }}
            variant="outline"
            placeholder="Buscador"
          />{" "}
        </Flex>
      </Flex>

      <List paddingBottom="2" paddingTop="2">
        <ListItem backgroundColor="white" alignItems="center" padding="2">
          <Divider height="2px" />
          <Flex gap="3" sx={cardOrderStyles.cardCharacteristics}>
            <Text>Titulo</Text>
            <Text>Cliente</Text>
            <Text>Fecha Ingreso</Text>
            <Text>Fecha Limite</Text>
            <Text>Estado</Text>
            <Text>Empleado</Text>
            <Text>Presupuesto</Text>
          </Flex>
          {renderContent()}
        </ListItem>
      </List>
    </Flex>
  );
};

export default ListOrder;
