import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import input from "./styles";

interface Props {
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
}

const InputText = (props: Props) => {
  return (
    <FormControl>
      <FormLabel htmlFor="text">{props.name}</FormLabel>
      <Input
        bgColor="black"
        color="white"
        disabled={props.disabled}
        placeholder={props.placeholder}
        type="text"
        sx={input}
        value={props.value}
      />
    </FormControl>
  );
};

export default InputText;
