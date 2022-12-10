import * as React from "react";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { BiTime } from "react-icons/bi";

import {
  ChakraProvider,
  Box,
  Flex,
  Container,
  Text,
  Heading,
  Img,
  Stack,
} from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Divider } from "./components/Divider";
import { Infos } from "./components/Infos";

import IllustrationSchool from "./assets/illustration_education.svg";
import { theme } from "./styles/theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box w="100vw" h="100%" bgColor="white">
      <Header />

      <Container as="main" maxW="container.xl">
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
              <Text>Centro Educacional Lacerda</Text>
            </Box>

            <Text my="8">
              O <strong>Centro Educacional Lacerda</strong> é uma instituição de cursos técnicos<br />
              focado no mercado de trabalho, com professores qualificados, estágio incluso<br />
              com preço que cabe no seu bolso.
            </Text>

            <Stack direction="column">
              <Infos text="Mauriti, Ceará" icon={FiMapPin} />

              <Infos text="(88) 94002-8922" icon={BsTelephone} />
              
              <Infos text="08:00 - 17:00" icon={BiTime} />
            </Stack>
          </Box>

          <Img src={IllustrationSchool} w="400px" />
        </Flex>

        <Divider option="right" />
      </Container>
    </Box>
  </ChakraProvider>
)
