import Order from "../../../Type/Order";
import {
  Flex,
  Text,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Heading,
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
import { useFormik } from "formik";
import { formatDateAsDatetimeString } from "../../../utils/dateUtils";
import axios from "axios";
import formStyles from "../FormOrder/styles";
import { EditIcon } from "@chakra-ui/icons";
import { HOST } from "../../../utils/envirementConfiguration";

interface Props {
  order: Order;
}

const BigOrderModify = (props: Props) => {
  const {
    _id,
    title,
    author,
    dateCurrent,
    description,
    deadLine,
    employee,
    budget,
    cashAdvance,
    estimatedTime,
    stateOrder,
    phone,
  } = props.order;
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
          alert("Successfully signed up!");
        })
        .catch(function (res) {});

      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
                <FormControl>
                  <FormLabel htmlFor="title">Titulo</FormLabel>
                  <Input
                    placeholder="Escribe un tiutlo..."
                    id="title"
                    name="title"
                    type="text"
                    sx={formStyles.input}
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="employee">Empleado a cargo</FormLabel>
                  <Input
                    placeholder="Nombre del empleado..."
                    id="employee"
                    name="employee"
                    type="text"
                    sx={formStyles.input}
                    onChange={formik.handleChange}
                    value={formik.values.employee}
                  />
                </FormControl>
              </Flex>
              <Flex gap="4">
                <FormControl>
                  <FormLabel>Descripción</FormLabel>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Escribe un mensaje..."
                    sx={formStyles.inputDescription}
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  />
                </FormControl>
              </Flex>
              <SubTitle name="DATOS DEL CLIENTE" gap={3} />
              <Flex gap="4">
                <FormControl>
                  <FormLabel htmlFor="author">Nombre del cliente</FormLabel>
                  <Input
                    placeholder="Nombre y apellido..."
                    id="author"
                    name="author"
                    type="text"
                    sx={formStyles.input}
                    onChange={formik.handleChange}
                    value={formik.values.author}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="phone">Número de teléfono</FormLabel>
                  <Input
                    placeholder="Número de teléfono..."
                    id="phone"
                    name="phone"
                    type="tel"
                    sx={formStyles.input}
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                </FormControl>
              </Flex>
              <SubTitle name="DATOS DEL PLAZO" gap={3} />
              <Flex gap="5">
                <FormControl>
                  <FormLabel>Fecha de ingreso</FormLabel>
                  <Input
                    id="currentDate"
                    name="currentDate"
                    type="datetime-local"
                    sx={formStyles.inputDescription}
                    value={formatDateAsDatetimeString(new Date())}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Tiempo estimado</FormLabel>
                  <Select
                    id="estimatedTime"
                    name="estimatedTime"
                    placeholder="Select option"
                    sx={formStyles.inputDescription}
                    onChange={formik.handleChange}
                  >
                    <option value="1">1 Dia</option>
                    <option value="2"> 2 - 3 Dias</option>
                    <option value="3"> 4 - 7 Dias</option>
                    <option value="4"> 8 - 10 Dias</option>
                    {}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Fecha de entrega</FormLabel>
                  <Input
                    id="deadLine"
                    name="deadLine"
                    type="datetime-local"
                    sx={formStyles.inputDescription}
                    onChange={formik.handleChange}
                    value={formik.values.deadLine}
                  />
                </FormControl>
              </Flex>
              <SubTitle name="PRESUPUESTO" gap={3} />
              <Flex gap="4">
                <FormControl>
                  <FormLabel htmlFor="cashAdvance">Seña</FormLabel>
                  <Input
                    placeholder="Escribe un valor..."
                    id="cashAdvance"
                    name="cashAdvance"
                    type="number"
                    sx={formStyles.input}
                    onChange={formik.handleChange}
                    value={formik.values.cashAdvance}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="budget">Número de presupuesto</FormLabel>
                  <Input
                    placeholder="Número un presupuesto..."
                    id="budget"
                    name="budget"
                    type="number"
                    sx={formStyles.input}
                    onChange={formik.handleChange}
                    value={formik.values.budget}
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="flex-end" gap="5" mb="5">
            <ButtonCancel />
            <ButtonSave />
          </Flex>
        </Flex>
      </Flex>
    </form>

    // <Flex backgroundColor="#f5f4f9" flexDirection="column" gap="5">
    //   <Flex alignItems="start">
    //     <NavItem key="HOME" to={Routes.HOME}>
    //       {"< Volver atrás"}
    //     </NavItem>
    //   </Flex>
    //   <Flex gap="5" flexDirection="column" alignItems="center">
    //     <Divider w="868px" border="1px" color="gray.700" />
    //     <Text as="b" color="gray.500">
    //       DATOS DEL PEDIDO
    //     </Text>
    //   </Flex>
    //   <Flex flexDirection="column" alignItems="center" gap="5">
    //     <Flex
    //       flexDirection="column"
    //       gap="5"
    //       backgroundColor="white"
    //       padding="10"
    //     >
    //       <Flex gap="5">
    //         <InputText name="Título" value={title} disabled={true} />

    //         <InputText
    //           name="Empleado a cargo"
    //           value={employee}
    //           disabled={true}
    //         />
    //       </Flex>
    //       <Flex gap="4">
    //         <InputDescription
    //           name="Descripción"
    //           value={description}
    //           disabled={true}
    //         />
    //       </Flex>
    //       <SubTitle name="DATOS DEL CLIENTE" gap={3} />
    //       <Flex gap="4">
    //         <InputText
    //           name="Nombre del cliente"
    //           placeholder="Nombre y apellido..."
    //           value={author}
    //           disabled={true}
    //         />
    //         <InputPhone
    //           name="Número de teléfono"
    //           placeholder="Número de teléfono..."
    //           value={phone}
    //           disabled={true}
    //         />
    //       </Flex>
    //       <SubTitle name="DATOS DEL PLAZO" gap={3} />
    //       <Flex gap="5">
    //         <InputDate
    //           text="Fecha de ingreso"
    //           disabled={true}
    //           value={dateCurrent}
    //         />
    //         <SelectEstimated name="Tiempo estimado" />
    //         <InputDate
    //           text="Fecha de entrega"
    //           disabled={true}
    //           value={deadLine}
    //         />
    //       </Flex>
    //       <SubTitle name="PRESUPUESTO" gap={3} />
    //       <Flex gap="4">
    //         <InputNumber
    //           name="Seña"
    //           placeholder="Escribe un valor..."
    //           value={cashAdvance}
    //           disabled={true}
    //         />
    //         <InputNumber
    //           name="Número de presupuesto"
    //           placeholder="Número un número..."
    //           value={budget}
    //           disabled={true}
    //         />
    //       </Flex>
    //     </Flex>
    //   </Flex>
    //   <Flex alignItems="center" justifyContent="center" gap="5">
    //     <ButtonCancel />
    //     <ButtonSave />
    //   </Flex>
    // </Flex>
  );
};

export default BigOrderModify;
