import { FormLabel, FormControl, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface Props {
  name: string;
  placeholder: string;
}

const InputPhone = (props: Props) => {
  const [phone, setPhone] = useState(0);

  const handlePhone = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPhone(parseInt(e.target.value));
  };
  return (
    <FormControl>
      <FormLabel>{props.name}</FormLabel>
      <Input
        type="tel"
        placeholder={props.placeholder}
        onChange={() => handlePhone}
        border="1px"
        borderColor="gray"
        borderRadius="1px"
        w="sm"
      />
    </FormControl>
  );
};

export default InputPhone;
