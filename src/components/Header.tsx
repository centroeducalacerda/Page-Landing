import { Flex, Heading, HStack, Img, Link } from "@chakra-ui/react";

import logoImg from "../assets/logo.svg";

export function Header() {
  return (
    <Flex bg="#172E43" px="10" py="2" justifyContent="space-between">
      <Flex alignItems="center">
        <Img src={logoImg} w="80px" />

        <Heading
          as="h4"
          fontSize="lg"
          ml="4"
        >Centro Educacional Lacerda</Heading>
      </Flex>

      <HStack spacing="4" fontSize="lg" fontWeight={600}>
        <Link href="#initial">Início</Link>
        <Link href="#courses">Cursos</Link>
        <Link href="#responsible">Responsável</Link>
        <Link href="#contacts">Contatos</Link>
      </HStack>
    </Flex>
  );
}
