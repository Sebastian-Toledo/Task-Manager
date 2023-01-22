import React from "react";
import Order from "../../../Type/Order";
import { Flex, Card, Text, Divider } from "@chakra-ui/react";

interface Props {
  order: Order;
}

const BigOrder = (props: Props) => {
  const {
    id,
    title,
    author,
    dateCurrent,
    estimatedTime,
    description,
    deadline,
    employee,
    budget,
    stateOrder,
    comment,
    dateChange,
    sign,
    phone,
  } = props.order;

  return;
};

export default BigOrder;
