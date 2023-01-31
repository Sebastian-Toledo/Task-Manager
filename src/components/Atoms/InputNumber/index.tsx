import { FormLabel, FormControl, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface Props {
  name: string;
  placeholder: string;
}

const InputNumber = (props: Props) => {
  const [number, setNumber] = useState(0);

  const handleNumber = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNumber(parseInt(e.target.value));
  };
  return (
    <FormControl>
      <FormLabel>{props.name}</FormLabel>
      <Input
        placeholder={props.placeholder}
        onChange={() => handleNumber}
        border="1px"
        borderColor="gray"
        borderRadius="1px"
        w="sm"
      />
    </FormControl>
  );
};

export default InputNumber;
