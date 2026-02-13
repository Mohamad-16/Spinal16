import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';

const letterText = [
  "My Dearest Love,",
  "",
  "Every day with you feels like a dream I never want to wake from.",
  "Your smile lights up my darkest days, and your laughter is the",
  "most beautiful melody I've ever heard.",
  "",
  "You are my best friend, my partner in crime, my comfort on hard days,",
  "and my greatest adventure. With you, I've found a love I didn't",
  "know existed - a love that grows stronger with each passing moment.",
  "",
  "Thank you for being you. Thank you for choosing me. Thank you for",
  "all the little things you do that make my heart overflow with joy.",
  "",
  "I promise to love you fiercely, cherish you deeply, and stand by",
  "your side through every season of life.",
  "",
  "Forever and always,",
  "Your Valentine 💖"
];

export default function LoveLetter({ onNext }) {
  const { theme, isDarkMode } = useTheme();
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < letterText.length) {
      const timer = setTimeout(() => {
        setVisibleLines([...visibleLines, letterText[currentLineIndex]]);
        setCurrentLineIndex(currentLineIndex + 1);
      }, letterText[currentLineIndex] === "" ? 200 : 800);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, visibleLines]);

  // Floating hearts
  const floatingHearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 3,
  }));

  return (
    <div className={`relative w-full min-h-screen flex items-center justify-center ${isDarkMode ? theme.bgDark : theme.bgLight} py-20 px-4 overflow-hidden`}>
      {/* Floating Background Hearts */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          💖
        </motion.div>
      ))}

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
            A Letter From My Heart
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className={`relative p-12 rounded-2xl backdrop-blur-lg ${isDarkMode ? 'bg-white/10' : 'bg-white/80'} shadow-2xl`}
          style={{
            backgroundImage: isDarkMode 
              ? 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)' 
              : 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)',
            backgroundSize: '100% 30px',
          }}
        >
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 text-2xl">✨</div>
          <div className="absolute top-4 right-4 text-2xl">✨</div>
          <div className="absolute bottom-4 left-4 text-2xl">💕</div>
          <div className="absolute bottom-4 right-4 text-2xl">💕</div>

          <div className="space-y-4">
            {visibleLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`font-romantic text-lg md:text-xl ${
                  line === "" 
                    ? 'h-2' 
                    : line.includes('Dearest') || line.includes('Forever')
                    ? `${isDarkMode ? 'text-white' : 'text-gray-800'} font-bold`
                    : `${isDarkMode ? 'text-white/90' : 'text-gray-700'}`
                }`}
              >
                {line}
                {index === visibleLines.length - 1 && currentLineIndex < letterText.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                )}
              </motion.p>
            ))}
          </div>

          {currentLineIndex >= letterText.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="text-center text-6xl mb-6"
              >
                💌
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {currentLineIndex >= letterText.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center mt-8"
          >
            <motion.button
              onClick={onNext}
              className={`px-12 py-4 bg-gradient-to-r ${theme.gradient} text-white text-xl font-display rounded-full shadow-lg ${theme.glow}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue 💝
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
