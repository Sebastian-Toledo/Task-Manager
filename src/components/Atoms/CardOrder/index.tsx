import React from "react";
import { Flex, Card, Text } from "@chakra-ui/react";
import Order from "../../../Type/Order";
import cardOrderStyles from "./styles";

interface Props {
  order: Order;
}

const CardOrder = (props: Props) => {
  const { title, author, dateCurrent, deadline, employee, budget, stateOrder } =
    props.order;
  const d = new Date(deadline);
  const c = new Date(dateCurrent);

  return (
    <Card sx={cardOrderStyles.mainContainerCard}>
      <Flex sx={cardOrderStyles.flexContainer}>
        <Text>Trabajo</Text>
        <Card sx={cardOrderStyles.cardContainer}>{title}</Card>
      </Flex>
      <Flex sx={cardOrderStyles.flexContainer}>
        <Text>Autor</Text>
        <Card sx={cardOrderStyles.cardContainer}>{author}</Card>
      </Flex>
      <Flex sx={cardOrderStyles.flexContainer}>
        <Text>Fecha Ingreso</Text>
        <Card sx={cardOrderStyles.cardContainer}>
          {c.toLocaleDateString("en-GB")}
        </Card>
      </Flex>
      <Flex sx={cardOrderStyles.flexContainer}>
        <Text>Fecha Limite</Text>
        <Card sx={cardOrderStyles.cardContainer}>
          {d.toLocaleDateString("en-GB")}
        </Card>
      </Flex>
      <Flex sx={cardOrderStyles.flexContainer}>
        <Text>Estado</Text>
        <Card sx={cardOrderStyles.cardContainer}>{stateOrder}</Card>
      </Flex>
      <Flex sx={cardOrderStyles.flexContainer}>
        <Text>Empleado</Text>
        <Card sx={cardOrderStyles.cardContainer}>{employee}</Card>
      </Flex>
      <Flex sx={cardOrderStyles.flexContainer}>
        <Text>Numero de Presupuesto</Text>
        <Card sx={cardOrderStyles.cardContainer}>{budget}</Card>
      </Flex>
    </Card>
  );
};

export default CardOrder;
