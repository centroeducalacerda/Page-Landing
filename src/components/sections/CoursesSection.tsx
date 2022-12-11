import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { Course } from "../Course";

export function CoursesSection() {
  return (
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
        px="4"
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
  )
}