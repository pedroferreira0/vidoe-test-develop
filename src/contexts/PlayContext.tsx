import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
  useRef,
  useMemo,
  useCallback,
} from "react";

type Props = {
  children: ReactNode;
};

interface PlayContext {
  setVideoPlayer: (player: HTMLVideoElement | null) => void;
  setPlaying: (state: boolean) => void;
  playing: boolean;
  setVolume: (volume: number) => void;
  volume: number;
  toggleMutte: () => void;
  showVolume: boolean;
}

const PlayContext = createContext({} as PlayContext);

export function usePlay() {
  return useContext(PlayContext);
}

export default ({ children }: Props) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [showVolume, setShowVolume] = useState<boolean>(true);

  const didMountPlayRef = useRef(false);
  const didMountSoundRef = useRef(false);
  const videoRef = useRef<any>();
  const defaulVolume = 0;
  const [value, setValue] = useState(defaulVolume);
  const lastValue = useRef(defaulVolume);

  useEffect(() => {
    if (!videoRef.current) return;
    if (value > 0) {
      videoRef.current.muted(false);
      videoRef.current.volume(value / 100);
    } else {
      videoRef.current.muted(true);
    }
  }, [value]);

  const toggleMutte = useCallback(() => {
    const _value = value > 0 ? 0 : lastValue.current || 100;
    lastValue.current = value;
    if (videoRef.current) {
      videoRef.current.muted(_value == 0);
      videoRef.current.volume(_value);
    }
    setValue(_value);
  }, [value]);
  const mute = () => {
    setValue((value) => {
      if (value > 0) lastValue.current = value;
      return 0;
    });
  };
  useEffect(() => {}, []);

  useEffect(() => {
    if (playing) {
      setShowVolume(true);
    }
    didMountPlayRef.current = true;
  }, [playing]);

  const setVideoPlayer = useCallback((player) => {
    videoRef.current = player;
  }, []);
  return (
    <PlayContext.Provider
      value={{
        showVolume,
        playing: playing,
        setPlaying: setPlaying,
        volume: value,
        setVolume: (newVolume) => {
          setValue(newVolume);
        },
        toggleMutte,
        setVideoPlayer,
      }}
    >
      {children}
    </PlayContext.Provider>
  );
};
