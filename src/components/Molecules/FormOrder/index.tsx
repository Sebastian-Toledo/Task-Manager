import {
  Flex,
  Text,
  Divider,
  Heading,
  FormLabel,
  Input,
  FormControl,
  Textarea,
  Select,
} from "@chakra-ui/react";
import ButtonCancel from "../../Atoms/ButtonCancel";
import ButtonSave from "../../Atoms/ButtonSave";
import SubTitle from "../../Atoms/SubTitle";
import NavItem from "../../Atoms/NavItem";
import Routes from "../../../Router/Routes";
import { EditIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import formStyles from "./styles";
import { formatDateAsDatetimeString } from "../../../utils/dateUtils";
import axios from "axios";
import * as Yup from "yup";
import { HOST, IP } from "../../../utils/envirementConfiguration";

const FormOrder = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      dateCurrent: formatDateAsDatetimeString(new Date()),
      estimatedTime: 0,
      description: "",
      deadLine: formatDateAsDatetimeString(new Date()),
      employee: "",
      budget: 0,
      stateOrder: "En Proceso",
      cashAdvance: 0,
      phone: "",
      modify: [],
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Campo requerido"),
      author: Yup.string().required("Campo requerido"),
      dateCurrent: Yup.date().required("Campo requerido"),
      estimatedTime: Yup.number().required("Campo requerido"),
      description: Yup.string().required("Campo requerido"),
      deadLine: Yup.date().required("Campo requerido"),
      employee: Yup.string().required("Campo requerido"),
      budget: Yup.number().required("Campo requerido"),
      cashAdvance: Yup.number().required("Campo requerido"),
      phone: Yup.number().required("Campo requerido"),
    }),
    onSubmit: (values) => {
      axios({
        method: "POST",
        url: `http://${HOST}/task/create`,
        data: values,
      })
        .then(function (res) {})
        .catch(function (res) {
          console.log(res);
          alert("Hubo un problema con la subida de datos");
        })
        .finally(() => (window.location.href = `http://${IP}:3000`));
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
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="employee">Empleado a cargo</FormLabel>
                  <Select
                    id="employee"
                    name="employee"
                    sx={formStyles.inputDescription}
                    onChange={formik.handleChange}
                    value={formik.values.employee}
                    placeholder="Seleccione Empleado"
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
                    required
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
                    required
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
                    required
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
                    max={formik.values.dateCurrent}
                    sx={formStyles.inputDescription}
                    value={formik.values.dateCurrent}
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Tiempo estimado</FormLabel>
                  <Select
                    id="estimatedTime"
                    name="estimatedTime"
                    placeholder="Seleccione una Opcion"
                    sx={formStyles.inputDescription}
                    onChange={formik.handleChange}
                    value={formik.values.estimatedTime}
                    required
                  >
                    <option value="1"> 1 - 3 Dias</option>
                    <option value="2"> 4 - 7 Dias</option>
                    <option value="3"> 7 - 10 Dias</option>
                    <option value="4"> 13 - 20 Dias</option>
                    <option value="5"> 22 - 30 Dias</option>
                    {}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Fecha de entrega</FormLabel>
                  <Input
                    id="deadLine"
                    name="deadLine"
                    type="datetime-local"
                    min={formik.values.dateCurrent}
                    sx={formStyles.inputDescription}
                    onChange={formik.handleChange}
                    value={formik.values.deadLine}
                    required
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
                    required
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
                    required
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
  );
};

export default FormOrder;

// npm install formik --save
// npm i yup
// npm i axios
