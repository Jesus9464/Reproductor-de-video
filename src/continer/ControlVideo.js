import { useRef, useState } from "react";

export const ControlVideo = () => {
  const [videoPause, setVidePause] = useState(true);
  const [videoMute, setVideMute] = useState(true);
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

  const changeMuted = (e) => {
    if ((videoRef.current.volume = e.current.value) <= 0) {
      setVideMute(false);
    } else {
      setVideMute(true);
    }
  };
  return {
    changeMuted,
    handleMuted,
    handleReload,
    handleVideoCurrent,
    videoMute,
    videoPause,
  };
};
