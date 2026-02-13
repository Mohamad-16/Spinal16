import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';

const wishes = [
  { text: "May we always find reasons to laugh together, even on the hardest days", emoji: "😊" },
  { text: "May our love continue to grow deeper and stronger with each passing year", emoji: "💪" },
  { text: "May we travel the world together and create unforgettable memories", emoji: "✈️" },
  { text: "May we always be each other's safe place and biggest support", emoji: "🏡" },
  { text: "May we dance in the kitchen and sing off-key without a care", emoji: "💃" },
  { text: "May we build our dream life together, one beautiful day at a time", emoji: "🌟" },
  { text: "May we never go to bed angry and always choose forgiveness", emoji: "💫" },
  { text: "May we celebrate every victory together and comfort each other in defeat", emoji: "🎉" },
  { text: "May we grow old together, hand in hand, still madly in love", emoji: "👵👴" },
  { text: "May we always make time for date nights and keeping romance alive", emoji: "🌹" },
  { text: "May we inspire each other to be the best versions of ourselves", emoji: "⭐" },
  { text: "May our love story be one for the ages, filled with joy and adventure", emoji: "📖" },
];

export default function WishesSection({ onNext }) {
  const { theme, isDarkMode } = useTheme();
  const [visibleWishes, setVisibleWishes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < wishes.length) {
      const timer = setTimeout(() => {
        setVisibleWishes([...visibleWishes, wishes[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, visibleWishes]);

  // Cute bear animation
  const bears = ['🐻', '🧸', '🐨'];

  return (
    <div className={`relative w-full min-h-screen flex items-center justify-center ${isDarkMode ? theme.bgDark : theme.bgLight} py-20 px-4`}>
      {/* Floating hearts background */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            delay: Math.random() * 2,
            repeat: Infinity,
          }}
        >
          💖
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
            My Wishes For Us
          </h2>
          <p className={`font-romantic text-2xl ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>
            12 Promises from My Heart
          </p>
        </motion.div>

        {/* Animated Bear */}
        {currentIndex < wishes.length && (
          <motion.div
            className="text-center mb-8"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <span className="text-6xl">
              {bears[currentIndex % bears.length]}
            </span>
          </motion.div>
        )}

        <div className="space-y-4 mb-8">
          <AnimatePresence>
            {visibleWishes.map((wish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className={`relative p-6 rounded-2xl backdrop-blur-sm ${isDarkMode ? 'bg-white/10' : 'bg-white/60'}`}
              >
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span
                    className="text-3xl flex-shrink-0"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.1,
                      repeat: Infinity,
                    }}
                  >
                    {wish.emoji}
                  </motion.span>
                  <div className="flex-1">
                    <span className={`text-xl font-body ${isDarkMode ? 'text-white/90' : 'text-gray-800'}`}>
                      {wish.text}
                    </span>
                  </div>
                  <motion.div
                    className={`text-2xl font-display font-bold bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>

                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl ${theme.glow} opacity-0`}
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: index * 0.2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {currentIndex >= wishes.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <motion.div
              className="text-6xl mb-6"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              💝
            </motion.div>
            
            <motion.button
              onClick={onNext}
              className={`px-12 py-4 bg-gradient-to-r ${theme.gradient} text-white text-xl font-display rounded-full shadow-lg ${theme.glow}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(244, 63, 94, 0.5)',
                  '0 0 40px rgba(244, 63, 94, 0.8)',
                  '0 0 20px rgba(244, 63, 94, 0.5)',
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                }
              }}
            >
              The Final Chapter 💍
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
