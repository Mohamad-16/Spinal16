import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';
import AnimatedBackground from './AnimatedBackground';

const seasons = [
  {
    name: 'Spring',
    emoji: '🌸',
    title: 'New Beginnings',
    message: 'Like spring brings new life, you brought new meaning to mine. Every moment with you feels like the first bloom of flowers after winter.',
    gradient: 'from-pink-400 via-rose-400 to-pink-500',
    color: 'text-pink-600',
  },
  {
    name: 'Summer',
    emoji: '☀️',
    title: 'Passionate Love',
    message: 'Our love burns bright like the summer sun. Your warmth fills my days with joy, laughter, and endless adventures together.',
    gradient: 'from-yellow-400 via-orange-400 to-red-400',
    color: 'text-orange-600',
  },
  {
    name: 'Autumn',
    emoji: '🍂',
    title: 'Deep Connection',
    message: 'Like autumn leaves that change beautifully, our love grows deeper and richer with each passing day. I cherish every moment we share.',
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    color: 'text-amber-600',
  },
  {
    name: 'Winter',
    emoji: '❄️',
    title: 'Forever Together',
    message: 'Even in the coldest winter, your love keeps me warm. Together, we can weather any storm. You are my forever, my always.',
    gradient: 'from-blue-400 via-cyan-400 to-blue-500',
    color: 'text-blue-600',
  },
];

export default function SeasonCards({ onNext }) {
  const { theme, isDarkMode } = useTheme();
  const [selectedSeason, setSelectedSeason] = useState(null);

  return (
    <div className={`relative w-full min-h-screen flex items-center justify-center ${isDarkMode ? theme.bgDark : theme.bgLight} py-20 px-4`}>
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {selectedSeason === null ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center mb-12"
              >
                <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
                  Our Love Through Every Season
                </h2>
                <p className={`font-body text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>
                  Choose a season to explore our journey
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {seasons.map((season, index) => (
                  <motion.button
                    key={season.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSeason(season)}
                    className={`relative p-8 rounded-3xl backdrop-blur-sm ${isDarkMode ? 'bg-white/10' : 'bg-white/50'} overflow-hidden group`}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${season.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}
                    />
                    <div className="text-6xl mb-4">{season.emoji}</div>
                    <h3 className={`font-display text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      {season.name}
                    </h3>
                    <p className={`font-romantic text-xl ${season.color}`}>
                      {season.title}
                    </p>
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <motion.button
                  onClick={onNext}
                  className={`px-12 py-4 bg-gradient-to-r ${theme.gradient} text-white text-xl font-display rounded-full shadow-lg ${theme.glow}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Continue Journey 💖
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <motion.div
                className={`p-12 rounded-3xl backdrop-blur-lg ${isDarkMode ? 'bg-white/10' : 'bg-white/70'}`}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(244, 63, 94, 0.3)',
                    '0 0 50px rgba(244, 63, 94, 0.5)',
                    '0 0 30px rgba(244, 63, 94, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="text-8xl mb-6 text-center"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  {selectedSeason.emoji}
                </motion.div>
                <h3 className={`font-display text-4xl font-bold mb-4 text-center bg-gradient-to-r ${selectedSeason.gradient} bg-clip-text text-transparent`}>
                  {selectedSeason.name}
                </h3>
                <h4 className={`font-romantic text-2xl mb-6 text-center ${selectedSeason.color}`}>
                  {selectedSeason.title}
                </h4>
                <p className={`font-body text-xl leading-relaxed text-center ${isDarkMode ? 'text-white/90' : 'text-gray-700'}`}>
                  {selectedSeason.message}
                </p>
                
                <motion.button
                  onClick={() => setSelectedSeason(null)}
                  className={`mt-8 w-full px-8 py-3 bg-gradient-to-r ${selectedSeason.gradient} text-white text-lg font-display rounded-full`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Seasons
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
