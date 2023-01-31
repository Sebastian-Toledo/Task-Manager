import { FormControl, FormLabel, Select } from "@chakra-ui/react";

interface Props {
  name: string;
}

const SelectEstimated = (props: Props) => {
  return (
    <FormControl>
      <FormLabel>{props.name}</FormLabel>
      <Select
        placeholder="Select option"
        border="1px"
        borderColor="gray"
        borderRadius="1px"
      >
        <option value="1 Dia">1 Dia</option>
        <option value="1-3 Dias"> 1 - 3 Dias</option>
        <option value="3-7 Dias"> 3 - 7 Dias</option>
        <option value="7 o mas Dias"> 7 o mas Dias</option>
      </Select>
    </FormControl>
  );
};

export default SelectEstimated;
