import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  rose: {
    name: 'Rose Love',
    primary: 'rose',
    gradient: 'from-rose-400 via-rose-500 to-rose-600',
    bgLight: 'bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100',
    bgDark: 'bg-gradient-to-br from-rose-950 via-pink-950 to-rose-900',
    glow: 'glow-rose',
    description: '💗 Pink, Red & Gold',
  },
  royal: {
    name: 'Royal Purple',
    primary: 'royal',
    gradient: 'from-royal-400 via-royal-500 to-royal-600',
    bgLight: 'bg-gradient-to-br from-royal-50 via-purple-50 to-royal-100',
    bgDark: 'bg-gradient-to-br from-royal-950 via-purple-950 to-royal-900',
    glow: 'glow-royal',
    description: '👑 Purple, White & Silver',
  },
  sunset: {
    name: 'Sunset Love',
    primary: 'sunset',
    gradient: 'from-sunset-400 via-sunset-500 to-sunset-600',
    bgLight: 'bg-gradient-to-br from-sunset-50 via-orange-50 to-yellow-50',
    bgDark: 'bg-gradient-to-br from-sunset-950 via-orange-950 to-sunset-900',
    glow: 'glow-sunset',
    description: '🌅 Orange, Pink & Yellow',
  },
  ocean: {
    name: 'Ocean Dream',
    primary: 'ocean',
    gradient: 'from-ocean-400 via-ocean-500 to-ocean-600',
    bgLight: 'bg-gradient-to-br from-ocean-50 via-cyan-50 to-blue-50',
    bgDark: 'bg-gradient-to-br from-ocean-950 via-cyan-950 to-ocean-900',
    glow: 'glow-ocean',
    description: '🌊 Blue, Cyan & White',
  },
  forest: {
    name: 'Forest Romance',
    primary: 'forest',
    gradient: 'from-forest-400 via-forest-500 to-forest-600',
    bgLight: 'bg-gradient-to-br from-forest-50 via-green-50 to-emerald-50',
    bgDark: 'bg-gradient-to-br from-forest-950 via-green-950 to-forest-900',
    glow: 'glow-forest',
    description: '🌳 Green, Cream & Gold',
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('rose');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const theme = themes[currentTheme];

  const value = {
    currentTheme,
    setCurrentTheme,
    isDarkMode,
    setIsDarkMode,
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
