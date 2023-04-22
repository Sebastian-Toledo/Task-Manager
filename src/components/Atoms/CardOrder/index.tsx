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
    deadLine,
    employee,
    budget,
    stateOrder,
    _id,
  } = props.order;
  const d = new Date(deadLine);
  const c = new Date(dateCurrent);

  return (
    <Link to={`${Routes.ORDER}/${_id}`}>
      <Flex flexDirection="column">
        <Card>
          <CardBody sx={cardOrderStyles.mainContainerCard}>
            <Flex sx={cardOrderStyles.flexContainer}>
              <Card sx={cardOrderStyles.cardContainer}>{title}</Card>
            </Flex>
            <Flex sx={cardOrderStyles.flexContainer}>
              <Card sx={cardOrderStyles.cardContainer}>{author}</Card>
            </Flex>
            <Flex sx={cardOrderStyles.flexContainer}>
              <Card sx={cardOrderStyles.cardContainer}>
                {c.toLocaleDateString("en-GB")}
              </Card>
            </Flex>
            <Flex sx={cardOrderStyles.flexContainer}>
              <Card sx={cardOrderStyles.cardContainer}>
                {d.toLocaleDateString("en-GB")}
              </Card>
            </Flex>
            <Flex sx={cardOrderStyles.flexContainer}>
              <Card sx={cardOrderStyles.cardContainer}>{stateOrder}</Card>
            </Flex>
            <Flex sx={cardOrderStyles.flexContainer}>
              <Card sx={cardOrderStyles.cardContainer}>{employee}</Card>
            </Flex>
            <Flex sx={cardOrderStyles.flexContainer}>
              <Card sx={cardOrderStyles.cardContainer}>{budget}</Card>
            </Flex>
          </CardBody>
        </Card>
        <Divider sx={cardOrderStyles.divider} />
      </Flex>
    </Link>
  );
};

export default CardOrder;
