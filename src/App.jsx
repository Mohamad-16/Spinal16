import { useState } from 'react';
import { ThemeProvider } from './utils/ThemeContext';
import WelcomeScreen from './components/WelcomeScreen';
import ThemeSelector from './components/ThemeSelector';
import PhotoMatchGame from './components/PhotoMatchGame';
import HeartShower from './components/HeartShower';
import SeasonCards from './components/SeasonCards';
import LoveLetter from './components/LoveLetter';
import WishesSection from './components/WishesSection';
import ProposalReveal from './components/ProposalReveal';
import Navigation from './components/Navigation';

function AppContent() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    <WelcomeScreen key="welcome" onNext={() => setCurrentSection(1)} />,
    <ThemeSelector key="theme" onNext={() => setCurrentSection(2)} />,
    <PhotoMatchGame key="game" onComplete={() => setCurrentSection(3)} />,
    <HeartShower key="hearts" onNext={() => setCurrentSection(4)} />,
    <SeasonCards key="seasons" onNext={() => setCurrentSection(5)} />,
    <LoveLetter key="letter" onNext={() => setCurrentSection(6)} />,
    <WishesSection key="wishes" onNext={() => setCurrentSection(7)} />,
    <ProposalReveal key="proposal" />,
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {sections[currentSection]}
      {currentSection > 0 && currentSection < sections.length - 1 && (
        <Navigation
          current={currentSection}
          total={sections.length}
          onPrev={() => setCurrentSection(Math.max(0, currentSection - 1))}
          onNext={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
