import { Flex, Card, Divider, CardBody, Text } from "@chakra-ui/react";
import Order from "../../../Type/Order";
import cardOrderStyles from "./styles";
import Routes from "../../../Router/Routes";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
    estimatedTime,
    _id,
  } = props.order;
  const c = new Date(dateCurrent);
  const d = new Date(deadLine);
  const [getbgIndex, setbgIndex] = useState(5);
  const [getTextIndex, setTextIndex] = useState(3);
  const [getStateIndex, setStateIndex] = useState(2);
  const [getStateColor, setStateColor] = useState("");
  const [getCardColor, setCardColor] = useState("");
  const [getTextColor, setTextColor] = useState("");

  const color = [
    "#1866FD",
    "#8AAD3F",
    "#FFA800",
    "black",
    "#FF375B",
    "white",
    "grey",
  ];

  useEffect(() => {
    const currentDate = new Date();
    const a = Math.round((d.getTime() - currentDate.getTime()) / 86400000);
    if (stateOrder === "In Process" || stateOrder === "En Proceso") {
      switch (estimatedTime) {
        case 1:
          if (0 <= a && a <= 1) {
            setbgIndex(4);
            setTextIndex(5);
            setStateIndex(5);
          } else if (a <= 3 && a > 1) {
            setbgIndex(2);
            setTextIndex(5);
            setStateIndex(5);
          }
          break;
        case 2:
          if (a === 0 && a <= 4) {
            setbgIndex(4);
            setTextIndex(5);
            setStateIndex(5);
          } else if (a <= 7 && a > 4) {
            setbgIndex(2);
            setTextIndex(5);
            setStateIndex(5);
          }
          break;
        case 3:
          if (0 <= a && a <= 7) {
            setbgIndex(4);
            setTextIndex(5);
            setStateIndex(5);
          } else if (a <= 10 && a > 7) {
            setbgIndex(2);
            setTextIndex(5);
            setStateIndex(5);
          }
          break;
        case 4:
          if (0 <= a && a <= 13) {
            setbgIndex(4);
            setTextIndex(5);
            setStateIndex(5);
          } else if (a <= 20 && a > 13) {
            setbgIndex(2);
            setTextIndex(5);
            setStateIndex(5);
          }
          break;
        case 5:
          if (0 <= a && a <= 22) {
            setbgIndex(4);
            setTextIndex(5);
            setStateIndex(5);
          } else if (a <= 30 && a > 22) {
            setbgIndex(2);
            setTextIndex(5);
            setStateIndex(5);
          }
          break;
        default:
          setbgIndex(5);
          setTextIndex(3);
          setStateIndex(2);
          break;
      }
    }

    switch (stateOrder) {
      case "Anulados":
      case "Canceled":
        setbgIndex(5);
        setTextIndex(3);
        setStateIndex(4);
        break;
      case "Finished":
      case "Terminados":
        setbgIndex(5);
        setTextIndex(3);
        setStateIndex(0);
        break;
      case "Delivered":
      case "Entregados":
        setbgIndex(1);
        setTextIndex(5);
        setStateIndex(5);
        break;
      default:
        if (a > 30 || a < 0) {
          setbgIndex(5);
          setTextIndex(3);
          setStateIndex(2);
        }
        break;
    }
  }, []);

  useEffect(() => {
    const colorBGIndex =
      getbgIndex >= 0 && getbgIndex <= color.length ? getbgIndex : 0;
    setCardColor(color[colorBGIndex]);

    const colorTextIndex =
      getTextIndex >= 0 && getTextIndex <= color.length ? getTextIndex : 0;
    setTextColor(color[colorTextIndex]);

    const colorStateIndex =
      getStateIndex >= 0 && getStateIndex <= color.length ? getStateIndex : 0;
    setStateColor(color[colorStateIndex]);
  }, [getbgIndex, getTextIndex, getStateColor]);

  return (
    <Link to={`${Routes.ORDER}/${_id}`}>
      <Flex flexDirection="column">
        <Card bg={getCardColor}>
          <CardBody sx={cardOrderStyles.mainContainerCard}>
            <Flex sx={cardOrderStyles.flexContainer}>
              <Card bg={getCardColor} sx={cardOrderStyles.cardContainer}>
                <Text textAlign="center" color={getTextColor}>
                  {title}
                </Text>
              </Card>
            </Flex>
            <Flex sx={cardOrderStyles.flexContainer}>
              <Card bg={getCardColor} sx={cardOrderStyles.cardContainer}>
                <Text textAlign="center" color={getTextColor}>
                  {author}
                </Text>
              </Card>
            </Flex>
            <Flex sx={cardOrderStyles.flexContainer}>
              <Card bg={getCardColor} sx={cardOrderStyles.cardContainer}>
                <Text textAlign="center" color={getTextColor}>
                  {c.toLocaleDateString("en-GB")}
                </Text>
              </Card>
            </Flex>
            <Flex sx={cardOrderStyles.flexContainer}>
              <Card bg={getCardColor} sx={cardOrderStyles.cardContainer}>
                <Text textAlign="center" color={getTextColor}>
                  {d.toLocaleDateString("en-GB")}
                </Text>
              </Card>
            </Flex>
            <Flex sx={cardOrderStyles.flexContainer}>
              <Card bg={getCardColor} sx={cardOrderStyles.cardContainer}>
                <Text as="b" textAlign="center" color={getStateColor}>
                  {stateOrder}
                </Text>
              </Card>
            </Flex>
            <Flex sx={cardOrderStyles.flexContainer}>
              <Card bg={getCardColor} sx={cardOrderStyles.cardContainer}>
                <Text textAlign="center" color={getTextColor}>
                  {employee}
                </Text>
              </Card>
            </Flex>
            <Flex sx={cardOrderStyles.flexContainer}>
              <Card bg={getCardColor} sx={cardOrderStyles.cardContainer}>
                <Text textAlign="center" color={getTextColor}>
                  {budget}
                </Text>
              </Card>
            </Flex>
          </CardBody>
        </Card>
        <Divider sx={cardOrderStyles.divider} />
      </Flex>
    </Link>
  );
};

export default CardOrder;
