import { FormControl, FormLabel, Select } from "@chakra-ui/react";

interface Props {
  name: string;
  disabled?: boolean;
}

const SelectEstimated = (props: Props) => {
  return (
    <FormControl>
      <FormLabel>{props.name}</FormLabel>
      <Select
        disabled={props.disabled}
        placeholder="Select option"
        border="1px"
        borderColor="gray"
        borderRadius="1px"
      >
        <option value="1">1 Dia</option>
        <option value="2"> 1 - 3 Dias</option>
        <option value="2"> 3 - 7 Dias</option>
        <option value="4"> 7 o 14 Dias</option>
      </Select>
    </FormControl>
  );
};

export default SelectEstimated;
