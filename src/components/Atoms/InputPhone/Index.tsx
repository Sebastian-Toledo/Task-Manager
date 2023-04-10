import { FormLabel, FormControl, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface Props {
  lable: string;
  disabled?: boolean;
  placeholder?: string;
  value?: number;
}

const InputPhone = (props: Props) => {
  const [getPhone, setPhone] = useState(props.value || 0);

  const handlePhone = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPhone(parseInt(e.target.value));
  };
  return (
    <FormControl>
      <FormLabel>{props.lable}</FormLabel>
      <Input
        disabled={props.disabled}
        type="tel"
        placeholder={props.placeholder}
        onChange={() => handlePhone}
        border="1px"
        borderColor="gray"
        borderRadius="1px"
        w="sm"
        value={getPhone}
      />
    </FormControl>
  );
};

export default InputPhone;
