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
import { Formik } from "formik";

const FormOrder = () => {
  return (
    <Formik
      initialValues={{
        title: "",
        author: "",
        dateCurrent: new Date(),
        estimatedTime: 0,
        description: "",
        deadLine: new Date(),
        employee: "",
        budget: 0,
        stateOrder: "In Process",
        cashAdvance: 0,
        phone: "",
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Flex
        backgroundColor="#f5f4f9"
        flexDirection="column"
        alignItems="center"
        gap="5"
      >
        <Flex flexDirection="column" gap="2">
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
                <InputText
                  name="title"
                  lable="Titulo"
                  placeholder="Escribe un tiutlo..."
                />
                <InputText
                  name="employee"
                  lable="Empleado a cargo"
                  placeholder="Nombre del empleado..."
                />
              </Flex>
              <Flex gap="4">
                <InputDescription
                  lable="Descripción"
                  placeholder="Escribe un mensaje..."
                />
              </Flex>
              <SubTitle lable="DATOS DEL CLIENTE" gap={3} />
              <Flex gap="4">
                <InputText
                  name="author"
                  lable="Nombre del cliente"
                  placeholder="Nombre y apellido..."
                />
                <InputPhone
                  lable="Número de teléfono"
                  placeholder="Número de teléfono..."
                />
              </Flex>
              <SubTitle lable="DATOS DEL PLAZO" gap={3} />
              <Flex gap="5">
                <InputDate text="Fecha de ingreso" />
                <SelectEstimated lable="Tiempo estimado" />
                <InputDate text="Fecha de entrega" />
              </Flex>
              <SubTitle lable="PRESUPUESTO" gap={3} />
              <Flex gap="4">
                <InputNumber lable="Seña" placeholder="Escribe un valor..." />
                <InputNumber
                  lable="Número de presupuesto"
                  placeholder="Número un número..."
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="flex-end" gap="5" mb="5">
            <ButtonCancel />
            <ButtonSave />
          </Flex>
        </Flex>
      </Flex>
    </Formik>
  );
};

export default FormOrder;
