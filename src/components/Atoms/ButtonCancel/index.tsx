import { Button } from "@chakra-ui/react";
import { IP } from "../../../utils/envirementConfiguration";

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
        console.log(e.preventDefault());
        e.preventDefault();
        window.location.href = `http://${IP}:3000`;
      }}
    >
      Cancelar
    </Button>
  );
};

export default ButtonCancel;
