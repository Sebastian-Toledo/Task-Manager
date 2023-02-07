import { FormLabel, FormControl, Input } from "@chakra-ui/react";
import { useState, ChangeEvent, useEffect } from "react";
import { formatDateAsDatetimeString } from "../../../utils/dateUtils";

interface Props {
  value?: Date;
  disabled?: boolean;
  text?: string;
}

const InputDate = ({ disabled, value, text }: Props) => {
  const [currentDate, setCurrentDate] = useState(
    formatDateAsDatetimeString(new Date())
  );

  useEffect(() => {
    if (value) {
      setCurrentDate(formatDateAsDatetimeString(value));
    }
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentDate(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel>{text}</FormLabel>
      <Input
        type="datetime-local"
        border="1px"
        borderColor="gray"
        borderRadius="1px"
        value={currentDate}
        onChange={handleChange}
        disabled={disabled}
      />
    </FormControl>
  );
};

export default InputDate;
