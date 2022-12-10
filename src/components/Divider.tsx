import { Box } from "@chakra-ui/react";

interface Props {
  option: "right" | "left";
}

export function Divider({ option }: Props) {
  return (
    <Box
      h="1px"
      my="40"
      background={option === "right" ? 
        "linear-gradient(90deg, rgba(182,197,240,1) 0%, rgba(21,61,244,1) 94%)" : 
        "linear-gradient(270deg, rgba(182,197,240,1) 0%, rgba(21,61,244,1) 94%)"} 
    />
  )
}