import { useRef, useState } from 'react';
import videoSrc from './video.mp4';

export const App = () => {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlus2() {
    if (!ref.current) return;
    ref.current.currentTime += 2;
  }

  function handleCurrentTimeX1() {
    if (!ref.current) return;
    ref.current.playbackRate = 1;
  }

  function handleCurrentTimeX2() {
    if (!ref.current) return;
    ref.current.playbackRate = 2;
  }

  function handlePictureAndPicture() {
    if (!ref.current) return;

    if (!document.pictureInPictureElement) {
      ref.current.requestPictureInPicture();
    } else {
      document.exitPictureInPicture();
    }
  }

  function handleMute() {
    if (!ref.current) return;
    ref.current.muted = !ref.current.muted;
  }

  return (
    <div className=" container">
      <div className="flex">
        {playing ? (
          <button onClick={() => ref.current?.pause()}>Pause</button>
        ) : (
          <button onClick={() => ref.current?.play()}>Play</button>
        )}
        <button onClick={handlePlus2}>+2</button>
        <button onClick={handleCurrentTimeX1}>1x</button>
        <button onClick={handleCurrentTimeX2}>2x</button>
        <button onClick={handlePictureAndPicture}>PIP</button>
        <button onClick={handleMute}>M</button>
      </div>
      <video
        controls
        ref={ref}
        src={videoSrc}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      ></video>
    </div>
  );
};
