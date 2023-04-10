import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import input from "./styles";
import { Field } from "formik";

interface Props {
  name?: string;
  lable: string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
}

const InputText = (props: Props) => {
  const [getText, setText] = useState(props.value || " ");

  const handleEvent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    console.log(getText);
  };

  return (
    <FormControl>
      <FormLabel htmlFor="text">{props.lable}</FormLabel>
      <Field
        disabled={props.disabled}
        placeholder={props.placeholder}
        id={props.name}
        type="text"
        name={props.name}
        sx={input}
        as={Input}
        onChange={() => handleEvent}
      />
    </FormControl>
  );
};

export default InputText;
