import { Flex, Text, Divider, Heading } from "@chakra-ui/react";
import ButtonCancel from "../../Atoms/ButtonCancel";
import ButtonSave from "../../Atoms/ButtonSave";
import InputDate from "../../Atoms/InputDate/Index";
import InputNumber from "../../Atoms/InputNumber";
import InputPhone from "../../Atoms/InputPhone/Index";
import InputText from "../../Atoms/InputText";
import SubTitle from "../../Atoms/SubTitle";
import InputDescription from "../../Atoms/InputDescription";
import SelectEstimated from "../../Atoms/SelectEstimated";
import NavItem from "../../Atoms/NavItem";
import Routes from "../../../Router/Routes";
import { EditIcon } from "@chakra-ui/icons";

const FormOrder = () => {
  return (
    <Flex
      backgroundColor="#f5f4f9"
      flexDirection="column"
      alignItems="center"
      gap="5"
    >
      <Flex flexDirection="column" gap="5">
        <Flex justifyContent="start">
          <NavItem key="HOME" to={Routes.HOME}>
            {"< Volver atrás"}
          </NavItem>
        </Flex>
        <Flex gap="5" alignItems="center" justifyContent="center">
          <EditIcon boxSize={6} />
          <Heading size="lg">Crear pedido</Heading>
        </Flex>
        <Flex gap="5" flexDirection="column">
          <Divider w="868px" border="1px" color="gray.700" />
          <Text as="b" color="gray.500">
            DATOS DEL PEDIDO
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center" gap="15">
          <Flex
            flexDirection="column"
            gap="5"
            backgroundColor="white"
            padding="10"
          >
            <Flex gap="5">
              <InputText name="Título" placeholder="Escribe un tiutlo..." />
              <InputText
                name="Empleado a cargo"
                placeholder="Nombre del empleado..."
              />
            </Flex>
            <Flex gap="4">
              <InputDescription
                name="Descripción"
                placeholder="Escribe un mensaje..."
              />
            </Flex>
            <SubTitle name="DATOS DEL CLIENTE" gap={3} />
            <Flex gap="4">
              <InputText
                name="Nombre del cliente"
                placeholder="Nombre y apellido..."
              />
              <InputPhone
                name="Número de teléfono"
                placeholder="Número de teléfono..."
              />
            </Flex>
            <SubTitle name="DATOS DEL PLAZO" gap={3} />
            <Flex gap="5">
              <InputDate text="Fecha de ingreso" />
              <SelectEstimated name="Tiempo estimado" />
              <InputDate text="Fecha de entrega" />
            </Flex>
            <SubTitle name="PRESUPUESTO" gap={3} />
            <Flex gap="4">
              <InputNumber name="Seña" placeholder="Escribe un valor..." />
              <InputNumber
                name="Número de presupuesto"
                placeholder="Número un número..."
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="flex-end" gap="5">
          <ButtonCancel />
          <ButtonSave />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FormOrder;
