import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';
import AnimatedBackground from './AnimatedBackground';

// Photo pairs (using emojis as placeholder - replace with actual photo URLs)
const photoPairs = [
  { id: 1, emoji: '💑', matched: false },
  { id: 1, emoji: '💑', matched: false },
  { id: 2, emoji: '💝', matched: false },
  { id: 2, emoji: '💝', matched: false },
  { id: 3, emoji: '🌹', matched: false },
  { id: 3, emoji: '🌹', matched: false },
  { id: 4, emoji: '💕', matched: false },
  { id: 4, emoji: '💕', matched: false },
  { id: 5, emoji: '💖', matched: false },
  { id: 5, emoji: '💖', matched: false },
];

export default function PhotoMatchGame({ onComplete }) {
  const { theme, isDarkMode } = useTheme();
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    // Shuffle cards
    const shuffled = [...photoPairs]
      .map((card, index) => ({ ...card, uniqueId: index }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  useEffect(() => {
    if (matchedPairs.length === photoPairs.length / 2 && matchedPairs.length > 0) {
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  }, [matchedPairs, onComplete]);

  const handleCardClick = (index) => {
    if (isChecking || flippedIndices.includes(index) || matchedPairs.includes(cards[index].id)) {
      return;
    }

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setIsChecking(true);
      setMoves(moves + 1);

      const [first, second] = newFlipped;
      if (cards[first].id === cards[second].id) {
        // Match found!
        setTimeout(() => {
          setMatchedPairs([...matchedPairs, cards[first].id]);
          setFlippedIndices([]);
          setIsChecking(false);
        }, 600);
      } else {
        // No match
        setTimeout(() => {
          setFlippedIndices([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  return (
    <div className={`relative w-full min-h-screen flex items-center justify-center ${isDarkMode ? theme.bgDark : theme.bgLight} py-20 px-4`}>
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
            Our Memory Game
          </h2>
          <p className={`font-body text-lg ${isDarkMode ? 'text-white/80' : 'text-gray-600'} mb-2`}>
            Find all the matching pairs! 💖
          </p>
          <p className={`font-body text-sm ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
            Moves: {moves}
          </p>
        </motion.div>

        <div className="grid grid-cols-5 gap-4 max-w-3xl mx-auto mb-8">
          {cards.map((card, index) => {
            const isFlipped = flippedIndices.includes(index) || matchedPairs.includes(card.id);
            
            return (
              <motion.div
                key={card.uniqueId}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="aspect-square"
              >
                <motion.button
                  onClick={() => handleCardClick(index)}
                  className="w-full h-full relative preserve-3d"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  whileHover={!isFlipped ? { scale: 1.05 } : {}}
                  whileTap={!isFlipped ? { scale: 0.95 } : {}}
                >
                  {/* Card Back */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${theme.gradient} ${theme.glow} flex items-center justify-center backface-hidden`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <span className="text-4xl">❓</span>
                  </div>
                  
                  {/* Card Front */}
                  <div
                    className={`absolute inset-0 rounded-xl ${isDarkMode ? 'bg-white/10' : 'bg-white/80'} backdrop-blur-sm flex items-center justify-center backface-hidden`}
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <motion.span
                      className="text-5xl"
                      animate={matchedPairs.includes(card.id) ? {
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {card.emoji}
                    </motion.span>
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {matchedPairs.length === photoPairs.length / 2 && matchedPairs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <p className={`font-romantic text-4xl ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Perfect! Just like us! 💕
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
