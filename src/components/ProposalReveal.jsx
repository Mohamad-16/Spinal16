import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';

const loveQuotes = [
  "You are my today and all of my tomorrows",
  "In you, I've found the love of my life and my closest, truest friend",
  "Every love story is beautiful, but ours is my favorite",
  "You are my heart, my life, my one and only thought",
];

export default function ProposalReveal() {
  const { theme, isDarkMode } = useTheme();
  const [stage, setStage] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 2000),   // Heart shower
      setTimeout(() => setStage(2), 4000),   // Photo reveal
      setTimeout(() => setStage(3), 6000),   // Quotes
      setTimeout(() => setStage(4), 8000),   // Angels
      setTimeout(() => setStage(5), 10000),  // Final proposal
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (stage >= 3) {
      const quoteTimer = setInterval(() => {
        setCurrentQuote((prev) => (prev + 1) % loveQuotes.length);
      }, 3000);
      return () => clearInterval(quoteTimer);
    }
  }, [stage]);

  // Massive heart shower
  const massiveHearts = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 2,
    emoji: i % 3 === 0 ? '💖' : i % 3 === 1 ? '❤️' : '😍',
  }));

  // Angel flower girls
  const angels = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: (i % 3) * 33,
    delay: i * 0.3,
  }));

  return (
    <div className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${isDarkMode ? theme.bgDark : theme.bgLight}`}>
      {/* Stage 0-1: Initial entrance and heart shower */}
      <AnimatePresence>
        {stage >= 0 && (
          <>
            {massiveHearts.map((heart) => (
              <motion.div
                key={heart.id}
                className="absolute text-4xl"
                style={{
                  left: `${heart.x}%`,
                  top: '-10%',
                }}
                initial={{ opacity: 0 }}
                animate={{
                  y: ['0vh', '110vh'],
                  x: [0, Math.sin(heart.id) * 100],
                  rotate: [0, 360 * 2],
                  opacity: stage >= 1 ? [0, 1, 1, 0] : 0,
                }}
                transition={{
                  duration: heart.duration,
                  delay: heart.delay,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {heart.emoji}
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Particle explosion background */}
      {stage >= 1 && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-rose-500"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 1000],
                y: [0, (Math.random() - 0.5) * 1000],
                scale: [1, 0],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.02,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          ))}
        </motion.div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Stage 2: Photo with glow */}
        <AnimatePresence mode="wait">
          {stage >= 2 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-8"
            >
              <motion.div
                className={`relative inline-block p-4 rounded-3xl backdrop-blur-lg ${isDarkMode ? 'bg-white/20' : 'bg-white/60'}`}
                animate={{
                  boxShadow: [
                    `0 0 30px ${theme.glow}`,
                    `0 0 60px ${theme.glow}`,
                    `0 0 30px ${theme.glow}`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="w-64 h-64 bg-gradient-to-br from-pink-200 to-rose-300 rounded-2xl flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <span className="text-8xl">👩‍❤️‍👨</span>
                  </motion.div>
                </div>
                
                {/* Heart pulse border */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl border-4 ${theme.glow}`}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  style={{
                    borderImage: `linear-gradient(45deg, transparent, ${theme.gradient}) 1`,
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 3: Rotating quotes */}
        <AnimatePresence mode="wait">
          {stage >= 3 && (
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className={`font-romantic text-2xl md:text-3xl ${isDarkMode ? 'text-white' : 'text-gray-800'} italic`}>
                "{loveQuotes[currentQuote]}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 4: Angel flower girls */}
        <AnimatePresence>
          {stage >= 4 && (
            <div className="absolute inset-0 pointer-events-none">
              {angels.map((angel) => (
                <motion.div
                  key={angel.id}
                  className="absolute"
                  style={{ left: `${angel.x}%` }}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{
                    y: ['0%', '100%'],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 6,
                    delay: angel.delay,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {/* Flower petals */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-2xl"
                      animate={{
                        x: [(Math.random() - 0) * 50],
                        y: [0, 50],
                        rotate: [0, 360],
                        opacity: [1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                      }}
                    >
                      🌸
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Stage 5: Final Proposal */}
        <AnimatePresence>
          {stage >= 5 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <motion.h1
                className={`font-display text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Will You Be
              </motion.h1>
              
              <motion.h2
                className={`font-romantic text-4xl md:text-6xl mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              >
                My Valentine
              </motion.h2>

              <motion.div
                className="text-8xl mb-8"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                💍
              </motion.div>

              <motion.h3
                className={`font-display text-3xl md:text-5xl font-bold bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              >
                And My Forever? 💖
              </motion.h3>

              <motion.div
                className="mt-12 flex gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.button
                  className={`px-16 py-6 bg-gradient-to-r ${theme.gradient} text-white text-2xl font-display rounded-full shadow-2xl ${theme.glow}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(244, 63, 94, 0.5)',
                      '0 0 60px rgba(244, 63, 94, 0.9)',
                      '0 0 30px rgba(244, 63, 94, 0.5)',
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                    }
                  }}
                >
                  Yes! 💕 A Thousand Times Yes!
                </motion.button>
              </motion.div>

              <motion.p
                className={`mt-8 font-body text-lg ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                (There's only one right answer 😊)
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
