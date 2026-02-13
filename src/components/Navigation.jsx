import { motion } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';

export default function Navigation({ current, total, onPrev, onNext }) {
  const { theme, isDarkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-2 left-0 transform -translate-x-1/2 z-50"
    >
      <div className={`flex items-center gap-4 px-6 py-3 rounded-full opacity-50 hover:opacity-90 backdrop-blur-lg ${isDarkMode ? 'bg-white/10' : 'bg-white/60'} shadow-lg`}>
        <button
          onClick={onPrev}
          disabled={current === 0}
          className={`px-4 py-2 rounded-full transition-all text-sm md:text-base ${
            current === 0
              ? 'opacity-30 cursor-not-allowed'
              : `hover:bg-gradient-to-r hover:${theme.gradient} hover:text-slate-400`
          } ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        >
          ← Previous
        </button>

        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current
                  ? `bg-gradient-to-r ${theme.gradient} w-8`
                  : isDarkMode
                  ? 'bg-white/30'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={current === total - 1}
          className={`px-4 py-2 rounded-full transition-all text-sm md:text-base ${
            current === total - 1
              ? 'opacity-30 cursor-not-allowed'
              : `hover:bg-gradient-to-r hover:${theme.gradient} hover:text-slate-400`
          } ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        >
          Next →
        </button>
      </div>
    </motion.div>
  );
}
