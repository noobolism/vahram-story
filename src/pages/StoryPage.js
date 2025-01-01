// src/pages/StoryPage.js

import React, { useState } from "react";
import storyData from "../data/storyData";
import StoryNode from "../components/StoryNode";
import Navbar from "../components/Navbar";

const StoryPage = () => {
  const [currentNode, setCurrentNode] = useState("intro");

  const handleChoice = (nextNode) => {
    setCurrentNode(nextNode);
  };

  const currentData = storyData[currentNode];

  // Handle invalid node
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

  return (
    <div>
      <Navbar />
      <StoryNode
        text={currentData.text}
        choices={currentData.choices}
        onChoice={handleChoice}
        image={currentData.image} // Pass the image prop
      />
    </div>
  );
};

export default StoryPage;
