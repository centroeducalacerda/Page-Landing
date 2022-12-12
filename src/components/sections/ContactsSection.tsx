import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import { BsTelephone, BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

import { Infos } from "../Infos";

export function ContactsSection() {
  return (
    <Flex
      id="contacts"
      as="section" 
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      mt="-100px"
      pb="60"
    >
      <Heading
        as="h4"
        color="blue.600"
        borderBottom="2px"
        borderBottomColor="blue.400"
        mb="10"
        px="4"
      >Contatos</Heading>

      <Flex w="full" mt="10" color="black" justifyContent="space-evenly" flexDir={["column", "column", "column", "row"]}>
        <Box w={["fit-content", "", "", "24rem"]}>
          <Heading as="h5" fontWeight={700} fontSize="4xl" mb={["2", "4"]}>Entre em contato com a gente</Heading>

          <Text color="#757575" fontSize="lg">
            Entre em contato com a <strong>CELL</strong> e venha conhecer
            nossos cursos e nos seguir em nossas redes sociais
          </Text>
        </Box>

        <VStack alignItems="flex-start" mt={["6", "6", "10", "0"]}>
          <Infos text="(88) 99626-1283" icon={BsTelephone} />
          <Infos text="@centro.edulacerda" icon={BsInstagram} />
          <Infos text="centro.lacerda@gmail.com" icon={HiOutlineMail} />
        </VStack>
      </Flex>
    </Flex>
  )
}