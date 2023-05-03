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
  const [placement, setPlacement] = useState("En Proceso");

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
    console.log();
    switch (placement) {
      case "En Proceso":
        return (
          order.stateOrder.includes(placement) ||
          order.stateOrder.includes("In Process")
        );
      case "Terminados":
        return (
          order.stateOrder.includes(placement) ||
          order.stateOrder.includes("Finished")
        );
      case "Entregados":
        return (
          order.stateOrder.includes(placement) ||
          order.stateOrder.includes("Delivered")
        );
      case "Anulados":
        return (
          order.stateOrder.includes(placement) ||
          order.stateOrder.includes("Canceled")
        );
    }
  };

  const filterTasks = (order: Order) => {
    if (
      order.stateOrder === placement &&
      getAuthor === "" &&
      getEmployee === ""
    ) {
      return stateFilter(order);
    } else {
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
          <Flex gap="5" sx={cardOrderStyles.cardCharacteristics}>
            <Flex>
              <Text as="b" ml="2">
                Titulo
              </Text>
            </Flex>
            <Flex>
              <Text as="b" ml="10">
                Cliente
              </Text>
            </Flex>
            <Flex as="b" ml="4">
              <Text>Fecha Ingreso</Text>
            </Flex>
            <Flex>
              <Text as="b">Fecha Limite</Text>
            </Flex>
            <Flex>
              <Text as="b" ml="2">
                Estado
              </Text>
            </Flex>
            <Flex>
              <Text as="b" ml="2">
                Empleado
              </Text>
            </Flex>
            <Flex>
              <Text as="b" mr="2">
                Presupuesto
              </Text>
            </Flex>
          </Flex>
          {renderContent()}
        </ListItem>
      </List>
    </Flex>
  );
};

export default ListOrder;
