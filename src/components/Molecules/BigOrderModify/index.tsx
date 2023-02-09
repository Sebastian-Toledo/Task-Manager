import Order from "../../../Type/Order";
import { Flex, Text, Divider } from "@chakra-ui/react";
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

interface Props {
  order: Order;
}

const BigOrderModify = (props: Props) => {
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
    cashAdvance,
    phone,
  } = props.order;

  return (
    <Flex backgroundColor="#f5f4f9" flexDirection="column" gap="5">
      <Flex alignItems="start">
        <NavItem key="HOME" to={Routes.HOME}>
          {"< Volver atrás"}
        </NavItem>
      </Flex>
      <Flex gap="5" flexDirection="column" alignItems="center">
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
            <InputText name="Título" value={title} disabled={true} />

            <InputText
              name="Empleado a cargo"
              value={employee}
              disabled={true}
            />
          </Flex>
          <Flex gap="4">
            <InputDescription
              name="Descripción"
              value={description}
              disabled={true}
            />
          </Flex>
          <SubTitle name="DATOS DEL CLIENTE" gap={3} />
          <Flex gap="4">
            <InputText
              name="Nombre del cliente"
              placeholder="Nombre y apellido..."
              value={author}
              disabled={true}
            />
            <InputPhone
              name="Número de teléfono"
              placeholder="Número de teléfono..."
              value={phone}
              disabled={true}
            />
          </Flex>
          <SubTitle name="DATOS DEL PLAZO" gap={3} />
          <Flex gap="5">
            <InputDate
              text="Fecha de ingreso"
              disabled={true}
              value={dateCurrent}
            />
            <SelectEstimated name="Tiempo estimado" />
            <InputDate
              text="Fecha de entrega"
              disabled={true}
              value={deadLine}
            />
          </Flex>
          <SubTitle name="PRESUPUESTO" gap={3} />
          <Flex gap="4">
            <InputNumber
              name="Seña"
              placeholder="Escribe un valor..."
              value={cashAdvance}
              disabled={true}
            />
            <InputNumber
              name="Número de presupuesto"
              placeholder="Número un número..."
              value={budget}
              disabled={true}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="center" gap="5">
        <ButtonCancel />
        <ButtonSave />
      </Flex>
    </Flex>
  );
};

export default BigOrderModify;
