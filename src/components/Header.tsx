import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, HStack, Icon, IconButton, Img, Link, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";

import logoImg from "../assets/logo.svg";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    md: false
  });

  return (
    <Flex
      w="full"
      bg="blue.600"
      px={["2", "10"]}
      py="2"
      justifyContent="space-between"
      position="fixed"
      top="0"
      left="0"
      zIndex="100">
      <Flex alignItems="center">
        <Img src={logoImg} w="80px" />

        <Heading
          as="h4"
          fontSize={["sm", "lg"]}
          ml={["2", "4"]}
          color="white"
        >Centro Educacional Lacerda</Heading>
      </Flex>

      {
        isDrawerSidebar ? (
          <>
            <Flex justifyContent="center" alignItems="center">
              <IconButton
                aria-label="Open Navigation"
                icon={<Icon
                  as={RiMenuLine}
                  color="white"
                />}
                fontSize="30"
                ml="8"
                variant="unstyled"
                onClick={onOpen}
              />
            </Flex>

            <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>

                <DrawerBody>
                  <VStack spacing="10" justifyContent="center" h="full">
                    <Link
                      textTransform="uppercase"
                      fontSize="2xl"
                      onClick={onClose}
                      href="#initial">Início</Link>

                    <Link
                      textTransform="uppercase"
                      fontSize="2xl"
                      onClick={onClose}
                      href="#courses">Cursos</Link>

                    <Link
                      textTransform="uppercase"
                      fontSize="2xl"
                      onClick={onClose}
                      href="#responsible">Responsável</Link>
                      
                    <Link
                      textTransform="uppercase"
                      fontSize="2xl"
                      onClick={onClose}
                      href="#contacts">Contatos</Link>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )
          :
          (
            <HStack spacing="4" fontSize="lg" fontWeight={600}>
              <Link color="white" href="#initial">Início</Link>
              <Link color="white" href="#courses">Cursos</Link>
              <Link color="white" href="#responsible">Responsável</Link>
              <Link color="white" href="#contacts">Contatos</Link>
            </HStack>
          )
      }
    </Flex>
  );
}
