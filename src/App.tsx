import * as React from "react";
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react";
import { Header } from "./components/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box w="100vw" h="100vh" bgColor="white">
      <Header />
    </Box>
  </ChakraProvider>
)
