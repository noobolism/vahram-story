// src/components/MusicPlayer.js

import React, { useEffect, useRef } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("خطا در پخش موسیقی:", error);
        });
      }
    };

    // اضافه کردن تعامل برای پخش موسیقی
    const handleInteraction = () => {
      playMusic();
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={`${process.env.PUBLIC_URL}/music/background-music.mp3`}
      loop
    />
  );
};

export default MusicPlayer;
