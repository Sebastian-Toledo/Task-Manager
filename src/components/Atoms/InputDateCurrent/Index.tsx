import { FormLabel, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";

const InputDateCurrent = () => {
  const [getDate, setDate] = useState<Date>(new Date());

  const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const formatDate = (date: Date) => {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  };

  const handleDate = (date: Date) => {
    date && setDate(date);
  };
  return (
    <FormControl>
      <FormLabel>Fecha de ingreso</FormLabel>
      <Input
        type="date"
        border="1px"
        borderColor="gray"
        borderRadius="1px"
        value={formatDate(getDate).toString()}
        onChange={() => handleDate}
      />
    </FormControl>
  );
};

export default InputDateCurrent;
