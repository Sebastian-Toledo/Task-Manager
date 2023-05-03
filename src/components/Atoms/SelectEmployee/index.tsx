import { FormControl, FormLabel, Select } from "@chakra-ui/react";

interface Props {
  name: string;
  disabled?: boolean;
  value?: string;
}

const SelectEmployee = (props: Props) => {
  return (
    <FormControl>
      <FormLabel>{props.name}</FormLabel>
      <Select
        disabled={props.disabled}
        bgColor="black"
        color="white"
        placeholder="Select option"
        border="1px"
        borderColor="gray"
        borderRadius="1px"
        value={props.value}
      >
        <option value="Ilay"> Ilay</option>
        <option value="Vero"> Vero</option>
        <option value="Gabi"> Gabi</option>
        <option value="Dario"> Dario</option>
        <option value="Flor"> Flor</option>
        <option value="Fran"> Fran</option>
        {}
      </Select>
    </FormControl>
  );
};

export default SelectEmployee;
