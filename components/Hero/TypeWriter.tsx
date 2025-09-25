"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { useState, useEffect } from "react";

export function TypewriterEffectSmoothDemo() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [key, setKey] = useState(0);

  const phrases = [
    [
      { text: "Enterprise" },
      { text: "blockchain" },
      { text: "infrastructure" },
      { text: "and" },
      { text: "AI", className: "text-black" },
    ],
    [
      { text: "DeFi" },
      { text: "bridges" },
      { text: "and" },
      { text: "tokenization.", className: "text-black" },
    ],
    [
      { text: "Advanced" },
      { text: "AI" },
      { text: "analytics" },
      { text: "solutions.", className: "text-black" },
    ],
  ];

  useEffect(() => {
    if (phrases.length) {
      const interval = setInterval(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setKey((prevKey) => prevKey + 1); // Incrementa a key para forçar o re-render
      }, 5000);
      return () => clearInterval(interval);
    }
    // Aumentado para 7 segundos para dar tempo de completar a animação
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[10rem]">
      <TypewriterEffectSmooth 
        key={key} 
        words={phrases[currentPhraseIndex]}
      />
    </div>
  );
}
