import { FormLabel, FormControl, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface Props {
  name: string;
  placeholder: string;
  value?: number;
  disabled?: boolean;
}

const InputNumber = (props: Props) => {
  const [number, setNumber] = useState(0);

  const handleNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(e.target.value));
  };
  return (
    <FormControl>
      <FormLabel>{props.name}</FormLabel>
      <Input
        placeholder={props.placeholder}
        onChange={handleNumber}
        bgColor="black"
        color="white"
        border="1px"
        borderColor="gray"
        borderRadius="1px"
        w="sm"
        disabled={props.disabled}
        value={props.value}
      />
    </FormControl>
  );
};

export default InputNumber;
