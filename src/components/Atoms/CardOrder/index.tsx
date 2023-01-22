import React from "react";
import { Flex, Card, Text, Divider, CardBody } from "@chakra-ui/react";
import Order from "../../../Type/Order";
import cardOrderStyles from "./styles";
import Routes from "../../../Router/Routes";
import { Link } from "react-router-dom";

interface Props {
  order: Order;
}

const CardOrder = (props: Props) => {
  const {
    title,
    author,
    dateCurrent,
    deadline,
    employee,
    budget,
    stateOrder,
    id,
  } = props.order;
  const d = new Date(deadline);
  const c = new Date(dateCurrent);

  return (
    <Link to={`${Routes.ORDER}/${id}`}>
      <Card>
        <CardBody sx={cardOrderStyles.mainContainerCard}>
          <Flex sx={cardOrderStyles.flexContainer}>
            <Text>Titulo</Text>
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
            <Text>Presupuesto</Text>
            <Card sx={cardOrderStyles.cardContainer}>{budget}</Card>
          </Flex>
        </CardBody>
      </Card>
      <Divider sx={cardOrderStyles.divider} />
    </Link>
  );
};

export default CardOrder;
