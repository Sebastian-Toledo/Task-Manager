import { FormControl, FormLabel, Select } from "@chakra-ui/react";

interface Props {
  name: string;
  disabled?: boolean;
  value?: number;
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
        value={props.value}
      >
        <option value="1">1 Dia</option>
        <option value="2"> 2 - 3 Dias</option>
        <option value="3"> 4 - 7 Dias</option>
        <option value="4"> 8 - 10 Dias</option>
        {}
      </Select>
    </FormControl>
  );
};

export default SelectEstimated;
