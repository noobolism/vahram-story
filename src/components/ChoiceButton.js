// src/components/ChoiceButton.js

import React from "react";

const ChoiceButton = ({ text, onClick, type }) => {
  // تعریف استایل‌های مختلف بر اساس نوع
  const baseClasses = "w-full font-semibold py-3 px-6 rounded-full shadow-lg transition-transform duration-200 transform hover:scale-105";

  let variantClasses = "";

  switch (type) {
    case "primary":
      variantClasses = "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white";
      break;
    case "secondary":
      variantClasses = "bg-gradient-to-r from-gray-500 to-blue-500 hover:from-gray-600 hover:to-blue-600 text-white";
      break;
    case "danger":
      variantClasses = "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white";
      break;
    case "success":
      variantClasses = "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white";
      break;
    default:
      variantClasses = "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white";
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {text}
    </button>
  );
};

export default ChoiceButton;
