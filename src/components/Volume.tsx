import { useState } from "react";
import {
  Slider,
  Box,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  IconButton,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import { usePlay } from "../contexts/PlayContext";
import { ICONS } from "../consts/icons";
import Icon from "./Icon";

export default () => {
  const { volume, setVolume, toggleMutte, showVolume } = usePlay();
  const [mouseOver, setMouseOver] = useState(false);
  const mobile = useBreakpointValue({ base: true, md: false });
  const isOnTop = true;

  if (!showVolume) return null;

  return (
    <Flex
      mr="3"
      cursor="pointer"
      alignItems="center"
      position="relative"
      role="group"
      onMouseEnter={() => (mobile ? "" : setMouseOver(true))}
      onMouseLeave={() => (mobile ? "" : setMouseOver(false))}
    >
      <IconButton
        onClick={() => toggleMutte()}
        aria-label="volume"
        bg="bgNewButtons"
        borderRadius="full"
        _groupHover={{ borderRadius: !mobile ? "0.5px" : "full" }}
        _hover={{ borderRadius: !mobile ? "0.5px" : "full" }}
        icon={
          volume >= 75 ? (
            <Icon
              filter={"brightness(0) invert(1)"}
              type={ICONS.music.volumeLoud}
              size={"24px"}
            />
          ) : volume >= 50 ? (
            <Icon
              type={ICONS.music.volumeMin}
              filter={"brightness(0) invert(1)"}
              size={"24px"}
            />
          ) : volume > 0 ? (
            <Icon
              filter={"brightness(0) invert(1)"}
              size={"24px"}
              type={ICONS.music.volumeOff}
            />
          ) : (
            <Icon
              size={"24px"}
              filter={"brightness(0) invert(1)"}
              type={ICONS.music.volumeMute}
            />
          )
        }
      />
      {mouseOver && (
        <Flex
          transition="linear all 0.2s"
          marginTop={`${isOnTop && "-0.5"}`}
          position="absolute"
          top={!isOnTop ? "unset" : "100%"}
          bottom={isOnTop ? "unset" : "100%"}
          _hover={{
            display: "flex",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
          _groupHover={{
            display: "flex",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        >
          <Flex
            right="0px"
            width="40px"
            bg="bgNewButtons"
            borderBottomLeftRadius={isOnTop ? "5px" : "0"}
            borderBottomRightRadius={isOnTop ? "5px" : "0"}
            borderTopLeftRadius={!isOnTop ? "5px" : "0"}
            borderTopRightRadius={!isOnTop ? "5px" : "0"}
            _hover={{ display: "flex" }}
            justifyContent={"center"}
            py="2"
          >
            <Slider
              borderRadius={10}
              aria-label="slider-ex-3"
              value={volume}
              defaultValue={volume}
              orientation="vertical"
              minH="28"
              onChange={(value) => setVolume(value)}
              zIndex={11}
            >
              <SliderTrack bg="gray.300">
                <SliderFilledTrack bg="gray.400" />
              </SliderTrack>
              <SliderThumb bg="gray.200" boxShadow="md" />
            </Slider>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
