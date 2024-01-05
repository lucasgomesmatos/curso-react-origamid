import { useEffect, useRef } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import videoSrc from './video.mp4';

export const App = () => {
  const ref = useRef<HTMLVideoElement>(null);

  const [volume, setVolume] = useLocalStorage('volume', '0');

  useEffect(() => {
    if (!ref.current) return;
    const n = Number(volume);
    if (n >= 0 && n <= 1) ref.current.volume = n;
  }, [volume]);

  return (
    <div className=" container">
      {volume}
      <div className="flex">
        <button onClick={() => setVolume('0')}>0</button>
        <button onClick={() => setVolume('0.5')}>50</button>
        <button onClick={() => setVolume('1')}>100</button>
      </div>
      <video controls ref={ref} src={videoSrc}></video>
    </div>
  );
};
