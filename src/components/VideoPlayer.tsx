import React, { memo, useEffect, useRef, useState } from "react";
//@ts-ignore
import videojs from "@mux/videojs-kit";
import "@mux/videojs-kit/dist/index.css";

import { Box } from "@chakra-ui/react";
import { muxURLReplace } from "../utils/mux-url-replace";

export default memo(
  ({
    url,
    title,
    setVideoPlayer,
  }: {
    url: string;
    title: string;
    setVideoPlayer: (player: HTMLVideoElement | null) => void;
  }) => {
    const videoRef = useRef<HTMLVideoElement>({} as HTMLVideoElement);
    const playerRef = useRef<any>();
    // useEffect(() => {
    //   // plavolume
    //   if (volume > 0) {
    //     videoRef.current.muted = false;
    //     videoRef.current.volume = volume / 100;
    //   } else {
    //     videoRef.current.muted = true;
    //   }
    // }, [volume]);

    useEffect(() => {
      playerRef.current = videojs(videoRef.current, {
        autoPlay: true,
        muted: true,
        timelineHoverPreviews: true,
        plugins: {
          mux: {
            debug: false,
            data: {
              env_key: process.env.REACT_APP_MUX_KEY,
              video_title: title,
            },
          },
        },
      });
      const arr = [
        "loadstart",
        "suspend",
        "abort",
        "error",
        "emptied",
        "stalled",
        "loadedmetadata",
        "loadeddata",
        "canplay",
        "canplaythrough",
        "playing",
        "waiting",
        "seeking",
        "seeked",
        "ended",
        "durationchange",
        "timeupdate",
        "progress",
        "play",
        "pause",
        "ratechange",
        "resize",
        "volumechange",
      ];
      setVideoPlayer(playerRef.current.player());
      return () => {
        if (playerRef.current) {
          playerRef.current.dispose();
          setVideoPlayer(null);
        }
      };
    }, []);

    useEffect(() => {
      if (!playerRef.current) return;
      playerRef.current.src({
        src: muxURLReplace(url),
        type: "video/mux",
      });
    }, [url]);

    return (
      <Box
        w="100%"
        d="flex"
        alignItems="center"
        justifyContent="center"
        pos="relative"
      >
        <video
          controls={false}
          playsInline
          autoPlay
          muted
          onError={() => alert(1)}
          ref={videoRef}
          style={{
            position: "absolute",
          }}
        />
      </Box>
    );
  }
);
