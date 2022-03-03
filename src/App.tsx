import "./App.css";
import { Flex } from "@chakra-ui/react";
import VideoPlayer from "./components/VideoPlayer";
import { usePlay } from "./contexts/PlayContext";
import Volume from "./components/Volume";
import Layout from "./components/Layout";

function App() {
  return (
    <Flex
      flex="1"
      bgColor="black"
      maxW="100vw"
      h="100vh"
      maxH="100%"
      pos="relative"
    >
      <Layout />
    </Flex>
  );
}

export default App;
