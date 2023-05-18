import { Flex, Card, Divider, CardBody, Text } from "@chakra-ui/react";
import Order from "../../../Type/Order";
import cardOrderStyles from "../CardOrder/styles";
import Routes from "../../../Router/Routes";
import { Link } from "react-router-dom";
import Modify from "../../../Type/Modify";

interface Props {
  modify: Modify;
}

const CardModify = (props: Props) => {
  return (
    <Flex flexDirection="column">
      <Card>
        <CardBody sx={cardOrderStyles.mainContainerCard}>
          <Flex sx={cardOrderStyles.flexContainer}>
            <Card sx={cardOrderStyles.cardContainer}>
              <Text textAlign="center">{props.modify.employeeCharge}</Text>
            </Card>
          </Flex>
          <Flex sx={cardOrderStyles.flexContainer}>
            <Card sx={cardOrderStyles.cardContainer}>
              <Text textAlign="center">{props.modify.previewDate}</Text>
            </Card>
          </Flex>
          <Flex sx={cardOrderStyles.flexContainer}>
            <Card sx={cardOrderStyles.cardContainer}>
              <Text textAlign="center">{props.modify.dateChange}</Text>
            </Card>
          </Flex>
          <Flex sx={cardOrderStyles.flexContainer}>
            <Card sx={cardOrderStyles.cardContainer}>
              <Text textAlign="center">{props.modify.comment}</Text>
            </Card>
          </Flex>
        </CardBody>
      </Card>
      <Divider sx={cardOrderStyles.divider} />
    </Flex>
  );
};

export default CardModify;
