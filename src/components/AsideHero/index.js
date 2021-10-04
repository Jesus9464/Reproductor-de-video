import React, { useRef, useContext, useState, useEffect } from "react";
import {
  MdPlayArrow,
  MdPause,
  MdReplay,
  MdVolumeUp,
  MdVolumeOff,
  MdFullscreenExit,
  MdFullscreen,
  MdZoomOutMap,
} from "react-icons/md";
import {
  ContainerHero,
  Video,
  ContainerButton,
  Button,
  ContainerVolumen,
  Input,
  InputVideo,
  BoxDisplayRange,
  ContainerHeroButton,
} from "./style";
import { ContextDark } from "../../ContextDarkMode";

export const AsideHero = () => {
  const { theme } = useContext(ContextDark);
  const [videoPause, setVidePause] = useState(true);
  const [screen, setScreen] = useState(false);
  const [videoMute, setVideMute] = useState(true);
  const [visibleRange, setVisibleRange] = useState(true);
  const [videoCurrentRange, setvideoCurrentRange] = useState(0);
  const [videoCurrent, setVideoCurrent] = useState({
    minute: pad(0, 2),
    seconds: pad(0, 2),
  });
  const videoRef = useRef();
  const volumenVideo = useRef();

  const handleVideoCurrent = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setVidePause(false);
    } else {
      videoRef.current.pause();
      setVidePause(true);
    }
  };

  const handleReload = () => {
    videoRef.current.load();
  };

  const handleMuted = () => {
    if (!videoRef.current.muted) {
      videoRef.current.muted = true;
      volumenVideo.current.value = 0;
      setVideMute(false);
    } else {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      volumenVideo.current.value = 1;
      setVideMute(true);
    }
  };

  const changeMuted = () => {
    if ((videoRef.current.volume = volumenVideo.current.value) == 0) {
      setVideMute(false);
    } else {
      setVideMute(true);
    }
  };

  function pad(n, width, z) {
    z = z || "0";
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  useEffect(() => {
    const rangeDuration = () =>
      setvideoCurrentRange(videoRef?.current.currentTime);

    const test = () =>
      setVideoCurrent({
        minute: pad(
          Math.ceil(Math.trunc(videoRef?.current.currentTime / 60)),
          2
        ),
        seconds: pad(
          Math.ceil(Math.trunc(videoRef?.current.currentTime % 60)),
          2
        ),
      });

    if (videoRef) {
      videoRef.current.ontimeupdate = function () {
        test();
        rangeDuration();
      };
    }

    return () => {
      videoRef.current.ontimeupdate = undefined;
    };
  }, [videoRef]);

  const changeRangeVideo = (e) => {
    videoRef.current.currentTime = e.target.value;

    setvideoCurrentRange(e.target.value);

    setVideoCurrent({
      minute: pad(Math.ceil(Math.trunc(e.target.value / 60)), 2),
      seconds: pad(Math.ceil(Math.trunc(e.target.value % 60)), 2),
    });

    return e.target.value;
  };

  const changeFullScreen = () => {
    videoRef.current.requestFullscreen();
  };

  return (
    <ContainerHero screen={screen}>
      <BoxDisplayRange
        onMouseEnter={() => setVisibleRange(true)}
        onMouseLeave={() => setVisibleRange(false)}
      >
        <Video
          onClick={handleVideoCurrent}
          ref={videoRef}
          loop
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          width="100%"
          height="470px"
          poster="https://www.researchgate.net/profile/Jaume-Segura-Garcia/publication/320916970/figure/fig3/AS:667648576745482@1536191233299/A-frame-example-from-Big-Buck-Bunny-video-sequence.jpg"
        ></Video>
        <InputVideo
          visible={visibleRange}
          type="range"
          max={videoRef?.current?.duration}
          value={videoCurrentRange}
          onChange={changeRangeVideo}
        />
      </BoxDisplayRange>
      <ContainerButton>
        <ContainerHeroButton>
          <Button dark={theme === "dark"} onClick={handleVideoCurrent}>
            {videoPause ? <MdPlayArrow size="20" /> : <MdPause size="20" />}
          </Button>
          <Button dark={theme === "dark"} onClick={handleReload}>
            <MdReplay />
          </Button>
          <Button dark={theme === "dark"} onClick={() => setScreen(!screen)}>
            {screen ? <MdFullscreenExit /> : <MdFullscreen />}
          </Button>
          <Button dark={theme === "dark"} onClick={changeFullScreen}>
            <MdZoomOutMap />
          </Button>
          <ContainerVolumen>
            <Button dark={theme === "dark"} onClick={handleMuted}>
              {videoMute ? <MdVolumeUp /> : <MdVolumeOff />}
            </Button>
            <Input
              type="range"
              min="0"
              max="1"
              step="0.01"
              ref={volumenVideo}
              onChange={changeMuted}
            />
          </ContainerVolumen>
        </ContainerHeroButton>
        {`${videoCurrent.minute}: ${videoCurrent.seconds}`}
      </ContainerButton>
    </ContainerHero>
  );
};
