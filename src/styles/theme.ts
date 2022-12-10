import { extendTheme } from "@chakra-ui/react"

const newTheme = {
  colors: {
    blue: {
      "600": "#172E43"
    }
  },
  fonts: {
    heading: "Nunito Sans",
    body: "Nunito Sans"
  }
}

export const theme = extendTheme(newTheme);