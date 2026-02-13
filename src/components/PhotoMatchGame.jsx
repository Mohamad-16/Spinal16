import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';
import AnimatedBackground from './AnimatedBackground';

// ===== IMPORT YOUR IMAGES (BUILD SAFE) =====
import img1 from '../assets/IMG_20260101_182046_291.webp';
import img2 from '../assets/IMG-20251218-WA0024.jpg';
import img3 from '../assets/IMG-20260101-WA0111.jpg';
import img4 from '../assets/IMG-20260109-WA0019.jpg';
import img5 from '../assets/IMG-20260111-WA0016.jpg';
import img6 from '../assets/IMG-20260115-WA0001.jpg';
import img7 from '../assets/IMG-20260115-WA0002.jpg';
import img8 from '../assets/IMG-20260201-WA0092.jpg';
import img9 from '../assets/IMG-20260209-WA0012.jpg';
import img10 from '../assets/IMG-20260210-WA0008.jpg';

// ===== EMOJI MODE DATA =====
const emojiPairs = [
  { id: 1, emoji: '💑' },
  { id: 2, emoji: '💝' },
  { id: 3, emoji: '🌹' },
  { id: 4, emoji: '💕' },
  { id: 5, emoji: '💖' },
];

// ===== IMAGE MODE DATA =====
const imagePairs = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
  { id: 9, image: img9 },
  { id: 10, image: img10 },
];

export default function PhotoMatchGame({ onComplete }) {
  const { theme, isDarkMode } = useTheme();

  const [gameMode, setGameMode] = useState('emoji'); // 'emoji' | 'image'
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  // ===== SHUFFLE BASED ON MODE =====
  useEffect(() => {
    const source = gameMode === 'emoji' ? emojiPairs : imagePairs;

    const duplicated = source.flatMap((item) => [
      { ...item, uniqueId: `${item.id}-a` },
      { ...item, uniqueId: `${item.id}-b` },
    ]);

    const shuffled = duplicated.sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setMatchedPairs([]);
    setFlippedIndices([]);
    setMoves(0);
  }, [gameMode]);

  // ===== COMPLETE HANDLER =====
  useEffect(() => {
    const totalPairs =
      gameMode === 'emoji' ? emojiPairs.length : imagePairs.length;

    if (matchedPairs.length === totalPairs && totalPairs > 0) {
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1500);
    }
  }, [matchedPairs, gameMode, onComplete]);

  // ===== CARD CLICK =====
  const handleCardClick = (index) => {
    if (
      isChecking ||
      flippedIndices.includes(index) ||
      matchedPairs.includes(cards[index].id)
    ) {
      return;
    }

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setIsChecking(true);
      setMoves((prev) => prev + 1);

      const [first, second] = newFlipped;

      if (cards[first].id === cards[second].id) {
        setTimeout(() => {
          setMatchedPairs((prev) => [...prev, cards[first].id]);
          setFlippedIndices([]);
          setIsChecking(false);
        }, 600);
      } else {
        setTimeout(() => {
          setFlippedIndices([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  const totalPairs =
    gameMode === 'emoji' ? emojiPairs.length : imagePairs.length;

  return (
    <div
      className={`relative w-full min-h-screen flex items-center justify-center ${
        isDarkMode ? theme.bgDark : theme.bgLight
      } py-20 px-4`}
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-5xl mx-auto w-full">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h2
            className={`font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}
          >
            Our Memory Game
          </h2>

          <p
            className={`font-body text-lg ${
              isDarkMode ? 'text-white/80' : 'text-gray-600'
            } mb-2`}
          >
            Find all the matching pairs! 💖
          </p>

          <p
            className={`font-body text-sm ${
              isDarkMode ? 'text-white/60' : 'text-gray-500'
            }`}
          >
            Moves: {moves}
          </p>
        </motion.div>

        {/* ===== MODE TOGGLE ===== */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setGameMode('emoji')}
            className={`px-6 py-2 rounded-full transition ${
              gameMode === 'emoji'
                ? 'bg-pink-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Emoji Mode 💕
          </button>

          <button
            onClick={() => setGameMode('image')}
            className={`px-6 py-2 rounded-full transition ${
              gameMode === 'image'
                ? 'bg-pink-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Our Memories 🖼️
          </button>
        </div>

        {/* ===== GAME GRID ===== */}
        <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto mb-10">
          {cards.map((card, index) => {
            const isFlipped =
              flippedIndices.includes(index) ||
              matchedPairs.includes(card.id);

            return (
              <motion.div
                key={card.uniqueId}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                className="aspect-square"
              >
                <motion.button
                  onClick={() => handleCardClick(index)}
                  className="w-full h-full relative"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  whileHover={!isFlipped ? { scale: 1.05 } : {}}
                  whileTap={!isFlipped ? { scale: 0.95 } : {}}
                >
                  {/* CARD BACK */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${theme.gradient} ${theme.glow} flex items-center justify-center`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <span className="text-4xl">❓</span>
                  </div>

                  {/* CARD FRONT */}
                  <div
                    className={`absolute inset-0 rounded-xl ${
                      isDarkMode ? 'bg-white/10' : 'bg-white/80'
                    } backdrop-blur-sm flex items-center justify-center overflow-hidden`}
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    {card.image ? (
                      <motion.img
                        src={card.image}
                        alt="Memory"
                        className="w-full h-full object-cover"
                        animate={
                          matchedPairs.includes(card.id)
                            ? { scale: [1, 1.1, 1] }
                            : {}
                        }
                        transition={{ duration: 0.5 }}
                      />
                    ) : (
                      <motion.span
                        className="text-5xl"
                        animate={
                          matchedPairs.includes(card.id)
                            ? { scale: [1, 1.2, 1] }
                            : {}
                        }
                        transition={{ duration: 0.5 }}
                      >
                        {card.emoji}
                      </motion.span>
                    )}
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* ===== WIN MESSAGE ===== */}
        <AnimatePresence>
          {matchedPairs.length === totalPairs && totalPairs > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <motion.p
                className={`font-romantic text-4xl ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                Perfect! Just like us! 💕
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
