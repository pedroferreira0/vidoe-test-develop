import { Stack } from "@chakra-ui/react";
import Volume from "./Volume";
export default () => {
  return (
    <Stack direction={["row-reverse"]} alignItems="center">
      <Volume />
    </Stack>
  );
};
