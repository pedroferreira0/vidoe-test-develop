import { Box } from "@chakra-ui/react";
import { Positions } from "../consts/positions";
import { usePlay } from "../contexts/PlayContext";
import { PositionProps } from "../interfaces";
import { responsiveReturn } from "../utils/responsive-return";
import Header from "./Header";
import Live from "./Live";
import VideoPlayer from "./VideoPlayer";

const Position = ({
  children,
  top,
  left,
  right,
  bottom,
  width,
  bg,
  zIndex,
  height,
  maxHeight,
  maxWidth,
  display,
  hiddeOnJustlive,
}: PositionProps) => {
  const justLive = false;
  return (
    <Box
      position="fixed"
      zIndex={zIndex}
      display={display && responsiveReturn(display, justLive)}
      top={top && responsiveReturn(top, justLive)}
      w={width && responsiveReturn(width, justLive)}
      left={left && responsiveReturn(left, justLive)}
      right={right && responsiveReturn(right, justLive)}
      bottom={bottom && responsiveReturn(bottom, justLive)}
      bg={bg}
      h={height && responsiveReturn(height, justLive)}
      maxH={maxHeight && responsiveReturn(maxHeight, justLive)}
      maxW={maxWidth && responsiveReturn(maxWidth, justLive)}
    >
      {children}
    </Box>
  );
};

export default () => {
  return (
    <>
      <Position
        bg="#000"
        width={Positions.live.width}
        height={Positions.live.height}
      >
        <Live />
      </Position>
      <Position
        top={Positions.header.top}
        bottom={Positions.header.bottom}
        right={Positions.header.right}
        left={Positions.header.left}
        zIndex={9}
      >
        <Header />
      </Position>
    </>
  );
};
