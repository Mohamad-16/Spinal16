import { motion } from 'framer-motion';
import { useTheme, themes } from '../utils/ThemeContext';
import AnimatedBackground from './AnimatedBackground';

export default function ThemeSelector({ onNext }) {
  const { currentTheme, setCurrentTheme, isDarkMode, setIsDarkMode, theme } = useTheme();

  const themeKeys = Object.keys(themes);

  return (
    <div className={`relative w-full min-h-screen flex items-center justify-center ${isDarkMode ? theme.bgDark : theme.bgLight} py-20 px-4 pb-32`}>
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className={`font-display text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
            Choose Your Love Theme
          </h2>
          <p className={`font-body text-xl ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>
            Select the colors that speak to your heart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {themeKeys.map((key, index) => {
            const t = themes[key];
            const isSelected = currentTheme === key;
            
            return (
              <motion.button
                key={key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentTheme(key)}
                className={`relative p-6 rounded-2xl backdrop-blur-sm transition-all ${
                  isSelected 
                    ? `${t.glow} ring-4 ring-white/50` 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <div className={`h-32 rounded-xl bg-gradient-to-br ${t.gradient} mb-4`} />
                <h3 className={`font-display text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {t.name}
                </h3>
                <p className={`font-body ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  {t.description}
                </p>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 text-3xl"
                  >
                    ✓
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-6 mb-8"
        >
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`flex items-center hidden gap-3 px-6 py-3 rounded-full backdrop-blur-sm ${
              isDarkMode ? 'bg-white/10' : 'bg-black/10'
            }`}
          >
            <span className="text-2xl">{isDarkMode ? '🌙' : '☀️'}</span>
            <span className={`font-body ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {isDarkMode ? 'Night Mode' : 'Day Mode'}
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            onClick={onNext}
            className={`px-12 py-4 bg-gradient-to-r ${theme.gradient} text-white text-xl font-display rounded-full shadow-lg ${theme.glow}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue 💕
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
