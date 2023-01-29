import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputLeftAddon,
  InputGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useState, FormEvent, ChangeEvent } from "react";
import InputText from "../../Atoms/InputText";
import InputDescription from "../../InputDescription";

const FormOrder = () => {
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState(0);
  const [dateCurrent, setDateCurrent] = useState<Date>(new Date());
  const [estimatedTime, setEstimatedTime] = useState(0);
  const [deadLine, setDeadline] = useState<Date>(new Date());
  const [budget, setBudget] = useState("");
  const [cashAdvance, setCashAdvance] = useState("");

  const handlePhone = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPhone(parseInt(e.target.value));
  };
  const handleDateCurrent = (date: Date) => {
    date && setDateCurrent(date);
  };
  const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const formatDate = (date: Date) => {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  };

  const handleEstimatedTime = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEstimatedTime(parseInt(e.target.value));
  };

  const handleDeadLine = (date: Date) => {
    date && setDeadline(date);
  };

  const handleBudget = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBudget(e.target.value);
  };

  const handleCashAdvance = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCashAdvance(e.target.value);
  };

  const format = (val: string) => `$` + val;
  const parse = (val: string) => val.replace(/^\$/, "");

  // stateOrder,

  return (
    <Flex flexDirection="column" alignItems="center" gap="15">
      <Flex flexDirection="column" gap="10">
        <Flex gap="5">
          <InputText name="Titulo" placeholder="Escribe un tiutlo..." />
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
        <Flex flexDir="column" gap="3">
          <Text as="b" color="gray.300">
            DATOS DEL CLIENTE
          </Text>
          <Divider></Divider>
        </Flex>
        <Flex gap="4">
          <InputText
            name="Nombre del cliente"
            placeholder="Nombre y apellido..."
          />
          <FormControl>
            <FormLabel>Telefono</FormLabel>
            <InputGroup>
              <InputLeftAddon children="+549" />
              <Input
                type="tel"
                placeholder="Numero de telefono"
                onChange={() => handlePhone}
              />
            </InputGroup>
          </FormControl>
        </Flex>
        <Flex gap="4">
          <FormControl>
            <FormLabel>Fecha de Ingreso</FormLabel>
            <Input
              type="date"
              value={formatDate(dateCurrent).toString()}
              onChange={() => handleDateCurrent}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Tiempo estimado</FormLabel>
            <NumberInput
              defaultValue={1}
              min={1}
              onChange={() => handleEstimatedTime}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Fecha de Entrega</FormLabel>
            <Input type="date" onChange={() => handleDeadLine} />
          </FormControl>
        </Flex>
        <Flex gap="4">
          <FormControl>
            <FormLabel>Numero de Presupuesto</FormLabel>
            <Input type="text" onChange={() => handleBudget} />
          </FormControl>
          <FormControl>
            <FormLabel>Seña </FormLabel>
            <NumberInput
              onChange={(valueString) => setCashAdvance(parse(valueString))}
              value={format(cashAdvance)}
              min={0}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Flex>
      </Flex>
      <Flex gap="5">
        <Button
          borderColor="#ff375b"
          color="#ff375b"
          background="white"
          border="2px"
          size="lg"
        >
          Cancelar
        </Button>
        <Button bg="#ff375b" color="white" size="lg">
          Guardar
        </Button>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};

export default FormOrder;
