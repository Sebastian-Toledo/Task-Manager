import { Flex, Heading } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import NavItem from "../NavItem";
import Routes from "../../../Router/Routes";

interface Props {
  name: string;
}

const TitlePage = (props: Props) => {
  return (
    <Flex alignContent="space-between">
      <Flex>
        <NavItem key="CREATE" to={Routes.HOME}>
          {"< Crear Pedido"}
        </NavItem>
      </Flex>
      <Flex alignItems="center" gap="1" paddingTop="2">
        <AddIcon boxSize={6} />
        <Heading size="lg">{props.name}</Heading>
      </Flex>
    </Flex>
  );
};

export default TitlePage;
