// TypingAnimation.jsx
import React, { useState, useEffect } from 'react';

const titles = [
  'Frontend Developer',
  'Backend Developer',
  'Full-Stack Developer',
  'Software Engineer'
];

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[index];

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentTitle.substring(0, charIndex - 1)
          : currentTitle.substring(0, charIndex + 1)
      );
      setCharIndex(prev => prev + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((index + 1) % titles.length);
      }
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, index, isDeleting]);

  return (
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 min-h-[3.5rem] pb-1">
        {text}
        <span className="inline-block w-[1ch] animate-blink">|</span>
    </h2>
  );
};

export default TypingAnimation;
