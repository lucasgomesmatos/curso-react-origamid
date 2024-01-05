import { useRef } from 'react';
import videoSrc from './video.mp4';

export const App = () => {
  const ref = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    if (ref.current) {
      if (ref.current.paused) ref.current.play();
      else ref.current.pause();
    }
  }

  function handlePlus2() {
    if (ref.current) {
      ref.current.currentTime += 2;
    }
  }

  function handleCurrentTimeX1() {
    if (ref.current) {
      ref.current.playbackRate = 1;
    }
  }

  function handleCurrentTimeX2() {
    if (ref.current) {
      ref.current.playbackRate = 2;
    }
  }

  function handlePIP() {
    if (ref.current) {
      ref.current.requestPictureInPicture();
    }
  }

  function handleMute() {
    if (ref.current) {
      ref.current.muted = !ref.current.muted;
    }
  }

  return (
    <div className=" container">
      <div className="flex">
        <button onClick={handlePlay}>Pause</button>
        <button onClick={handlePlus2}>+2</button>
        <button onClick={handleCurrentTimeX1}>1x</button>
        <button onClick={handleCurrentTimeX2}>2x</button>
        <button onClick={handlePIP}>PIP</button>
        <button onClick={handleMute}>M</button>
      </div>
      <video controls ref={ref} src={videoSrc}></video>
    </div>
  );
};
