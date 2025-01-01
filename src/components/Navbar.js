// src/components/Navbar.js

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // مسیرهایی که انیمیشن هدر در آن‌ها غیرفعال است
  const noAnimationPages = ["/", "/about"];

  // بررسی اینکه آیا مسیر فعلی جزو مسیرهای بدون انیمیشن است
  const disableAnimation = noAnimationPages.includes(location.pathname);

  return (
    <div className="fixed top-0 left-0 w-full z-20 group">
      {/* ناحیه‌ی قرارگیری موس برای نمایش هدر */}
      {!disableAnimation && (
        <div className="h-4 w-full bg-transparent cursor-pointer hidden md:block" />
      )}

      {/* هدر اصلی */}
      <nav
        className={`transition-transform duration-300 bg-black bg-opacity-60 ${
          !disableAnimation
            ? "md:transform md:-translate-y-full md:group-hover:translate-y-0"
            : "translate-y-0"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="text-white font-bold text-xl">
            داستان تعاملی وهرام
          </Link>
          <div className="space-x-6">
            <Link to="/about" className="text-white hover:text-gray-300">
              درباره ما
            </Link>
            {/* سایر لینک‌های ناوبری در صورت نیاز */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
