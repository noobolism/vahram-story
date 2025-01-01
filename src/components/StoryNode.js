// src/components/StoryNode.js

import React from "react";
import ChoiceButton from "./ChoiceButton";
import { motion } from "framer-motion";

const StoryNode = ({ text, choices, onChoice, image }) => {
  return (
    <motion.div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Overlay برای خوانایی بهتر متن */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* کانتینر محتوا */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-8 bg-transparent text-white pt-16">
        <div className="bg-black bg-opacity-60 rounded-lg p-6">
          <p className="text-lg md:text-2xl mb-6 text-right leading-relaxed">
            {text}
          </p>
          <div className="flex flex-col space-y-4">
            {choices.map((choice, index) => (
              <ChoiceButton
                key={index}
                text={choice.text}
                onClick={() => onChoice(choice.next)}
                type={choice.type} // ارسال نوع به ChoiceButton
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StoryNode;
