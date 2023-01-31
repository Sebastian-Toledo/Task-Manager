import { Flex, Text, Divider } from "@chakra-ui/react";

interface Props {
  name: string;
  gap: number;
}

const SubTitle = (props: Props) => {
  return (
    <Flex flexDir="column" gap={props.gap}>
      <Text as="b" color="gray.300">
        {props.name}
      </Text>
      <Divider border="1px" color="gray.300" />
    </Flex>
  );
};

export default SubTitle;
