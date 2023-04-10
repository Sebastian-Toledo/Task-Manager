import { Flex, Text, Divider, Heading } from "@chakra-ui/react";
import ButtonCancel from "../../Atoms/ButtonCancel";
import ButtonSave from "../../Atoms/ButtonSave";
import InputDate from "../../Atoms/InputDate/Index";
import InputText from "../../Atoms/InputText";
import InputDescription from "../../Atoms/InputDescription";
import Order from "../../../Type/Order";
import Routes from "../../../Router/Routes";
import NavItem from "../../Atoms/NavItem";
import { CalendarIcon } from "@chakra-ui/icons";

interface Props {
  order: Order;
}

const ModifyTimeLimit = (props: Props) => {
  const { title, deadLine, employee, comment, dateChange } = props.order;

  return (
    <Flex
      backgroundColor="#f5f4f9"
      flexDirection="column"
      gap="5"
      justifyContent="space-around"
    >
      <Flex flexDirection="column" gap="5">
        <Flex justifyContent="start">
          <NavItem key="HOME" to={Routes.HOME}>
            {"< Volver atrás"}
          </NavItem>
        </Flex>
        <Flex gap="5" alignItems="center" justifyContent="center">
          <CalendarIcon boxSize={6} />
          <Heading size="lg">Ver o modificar un pedido</Heading>
        </Flex>
        <Flex gap="5" flexDirection="column">
          <Divider w="868px" border="1px" color="gray.700" />
          <Text as="b" color="gray.500">
            DATOS DEL PEDIDO
          </Text>
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="5">
        <Flex
          flexDirection="column"
          gap="5"
          backgroundColor="white"
          padding="10"
        >
          <Flex gap="5">
            <InputText lable="Titulo" value={title} disabled={true} />
            <InputText
              lable="Empleado a cargo"
              disabled={true}
              value={employee}
            />
          </Flex>
        </Flex>
        <Text as="b" color="gray.500">
          EXTENSIÓN DE PLAZO
        </Text>
        <Flex
          flexDirection="column"
          gap="5"
          backgroundColor="white"
          padding="10"
        >
          <Flex>
            <InputText
              lable="Empleado que extiende"
              placeholder="Nombre del empleado..."
            />
          </Flex>
          <Flex gap="5">
            <InputDate
              text="Fecha de entrega"
              disabled={true}
              value={deadLine}
            />
            <InputDate text="Nueva fecha de entrega" />
          </Flex>
          <Flex>
            <InputDescription
              placeholder="Escribir un mensaje..."
              lable="Razón por la cual se extiende el plazo"
            />
          </Flex>
          <Flex />
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="flex-end" gap="5">
        <ButtonCancel />
        <ButtonSave />
      </Flex>
    </Flex>
  );
};

export default ModifyTimeLimit;
