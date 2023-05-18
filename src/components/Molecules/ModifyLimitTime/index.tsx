import {
  Flex,
  Text,
  Divider,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  Input,
} from "@chakra-ui/react";
import ButtonCancel from "../../Atoms/ButtonCancel";
import ButtonSave from "../../Atoms/ButtonSave";
import InputDate from "../../Atoms/InputDate/Index";
import InputText from "../../Atoms/InputText";
import Order from "../../../Type/Order";
import Routes from "../../../Router/Routes";
import NavItem from "../../Atoms/NavItem";
import { CalendarIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import { formatDateAsDatetimeString } from "../../../utils/dateUtils";
import { HOST, IP } from "../../../utils/envirementConfiguration";
import axios from "axios";

interface Props {
  order: Order;
}

const ModifyLimitTime = (props: Props) => {
  const {
    _id,
    title,
    deadLine,
    phone,
    cashAdvance,
    stateOrder,
    budget,
    employee,
    author,
    dateCurrent,
    estimatedTime,
    description,
    comment,
    employeeCharge,
    changeDeadLine,
    modify,
  } = props.order;

  const objectModify = {
    previewDate: formatDateAsDatetimeString(deadLine),
    comment: comment ? comment : " ",
    employeeCharge: employeeCharge ? employeeCharge : "Flor",
    dateChange:
      changeDeadLine === undefined
        ? " "
        : formatDateAsDatetimeString(changeDeadLine),
  };

  const submiteOk = (values: Object) => {
    axios({
      method: "PUT",
      url: `http://${HOST}/task/${_id}`,
      data: values,
    })
      .then(function (res) {
        window.location.href = `http://${IP}:3000`;
      })
      .catch(function (res) {
        alert("Hubo un problema");
        console.log(`http://${HOST}/task/${_id}`);
      });
  };

  const formik = useFormik({
    initialValues: {
      title: title,
      author: author,
      dateCurrent: formatDateAsDatetimeString(dateCurrent),
      estimatedTime: estimatedTime,
      description: description,
      deadLine: " ",
      employee: employee,
      budget: budget,
      stateOrder: stateOrder,
      cashAdvance: cashAdvance,
      phone: phone,
      changeDeadLine: formatDateAsDatetimeString(new Date()),
      comment: " ",
      employeeCharge: " ",
      modify: modify,
    },
    onSubmit: (values) => {
      values.modify?.push(objectModify);
      values.deadLine = values.changeDeadLine;
      submiteOk(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
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
              <InputText name="Titulo" value={title} disabled={true} />
              <InputText
                name="Empleado a cargo"
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
              <FormControl>
                <FormLabel>Empleado que Extiende el plazo</FormLabel>
                <Select
                  maxW="49%"
                  id="employeeCharge"
                  name="employeeCharge"
                  placeholder="Nombre del empleado..."
                  border="1px"
                  borderColor="gray"
                  borderRadius="1px"
                  onChange={formik.handleChange}
                  value={formik.values.employeeCharge}
                  required
                >
                  <option value="Ilay"> Ilay</option>
                  <option value="Vero"> Vero</option>
                  <option value="Gabi"> Gabi</option>
                  <option value="Dario"> Dario</option>
                  <option value="Flor"> Flor</option>
                  <option value="Fran"> Fran</option>
                  {}
                </Select>
              </FormControl>
            </Flex>
            <Flex gap="5">
              <InputDate
                text="Actual Fecha de entrega"
                value={deadLine}
                disabled={true}
              />
              <FormControl>
                <FormLabel>Nueva fecha de entrega</FormLabel>
                <Input
                  min={formatDateAsDatetimeString(new Date())}
                  id="changeDeadLine"
                  name="changeDeadLine"
                  type="datetime-local"
                  border="1px"
                  onChange={formik.handleChange}
                  value={formik.values.changeDeadLine}
                  borderColor="gray"
                  borderRadius="1px"
                />
              </FormControl>
            </Flex>
            <Flex>
              <FormControl>
                <FormLabel>Razón por la cual se extiende el plazo</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  border="1px"
                  borderColor="gray"
                  borderRadius="1px"
                  placeholder="Escribir un mensaje..."
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                />
              </FormControl>
            </Flex>
            <Flex />
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="flex-end" gap="5">
          <ButtonCancel />
          <ButtonSave />
        </Flex>
      </Flex>
    </form>
  );
};

export default ModifyLimitTime;
