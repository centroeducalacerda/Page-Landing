import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
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

      <Flex color="black" w="full" justifyContent="space-evenly" mt="10">
        <Box w="24rem">
          <Heading as="h5" fontWeight={700} fontSize="4xl" mb="4">Entre em contato com a gente</Heading>

          <Text color="#757575" fontSize="lg">
            Entre em contato com a <strong>CELL</strong> e venha conhecer <br />
            nossos cursos e nos seguir em nossas redes sociais
          </Text>
        </Box>

        <VStack alignItems="flex-start">
          <Infos text="(88) 99626-1283" icon={BsTelephone} />
          {/* <Infos text="emailexemplo@gmail.com" icon={HiOutlineMail} /> */}
          <Infos text="@centro.edulacerda" icon={BsInstagram} />
          <Infos text="R. Chagas Sampaio Nº 615 - Mauriti/CE" icon={FiMapPin} />
        </VStack>
      </Flex>
    </Flex>
  )
}