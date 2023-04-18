import { Button } from "@chakra-ui/react";

const ButtonCancel = () => {
  return (
    <Button
      borderRadius="1px"
      borderColor="#ff375b"
      color="#ff375b"
      border="2px"
      size="lg"
      w="175px"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = "http://192.168.1.175:3000";
      }}
    >
      Cancelar
    </Button>
  );
};

export default ButtonCancel;
