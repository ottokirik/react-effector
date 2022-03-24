import { Box } from "@chakra-ui/react";
import { Oval } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Oval width={75} height={75} />
    </Box>
  );
};
