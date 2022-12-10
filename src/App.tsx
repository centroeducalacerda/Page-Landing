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
  SimpleGrid,
} from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Divider } from "./components/Divider";
import { Infos } from "./components/Infos";

import IllustrationSchool from "./assets/illustration_education.svg";
import { theme } from "./styles/theme";
import { Course } from "./components/Course";

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

        <Flex
          id="courses"
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
            w="160px"
            textAlign="center"
          >Cursos</Heading>

          <SimpleGrid columns={3} gap="14">
            <Course
              text="Enfermagem"
              imgUrl="https://seeklogo.com/images/E/enfermagem-logo-97FBC4865A-seeklogo.com.png"
            />

            <Course
              text="Radiologia"
              imgUrl="https://seeklogo.com/images/R/radiologia-logo-A2DDAA5206-seeklogo.com.png"
            />

            <Course
              text="Estética"
              imgUrl="https://i.pinimg.com/originals/bd/ab/4e/bdab4eeb38397aa2d06caadfd4457d4c.png"
            />

            <Course
              text="Segurança do Trabalho"
              imgUrl="https://www.getwet.com.br/wp-content/uploads/2021/06/logotipo-seguranca-do-trabalho-png.png"
            />

            <Course
              text="Recepcionista"
              imgUrl="https://cdn-icons-png.flaticon.com/512/381/381274.png"
            />
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  </ChakraProvider>
)
