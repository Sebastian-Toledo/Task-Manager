import { Flex, Text, Divider } from "@chakra-ui/react";

interface Props {
  lable: string;
  gap: number;
}

const SubTitle = (props: Props) => {
  return (
    <Flex flexDir="column" gap={props.gap}>
      <Text as="b" color="gray.400">
        {props.lable}
      </Text>
      <Divider border="1px" color="gray.300" />
    </Flex>
  );
};

export default SubTitle;
