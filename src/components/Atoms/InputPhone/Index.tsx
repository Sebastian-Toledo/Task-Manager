import { FormLabel, FormControl, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface Props {
  name: string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
}

const InputPhone = (props: Props) => {
  const [getPhone, setPhone] = useState(props.value || 0);

  const handlePhone = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPhone(parseInt(e.target.value));
  };
  return (
    <FormControl>
      <FormLabel>{props.name}</FormLabel>
      <Input
        disabled={props.disabled}
        bgColor="black"
        color="white"
        border="1px"
        borderColor="gray"
        borderRadius="1px"
        type="text"
        placeholder={props.placeholder}
        onChange={() => handlePhone}
        value={getPhone}
      />
    </FormControl>
  );
};

export default InputPhone;
