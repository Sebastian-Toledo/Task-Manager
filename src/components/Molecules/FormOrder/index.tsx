import { Flex, Text, Divider } from "@chakra-ui/react";
import ButtonCancel from "../../Atoms/ButtonCancel";
import ButtonSave from "../../Atoms/ButtonSave";
import InputDateCurrent from "../../Atoms/InputDateCurrent/Index";
import InputDeadLine from "../../Atoms/InputDeadLine/Index";
import InputNumber from "../../Atoms/InputNumber";
import InputPhone from "../../Atoms/InputPhone/Index";
import InputText from "../../Atoms/InputText";
import SubTitle from "../../Atoms/SubTitle";
import TitlePage from "../../Atoms/TitlePage";
import InputDescription from "../../Atoms/InputDescription";
import SelectEstimated from "../../Atoms/SelectEstimated";

const FormOrder = () => {
  return (
    <Flex
      backgroundColor="#f5f4f9"
      flexDirection="column"
      alignItems="center"
      gap="5"
    >
      <TitlePage name="Crear un pedido" />
      <Flex gap="10" flexDirection="column">
        <Divider w="868px" border="1px" color="gray.500" />
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
            <InputDateCurrent />
            <SelectEstimated name="Tiempo estimado" />
            <InputDeadLine />
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
      <Flex gap="5" alignItems="end" margin="5" backgroundColor="#f5f4f9">
        <ButtonCancel />
        <ButtonSave />
      </Flex>
    </Flex>
  );
};

export default FormOrder;
