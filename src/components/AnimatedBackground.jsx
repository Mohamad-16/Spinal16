import { motion } from 'framer-motion';
import { useTheme } from '../utils/ThemeContext';

export default function AnimatedBackground() {
  const { isDarkMode } = useTheme();

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {isDarkMode ? (
        // Night Mode - Stars
        particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))
      ) : (
        // Day Mode - Floating Hearts and Flowers
        particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute text-2xl"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          >
            {particle.id % 3 === 0 ? '💖' : particle.id % 3 === 1 ? '🌸' : '✨'}
          </motion.div>
        ))
      )}
    </div>
  );
}
