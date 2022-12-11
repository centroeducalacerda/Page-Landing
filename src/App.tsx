import * as React from "react";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";

import { Header } from "./components/Header";
import { Divider } from "./components/Divider";
import { InitialSection } from "./components/sections/InitialSection";
import { CoursesSection } from "./components/sections/CoursesSection";
import { ResponsibleSection } from "./components/sections/ResponsibleSection";
import { ContactsSection } from "./components/sections/ContactsSection";

import { theme } from "./styles/theme";

const Fade = require("react-reveal/Fade");

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box w="100vw" h="100%">
      <Header />

      <Container as="main" maxW="container.xl" mt="28">
        <InitialSection />

        <Divider option="right" />

        <Fade bottom>
          <CoursesSection />

          <Divider option="left" />

          <ResponsibleSection />

          <Divider option="right" />

          <ContactsSection />
        </Fade>
      </Container>
    </Box>
  </ChakraProvider>
)
