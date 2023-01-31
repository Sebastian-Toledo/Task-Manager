import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface Props {
  name: string;
  placeholder: string;
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
        border="1px"
        borderColor="gray"
        borderRadius="1px"
        placeholder={props.placeholder}
        onChange={() => handleEvent}
      />
    </FormControl>
  );
};

export default InputDescription;
