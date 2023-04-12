import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface Props {
  name: string;
  value: string;
}

const SelectState = (props: Props) => {
  const [getState, setState] = useState(props.value);

  const handleState = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  return (
    <FormControl>
      <FormLabel>{props.name}</FormLabel>
      <Select
        placeholder="Select option"
        border="1px"
        borderColor="gray"
        borderRadius="1px"
        value={getState}
        onChange={() => handleState}
      >
        <option value="In Process">En Proceso</option>
        <option value="Finished"> Terminado</option>
        <option value="Delivered"> Entregado</option>
        <option value="Canceled"> Anulado</option>
        {}
      </Select>
    </FormControl>
  );
};

export default SelectState;
