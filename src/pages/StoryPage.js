// src/pages/StoryPage.js

import React, { useState } from "react";
import storyData from "../data/storyData";
import StoryNode from "../components/StoryNode";
import Navbar from "../components/Navbar";

const StoryPage = () => {
  // تغییر از "intro" به "start"
  const [currentNode, setCurrentNode] = useState("start");

  const handleChoice = (nextNode) => {
    setCurrentNode(nextNode);
  };

  // پیدا کردن نود جاری با استفاده از find
  const currentData = storyData.find(node => node.id === currentNode);

  // مدیریت نودهای نامعتبر
  if (!currentData) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
        <Navbar />
        <div className="flex justify-center items-center h-full">
          <p>خطا: نود داستان یافت نشد.</p>
        </div>
      </div>
    );
  }

  // مدیریت نود پایان داستان
  if (currentNode === "end") {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
        <Navbar />
        <div className="flex justify-center items-center h-full">
          <p>داستان به پایان رسید. ممنون که بازی کردید!</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <StoryNode
        text={currentData.text}
        choices={currentData.choices}
        onChoice={handleChoice}
        image={currentData.image} // ارسال تصویر به کامپوننت StoryNode
      />
    </div>
  );
};

export default StoryPage;
