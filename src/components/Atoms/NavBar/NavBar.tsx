import { useState } from "react";
import Routes from "../../../Router/Routes";
import React from "react";
import { AiFillFileAdd } from "react-icons/ai";
import {
  //   Flex,
  //   Card,
  //   Text,
  //   Divider,
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

function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("En Proceso");

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
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
              _placeholder={{ color: "black" }}
              variant="outline"
              placeholder="Buscador Cliente"
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PlacementExample;
