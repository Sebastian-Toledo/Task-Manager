import { useState } from "react";
import Routes from "../../../Router/Routes";
import { AiFillFileAdd } from "react-icons/ai";
import {
  Flex,
  Stack,
  Radio,
  RadioGroup,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Input,
  Divider,
  Center,
} from "@chakra-ui/react";
import NavItem from "../NavItem";

interface Props {
  value: string;
}

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("En Proceso");
  const [author, setAuthor] = useState(" ");

  const onChange = (event: any) => {
    setAuthor(event.currentTarget.value);
  };

  return (
    <Flex backgroundColor="white">
      <Button colorScheme="blue" onClick={onOpen}>
        Pedidos
      </Button>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Pedidos</DrawerHeader>
          <DrawerBody>
            <RadioGroup defaultValue={placement} onChange={setPlacement}>
              <Stack direction="row" mb="4" gap="5">
                <Radio value="En Proceso">En Proceso</Radio>
                <Radio value="Terminados">Terminados</Radio>
                <Radio value="Entregados">Entregados</Radio>
                <Radio value="Anulados">Anulados</Radio>
                <Center height="50px" gap="10" paddingLeft="10">
                  <Divider orientation="vertical" />
                  <NavItem key="CREATE" icon={AiFillFileAdd} to={Routes.CREATE}>
                    Crear Pedido
                  </NavItem>
                </Center>
              </Stack>
            </RadioGroup>
            <Input
              onChange={onChange}
              _placeholder={{ color: "black" }}
              variant="outline"
              placeholder="Buscador Cliente"
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default NavBar;
