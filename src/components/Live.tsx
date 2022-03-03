import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { usePlay } from "../contexts/PlayContext";
import VideoPlayer from "./VideoPlayer";
export default () => {
  const videoUrl =
    "https://stream.mux.com/02i00VwvkDpIh9QVexADgwQTcjs1IbkAOjVpvl802DlQYY.m3u8";
  const title = "Test Title!";
  const { setVideoPlayer } = usePlay();
  const [key, setKey] = useState(1);

  return (
    <>
      <Flex
        flex="1"
        bgColor="black"
        maxW="100%"
        h="100%"
        maxH="100%"
        key={`div-${key}`}
        pos="relative"
      >
        <VideoPlayer
          key={videoUrl + key}
          url={videoUrl}
          title={title}
          setVideoPlayer={setVideoPlayer}
        />
      </Flex>
    </>
  );
};
