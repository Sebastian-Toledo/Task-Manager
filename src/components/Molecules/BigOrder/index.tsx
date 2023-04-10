import Order from "../../../Type/Order";
import { Flex, Text, Divider, Heading } from "@chakra-ui/react";
import ButtonCancel from "../../Atoms/ButtonCancel";
import ButtonSave from "../../Atoms/ButtonSave";
import InputNumber from "../../Atoms/InputNumber";
import InputPhone from "../../Atoms/InputPhone/Index";
import InputText from "../../Atoms/InputText";
import SubTitle from "../../Atoms/SubTitle";
import InputDescription from "../../Atoms/InputDescription";
import SelectEstimated from "../../Atoms/SelectEstimated";
import InputDate from "../../Atoms/InputDate/Index";
import NavItem from "../../Atoms/NavItem";
import Routes from "../../../Router/Routes";
import { AddIcon } from "@chakra-ui/icons";

interface Props {
  order: Order;
}

const BigOrder = (props: Props) => {
  const {
    title,
    author,
    dateCurrent,
    estimatedTime,
    description,
    deadLine,
    employee,
    budget,
    stateOrder,
    comment,
    dateChange,
    cashAdvance,
    phone,
  } = props.order;
  console.log(props.order);
  return (
    <Flex flexDirection="column" gap="5">
      <Flex justifyContent="start">
        <NavItem key="HOME" to={Routes.HOME}>
          {"< Volver atrás"}
        </NavItem>
      </Flex>
      <Flex gap="5" alignItems="center" justifyContent="center">
        <AddIcon boxSize={6} />
        <Heading size="lg">Ver o modificar un pedido</Heading>
      </Flex>
      <Flex gap="5" flexDirection="column">
        <Divider w="868px" border="1px" color="gray.700" />
        <Text as="b" color="gray.500">
          DATOS DEL PEDIDO
        </Text>
      </Flex>

      <Flex flexDirection="column" alignItems="center" gap="5">
        <Flex
          flexDirection="column"
          gap="5"
          backgroundColor="white"
          padding="10"
        >
          <Flex gap="5">
            <InputText lable="Título" value={title} disabled={true} />
            <InputText
              lable="Empleado a cargo"
              value={employee}
              disabled={true}
            />
          </Flex>
          <Flex gap="4">
            <InputDescription
              lable="Descripción"
              value={description}
              disabled={true}
            />
          </Flex>
          <SubTitle lable="DATOS DEL CLIENTE" gap={3} />
          <Flex gap="4">
            <InputText
              lable="Nombre del cliente"
              placeholder="Nombre y apellido..."
              value={author}
              disabled={true}
            />
            <InputPhone
              lable="Número de teléfono"
              placeholder="Número de teléfono..."
              value={phone}
              disabled={true}
            />
          </Flex>
          <SubTitle lable="DATOS DEL PLAZO" gap={3} />
          <Flex gap="5">
            <InputDate
              text="Fecha de ingreso"
              disabled={true}
              value={dateCurrent}
            />
            <SelectEstimated lable="Tiempo estimado" />
            <InputDate
              text="Fecha de entrega"
              disabled={true}
              value={deadLine}
            />
          </Flex>
          <SubTitle lable="PRESUPUESTO" gap={3} />
          <Flex gap="4">
            <InputNumber
              lable="Seña"
              placeholder="Escribe un valor..."
              value={cashAdvance}
            />
            <InputNumber
              lable="Número de presupuesto"
              placeholder="Número un número..."
              value={budget}
              disabled={true}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex>
          <NavItem
            key="MODIFY"
            to={Routes.MODIFY}
            w="175px"
            borderRadius="1px"
            bg="#ff375b"
            color="white"
            h="48px"
          >
            Extender plazo
          </NavItem>
        </Flex>
        <Flex gap="5">
          <ButtonCancel />
          <ButtonSave />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BigOrder;
