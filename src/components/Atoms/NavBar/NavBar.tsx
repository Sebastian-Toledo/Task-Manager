import { useState } from "react";
import React from "react";
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
                <Radio value="En Proceso" colorScheme="teal">
                  En Proceso
                </Radio>
                <Radio value="Terminados" colorScheme="teal">
                  Terminados
                </Radio>
                <Radio value="Entregados" colorScheme="teal">
                  Entregados
                </Radio>
                <Radio value="Anulados" colorScheme="teal">
                  Anulados
                </Radio>
                <Center height="50px" gap="10" paddingLeft="10">
                  <Divider orientation="vertical" />
                  <Button colorScheme="teal">Crear Pedido</Button>
                </Center>
              </Stack>
            </RadioGroup>
            <Input
              _placeholder={{ color: "black" }}
              color="teal"
              variant="outline"
              placeholder="Buscador por cliente"
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PlacementExample;
