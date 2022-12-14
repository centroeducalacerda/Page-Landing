import { Flex, Box, Heading, Stack, Img, Text, useBreakpointValue } from "@chakra-ui/react";

import { BiTime } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

import IllustrationSchool from "../../assets/illustration_education.svg";
import { Infos } from "../Infos";

export function InitialSection() {
  const isPhoneVersion = useBreakpointValue({
    base: true,
    md: false
  });

  return (
    <Flex
      id="initial"
      as="section"
      justifyContent="space-around"
      alignItems="center"
      mt="14"
    >
      <Box color="black">
        <Box>
          <Heading
            as="h2"
            fontSize="7xl"
            color="blue.600"
            lineHeight="1"
          >CELL</Heading>
          <Text fontSize="lg">Centro Educacional Lacerda</Text>
        </Box>

        <Text my="8">
          O <strong>Centro Educacional Lacerda</strong> é uma instituição de cursos técnicos<br />
          focado no mercado de trabalho, com professores qualificados, estágio incluso<br />
          com preço que cabe no seu bolso.
        </Text>

        <Stack direction="column">
          <Infos text="R. Chagas Sampaio Nº 615 - Mauriti/CE" icon={FiMapPin} />

          <Infos text="(88) 99626-1283" icon={BsTelephone} />
          
          <Infos text="centro.lacerda@gmail.com" icon={HiOutlineMail} />

          <Infos text="08:00 - 17:00" icon={BiTime} />
        </Stack>
      </Box>

      {
        !isPhoneVersion && (
          <Img src={IllustrationSchool} w="400px" />
        )
      }
    </Flex>
  );
}