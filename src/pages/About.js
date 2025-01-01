// src/pages/About.js

import React from "react";
import { Link } from "react-router-dom"; // اطمینان از نصب react-router-dom
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-gray-800 bg-opacity-75 rounded-lg p-8 md:p-16">
          {/* عنوان اصلی صفحه */}
          <h2 className="text-4xl font-bold mb-6">درباره من</h2>

          {/* بخش معرفی داستان */}
          <p className="text-xl mb-4">
            بهترین چیزی که می‌توانستم بعنوان اسم این داستان بگویم همینه:
          </p>
          <h3 className="text-2xl font-semibold mb-4">
            وَهرام ۳۲ ساله، مخترع تنها و در جستجوی امید در میان ویرانه‌های پسا آخرالزمانی ایران
          </h3>

          {/* بخش شعار */}
          <p className="text-lg mb-4">
            چرا این داستانو نوشتم؟ چونکه{" "}
            <span className="font-bold text-blue-400">Catgirl matters</span>
          </p>

          {/* بخش نویسنده */}
          <p className="text-lg mb-6">
             به قلم آریا نامداری، یک دانشجوی خسته از زندگی.
          </p>

          {/* دکمه برگشت به صفحه اصلی */}
          <div className="flex justify-center mb-6">
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
            >
              برگشت به صفحه اصلی
            </Link>
          </div>

          {/* دکمه واتساپ */}
          <div className="flex justify-center">
            <a
              href="https://wa.me/+989015934574"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
            >
              {/* لوگوی واتساپ */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.47A11.74 11.74 0 0012.11 0C5.67 0 .54 5.15.53 11.49a11.7 11.7 0 001.58 5.92l-1.67 5.99a.76.76 0 00.97.91l6.1-1.59a11.65 11.65 0 005.6 1.42h.02c6.44 0 11.67-5.13 11.68-11.48A11.58 11.58 0 0020.52 3.47zM12.1 21.48a9.85 9.85 0 01-5.17-1.45l-.37-.23-4.07 1.06 1.1-3.94-.24-.38a9.93 9.93 0 01-1.39-5.04c.01-5.42 4.42-9.84 9.74-9.84a9.85 9.85 0 016.98 2.88 9.57 9.57 0 012.89 6.95c-.01 5.4-4.43 9.84-9.77 9.84zm5.54-7.38c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.96-.95 1.16-.35.22-.65.07a8.15 8.15 0 01-2.4-1.48 9.02 9.02 0 01-1.66-2.08c-.18-.3 0-.45.13-.6.13-.15.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.6-.49-.51-.67-.52-.17 0-.37-.02-.57-.02s-.52.07-.8.37c-.27.3-1.05 1.03-1.05 2.5s1.08 2.87 1.23 3.07c.15.2 2.14 3.28 5.19 4.59a14.03 14.03 0 001.4.53 3.34 3.34 0 001.53.1c.47-.07 1.46-.6 1.67-1.18.2-.57.2-1.07.15-1.18-.05-.1-.25-.2-.55-.35z" />
              </svg>
              انتقادی پیشنهادی حرفی داشتی بهم بگو
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
