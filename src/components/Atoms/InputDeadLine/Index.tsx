import { FormLabel, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";

const InputDeadLine = () => {
  const [getDate, setDate] = useState<Date>(new Date());

  const handleDate = (date: Date) => {
    date && setDate(date);
  };
  return (
    <FormControl>
      <FormLabel>Fecha de entrega</FormLabel>
      <Input
        type="date"
        border="1px"
        borderColor="gray"
        borderRadius="1px"
        onChange={() => handleDate}
      />
    </FormControl>
  );
};

export default InputDeadLine;
