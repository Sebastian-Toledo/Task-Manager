import React from "react";
import Order from "../../Type/Order";
import {
  Flex,
  Card,
  Text,
  Divider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState, FormEvent, ChangeEvent } from "react";

const FormOrder = () => {
  const [empleado, setempleado] = useState("");

  const handleEmpleado = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setempleado(e.target.value);
  };

  // title,
  // author,
  // dateCurrent,
  // estimatedTime,
  // description,
  // deadline,
  // employee,
  // budget,
  // stateOrder,
  // sign,
  // phone,

  return (
    <Flex>
      <FormControl>
        <FormLabel>Empleado</FormLabel>
        <Input type="text" onChange={() => handleEmpleado} />
      </FormControl>
    </Flex>
  );
};

export default FormOrder;
