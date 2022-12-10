import { Flex, Circle, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface Props {
  text: string;
  icon: ElementType;
}

export function Infos({ text, icon: Icon }: Props) {
  return (
    <Flex alignItems="center">
      <Circle bgColor="blue.500" p="3">
        <Icon size="20px" color="white" />
      </Circle>

      <Text ml="3">{text}</Text>
    </Flex>
  )
}