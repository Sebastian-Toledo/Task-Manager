import React from "react";
import { Box, Flex, Card, CardBody, Text } from "@chakra-ui/react";
import { useState } from "react";
import Order from "../../../Type/Order";

// interface Props {
//     order: Order;
// }

const CardOrder = () => {
  return (
    <Card display="flex" direction={{ base: "column", sm: "row" }} gap="4">
      <Text>Trabajo</Text>

      <Text>Autor</Text>

      <Text>Fecha Ingreso</Text>

      <Text>Fecha Limite</Text>

      <Text>Estado</Text>

      <Text>Empleado</Text>
    </Card>
  );
};

export default CardOrder;
