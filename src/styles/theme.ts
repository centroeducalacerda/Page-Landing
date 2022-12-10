import { extendTheme } from "@chakra-ui/react"

const newTheme = {
  fonts: {
    heading: "Nunito Sans",
    body: "Nunito Sans"
  }
}

export const theme = extendTheme(newTheme);