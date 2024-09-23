"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { useState, useEffect } from "react";

export function TypewriterEffectSmoothDemo() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [key, setKey] = useState(0);

  const phrases = [
    [
      { text: "Build" },
      { text: "awesome" },
      { text: "automations" },
      { text: "with" },
      { text: "Accelar.", className: "text-blue-500 dark:text-blue-500" },
    ],
    [
      { text: "Accelerate" },
      { text: "your" },
      { text: "productivity" },
      { text: "journey.", className: "text-green-500 dark:text-green-500" },
    ],
    [
      { text: "Automate" },
      { text: "efficiently" },
      { text: "boring" },
      { text: "tasks.", className: "text-purple-500 dark:text-purple-500" },
    ],
    [
        { text: "Create" },
        { text: "powerfull" },
        { text: "browser" },
        { text: "summaries.", className: "text-yellow-500 dark:text-yellow-500" },
      ],
    // Adicione mais frases conforme necessário
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      setKey((prevKey) => prevKey + 1); // Incrementa a key para forçar o re-render
    }, 5000); // Aumentado para 7 segundos para dar tempo de completar a animação

    return () => clearInterval(interval);
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
