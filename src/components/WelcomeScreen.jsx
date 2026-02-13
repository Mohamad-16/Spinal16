import { motion } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';
import AnimatedBackground from './AnimatedBackground';

export default function WelcomeScreen({ onNext }) {
  const { theme, isDarkMode } = useTheme();

  return (
    <div className={`relative w-full h-screen flex items-center justify-center ${isDarkMode ? theme.bgDark : theme.bgLight}`}>
      <AnimatedBackground />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className={`font-display text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            To My Love
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className={`font-romantic text-2xl md:text-3xl mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            A special journey awaits you...
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
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
                ease: "easeInOut"
              }
            }}
          >
            Begin Our Journey 💖
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className={`text-4xl flex justify-center items-start ${isDarkMode ? 'text-white/50' : 'text-gray-400'}`}>
            <img className='-rotate-45 w-10 relative top-20 right-6' src="src\assets\cupid.png" alt="Click Here -->" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
