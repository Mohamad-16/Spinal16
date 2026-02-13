import { motion } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';

export default function HeartShower({ onNext }) {
  const { theme, isDarkMode } = useTheme();

  const hearts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 3,
    size: Math.random() * 20 + 20,
  }));

  return (
    <div className={`relative w-full h-screen flex items-center justify-center overflow-hidden ${isDarkMode ? theme.bgDark : theme.bgLight}`}>
      {/* Falling Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-red-500"
          style={{
            left: `${heart.x}%`,
            top: '-10%',
            fontSize: `${heart.size}px`,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(heart.id) * 50],
            rotate: [0, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          💖
        </motion.div>
      ))}

      {/* Floating Hearts Background */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute text-pink-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 30 + 30}px`,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            delay: Math.random(),
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ✨
        </motion.div>
      ))}

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h2
            className={`font-display text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Showering You
          </motion.h2>
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
            with all my love 💕
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
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
            Next Chapter 💝
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
