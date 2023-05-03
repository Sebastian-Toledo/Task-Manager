import { Flex, Card, Divider, CardBody, Text } from "@chakra-ui/react";
import Order from "../../../Type/Order";
import cardOrderStyles from "./styles";
import Routes from "../../../Router/Routes";
import { Link } from "react-router-dom";
import { formatDateAsDatetimeString } from "../../../utils/dateUtils";
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
    _id,
  } = props.order;
  const c = new Date(dateCurrent);
  const d = new Date(deadLine);
  const [getbgIndex, setbgIndex] = useState(5);
  const [getTextIndex, setTextIndex] = useState(3);
  const [getStateIndex, setStateIndex] = useState(4);
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

    // switch(){

    // }

    if (a >= 3 && a <= 5 && props.order.stateOrder !== "Delivered") {
      setbgIndex(2);
      setTextIndex(5);
      setStateIndex(5);
    } else if (a <= 2 && a >= 1) {
      setbgIndex(4);
      setTextIndex(5);
      setStateIndex(5);
    } else if (a > 9999 || a > -9999) {
      switch (props.order.stateOrder) {
        case "In Process" || "En Proceso":
          setbgIndex(5);
          setTextIndex(3);
          setStateIndex(2);
          break;
        case "Finished" || "Entregados":
          setbgIndex(5);
          setTextIndex(3);
          setStateIndex(0);
          break;
        case "Delivered" || "Terminados":
          setbgIndex(1);
          setTextIndex(5);
          setStateIndex(5);
          break;
        case "Canceled" || "Anulados":
          setbgIndex(5);
          setTextIndex(3);
          setStateIndex(4);
          break;
      }
    }
    console.log("Resta ", a, props.order.stateOrder);
  }, []);

  // const colorState = () => {
  //   switch (props.order.stateOrder) {
  //     case "In Process":
  //       return setStateIndex(2);
  //     case "Finished":
  //       return setStateIndex(0);
  //     case "Canceled":
  //       return setStateIndex(4);
  //     default:
  //       return setStateIndex(0);
  //   }
  // };

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
