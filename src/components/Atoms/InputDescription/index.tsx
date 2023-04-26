import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface Props {
  disabled?: boolean;
  name: string;
  placeholder?: string;
  value?: string;
}

const InputDescription = (props: Props) => {
  const [getText, setText] = useState("");

  const handleEvent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <FormControl>
      <FormLabel>{props.name}</FormLabel>
      <Textarea
        disabled={props.disabled}
        border="1px"
        borderColor="gray"
        borderRadius="1px"
        placeholder={props.placeholder}
        onChange={handleEvent}
        value={props.value}
      />
    </FormControl>
  );
};

export default InputDescription;
