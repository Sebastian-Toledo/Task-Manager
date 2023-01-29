import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import input from "./styles";

interface Props {
  name: string;
  placeholder: string;
}

const InputText = (props: Props) => {
  const [getText, setText] = useState("");

  const handleEvent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <FormControl>
      <FormLabel>{props.name}</FormLabel>
      <Input
        sx={input}
        placeholder={props.placeholder}
        type="text"
        onChange={() => handleEvent}
      />
    </FormControl>
  );
};

export default InputText;
