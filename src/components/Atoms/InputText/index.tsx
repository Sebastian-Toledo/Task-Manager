import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import input from "./styles";
import { Field } from "formik";

interface Props {
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
}

const InputText = (props: Props) => {
  const [getText, setText] = useState(props.value);

  const handleEvent = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("hola");
    setText(e.target.value);
    console.log("hola", getText);
  };

  return (
    <FormControl>
      <FormLabel htmlFor="text">{props.name}</FormLabel>
      <Input
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
