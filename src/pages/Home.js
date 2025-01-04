// src/pages/Home.js

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Home = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("خطا در پخش موسیقی:", error);
        });
      }
    };

    playMusic();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex flex-col"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/pic/home-background.jpg)`,
      }}
    >
      {/* پخش کننده موسیقی */}
      <audio
        ref={audioRef}
        src={`${process.env.PUBLIC_URL}/music/background-music.mp3`}
        loop
      />

      {/* Overlay برای افزایش خوانایی متن */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* نوار ناوبری */}
      <Navbar />

      {/* محتوای اصلی صفحه */}
      <div className="flex-grow flex items-center justify-center text-center relative z-10 px-4">
        <div>
          {/* عنوان */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            داستان وهرام
          </motion.h1>

          {/* زیرعنوان */}
          <motion.p
            className="text-lg md:text-2xl text-gray-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            سفری پر از ماجراجویی و تصمیمات حیاتی در دنیایی پساآخرالزمانی
          </motion.p>

          {/* دکمه شروع داستان */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link
              to="/story"
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              شروع داستان
            </Link>
          </motion.div>
        </div>
      </div>

      {/* عناصر تزئینی */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 z-10">
        <motion.div
          className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
        <motion.div
          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
        />
        <motion.div
          className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.9 }}
        />
      </div>

      {/* فوتر */}
      <footer className="absolute bottom-4 w-full text-center text-gray-400 text-sm">
        © 2024 داستان وهرام. تمامی حقوق محفوظ است.
      </footer>
    </div>
  );
};

export default Home;
