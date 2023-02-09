import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import input from "./styles";

interface Props {
  name: string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
}

const InputText = (props: Props) => {
  const [getText, setText] = useState("" || props.value);

  const handleEvent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <FormControl>
      <FormLabel>{props.name}</FormLabel>
      <Input
        disabled={props.disabled}
        sx={input}
        placeholder={props.placeholder}
        type="text"
        onChange={() => handleEvent}
        value={props.value}
      />
    </FormControl>
  );
};

export default InputText;
