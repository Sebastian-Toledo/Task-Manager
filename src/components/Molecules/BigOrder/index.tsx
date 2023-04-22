import Order from "../../../Type/Order";
import {
  Flex,
  Text,
  Divider,
  Heading,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
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
import { useFormik } from "formik";
import { formatDateAsDatetimeString } from "../../../utils/dateUtils";
import axios from "axios";
import { HOST, IP } from "../../../utils/envirementConfiguration";

interface Props {
  order: Order;
}

const BigOrder = (props: Props) => {
  const {
    _id,
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
  console.log(props.order);
  const formik = useFormik({
    initialValues: {
      title: title,
      author: author,
      dateCurrent: formatDateAsDatetimeString(dateCurrent),
      estimatedTime: estimatedTime,
      description: description,
      deadLine: formatDateAsDatetimeString(deadLine),
      employee: employee,
      budget: budget,
      stateOrder: stateOrder,
      cashAdvance: cashAdvance,
      phone: phone,
    },
    onSubmit: (values) => {
      axios({
        method: "PUT",
        url: `http://${HOST}/task/${_id}`,
        data: values,
      })
        .then(function (res) {
          console.log(res);
          window.location.href = `http://${IP}:3000`;
        })
        .catch(function (res) {
          alert("Hubo un problema");
          console.log(res);
        })
        .finally(() => (window.location.href = `http://${IP}:3000`));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
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
              <InputText name="Título" value={title} disabled={true} />
              <InputText
                name="Empleado a cargo"
                value={employee}
                disabled={true}
              />
              <FormControl>
                <FormLabel>Select option</FormLabel>
                <Select
                  border="1px"
                  borderColor="gray"
                  borderRadius="1px"
                  id="stateOrder"
                  name="stateOrder"
                  value={formik.values.stateOrder}
                  onChange={formik.handleChange}
                >
                  <option value="In Process">En Proceso</option>
                  <option value="Finished"> Terminado</option>
                  <option value="Delivered"> Entregado</option>
                  <option value="Canceled"> Anulado</option>
                  {}
                </Select>
              </FormControl>
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
              <SelectEstimated
                name="Tiempo estimado"
                value={estimatedTime}
                disabled={true}
              />
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
    </form>
  );
};

export default BigOrder;
