import { Flex, Center, Divider, Img, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  imgUrl: string;
}

export function Course({ text, imgUrl }: Props) {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      bgColor="blue.900"
      rounded="md"
      h="278px"
      _hover={{
        transition: "0.2s",
        transform: "scale(1.1)"
      }}
    >
      <Center mt="12" mb="auto" mx="10">
        <Img w="120px" src={imgUrl} alt={`Ícone de ${text}`} />
      </Center>

      <Divider bg="white" />

      <Text my="3" mx="4" align="center" color="white">{text}</Text>
    </Flex>
  );
}