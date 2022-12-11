import { Flex, Heading, Img, Center, Text } from "@chakra-ui/react";

export function ResponsibleSection() {
  return (
    <Flex
      id="responsible"
      as="section" 
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      mt="-100px"
    >
      <Heading
        as="h4"
        color="blue.600"
        borderBottom="2px"
        borderBottomColor="blue.400"
        mb="10"
        px="4"
      >Responsável</Heading>

      <Flex w="full" justifyContent="space-evenly">
        <Img
          w="200px"
          src="https://www.ciadeestagios.com.br/vagas/rogga/assets/mulher-negra-sorrindo-f3681e60b1.png" />

        <Center flexDir="column">
          <Text color="black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, consequuntur.<br />
            Natus, quod possimus aspernatur voluptates culpa quos aperiam nisi fuga corporis<br />
            fugit repudiandae ratione esse cum iste, architecto consectetur laborum.
          </Text>

          <Text color="black" mt="10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, consequuntur.<br />
            Natus, quod possimus aspernatur voluptates culpa quos aperiam nisi fuga corporis<br />
            fugit repudiandae ratione esse cum iste, architecto consectetur laborum.
          </Text>
        </Center>
      </Flex>
    </Flex>
  )
}