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

      <Flex
        w="full"
        alignItems="center"
        justifyContent="space-evenly"
        flexDir={["column", "row"]}
        px={["", "4"]}
      >
        <Img
          w={["200px", "", "250px", "300px"]}
          src="https://www.ciadeestagios.com.br/vagas/rogga/assets/mulher-negra-sorrindo-f3681e60b1.png" />

        <Center flexDir="column" mt={["6", "0"]} ml={["", "0"]}>
          <Text color="black" textAlign={["center", "justify"]} w={["", "fit-content", "400px"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, consequuntur.<br />
            Natus, quod possimus aspernatur voluptates culpa quos aperiam nisi fuga corporis<br />
            fugit repudiandae ratione esse cum iste, architecto consectetur laborum.
          </Text>

          <Text color="black" textAlign={["center", "justify"]} mt={["5", "", "10"]} w={["", "fit-contet", "400px"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, consequuntur.<br />
            Natus, quod possimus aspernatur voluptates culpa quos aperiam nisi fuga corporis<br />
            fugit repudiandae ratione esse cum iste, architecto consectetur laborum.
          </Text>
        </Center>
      </Flex>
    </Flex>
  )
}