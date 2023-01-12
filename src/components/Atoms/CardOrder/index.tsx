import React from "react";
import { Flex, Card, Text } from "@chakra-ui/react";
//import Order from "../../../Type/Order";
import cardOrderStyles from "./styles";

// interface Props {
//     order: Order;
// }

const CardOrder = () => {
  return (
    <Card sx={cardOrderStyles.mainContainerCard}>
      <Flex sx={cardOrderStyles.flexContainer}>
        <Text>Trabajo</Text>
        <Card sx={cardOrderStyles.cardContainer}>Cartel</Card>
      </Flex>
      <Flex sx={cardOrderStyles.flexContainer}>
        <Text>Autor</Text>
        <Card sx={cardOrderStyles.cardContainer}>
          Ministerio de puerto deseado
        </Card>
      </Flex>
      <Flex sx={cardOrderStyles.flexContainer}>
        <Text>Fecha Ingreso</Text>
        <Card sx={cardOrderStyles.cardContainer}>12/04/2023</Card>
      </Flex>
      <Flex sx={cardOrderStyles.flexContainer}>
        <Text>Fecha Limite</Text>
        <Card sx={cardOrderStyles.cardContainer}>19/04/2023</Card>
      </Flex>
      <Flex sx={cardOrderStyles.flexContainer}>
        <Text>Estado</Text>
        <Card sx={cardOrderStyles.cardContainer}>En Proceso</Card>
      </Flex>
      <Flex sx={cardOrderStyles.flexContainer}>
        <Text>Empleado</Text>
        <Card sx={cardOrderStyles.cardContainer}>Sebastian Cretton</Card>
      </Flex>
    </Card>
  );
};

export default CardOrder;
