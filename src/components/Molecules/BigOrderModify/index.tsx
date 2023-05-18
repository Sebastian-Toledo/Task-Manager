import Order from "../../../Type/Order";
import { Flex, Text, Divider, Heading } from "@chakra-ui/react";
import InputDate from "../../Atoms/InputDate/Index";
import InputDescription from "../../Atoms/InputDescription";
import InputText from "../../Atoms/InputText";
import { CalendarIcon } from "@chakra-ui/icons";
import NavItem from "../../Atoms/NavItem";
import Routes from "../../../Router/Routes";
import CardModify from "../../Atoms/CardModify";
import Modify from "../../../Type/Modify";

interface Props {
  order: Order;
}
const renderContent = (order: Order) => {
  if (order.modify?.length !== undefined) {
    return order.modify.map(renderModify);
  }
};

const renderModify = (modify: Modify) => {
  return <CardModify modify={modify} />;
};

const BigOrderModify = (props: Props) => {
  const { comment, employeeCharge, previewDate, title, employee, deadLine } =
    props.order;

  return (
    <Flex flexDirection="column" gap="5" padding="10">
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
            <Heading size="lg">Historial de Modificaciones</Heading>
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
              <InputText name="Titulo" value={title} disabled={true} />
              <InputText
                name="Empleado a cargo"
                disabled={true}
                value={employee}
              />
            </Flex>
          </Flex>
          <Text as="b" color="gray.500">
            EXTENSIÓN DE PLAZO VIGENTE
          </Text>
          <Flex
            flexDirection="column"
            gap="5"
            backgroundColor="white"
            padding="10"
          >
            <Flex>
              <InputText
                name="Empleado que modifico el plazo"
                value={employeeCharge}
                disabled={true}
              />
            </Flex>
            <Flex gap="5">
              <InputDate
                text="Actual Fecha de entrega"
                value={deadLine}
                disabled={true}
              />
              <InputDate
                text="Fecha anterior de entrega"
                disabled={true}
                value={previewDate}
              />
            </Flex>
            <Flex>
              <InputDescription
                name="Comentario del empleado"
                value={comment}
                disabled={true}
              />
            </Flex>
            <Flex />
          </Flex>
          <Text as="b" color="gray.500">
            EXTENSIÓN DE PLAZOS ANTERIORES
          </Text>
          <Flex
            border="2px"
            textAlign="center"
            borderColor="#a0aec075"
            display="flex"
            padding="2"
            justifyContent="space-between"
          >
            <Flex>
              <Text as="b">Empleado que modifica</Text>
            </Flex>
            <Flex as="b" mr="8">
              <Text>Plazo Modificado</Text>
            </Flex>
            <Flex>
              <Text as="b" mr="10">
                Plazo Anterior
              </Text>
            </Flex>
            <Flex>
              <Text as="b" ml="8" mr="10">
                Comentario
              </Text>
            </Flex>
          </Flex>
          {renderContent(props.order)}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BigOrderModify;
