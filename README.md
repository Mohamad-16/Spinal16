# 💖 Valentine's Day Surprise Web App

A beautiful, interactive Valentine's Day experience built with React and Tailwind CSS. Features stunning animations, romantic themes, and heartfelt messages.

## ✨ Features

- **5 Romantic Color Themes**: Rose Love, Royal Purple, Sunset Love, Ocean Dream, and Forest Romance
- **Dark/Light Mode**: Switch between day and night themes
- **Interactive Memory Game**: Match pairs in a fun photo matching game
- **Animated Scenes**: 
  - Heart shower animations
  - Season-based love journey cards
  - Handwritten love letter with typing effect
  - 12 animated wishes
  - Grand finale proposal reveal
- **Smooth Animations**: Powered by Framer Motion for cinematic transitions
- **Fully Responsive**: Beautiful on mobile, tablet, and desktop

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd valentine-surprise
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🎨 Customization

### Add Your Own Photos

Replace the emoji placeholders in `PhotoMatchGame.jsx` with your actual photos:

```javascript
const photoPairs = [
  { id: 1, emoji: '💑', matched: false }, // Replace emoji with image URL
  // ... more pairs
];
```

### Modify Love Letter

Edit the letter content in `LoveLetter.jsx`:

```javascript
const letterText = [
  "Your custom message here...",
  // ... more lines
];
```

### Update Wishes

Customize the 12 wishes in `WishesSection.jsx`:

```javascript
const wishes = [
  { text: "Your custom wish", emoji: "😊" },
  // ... more wishes
];
```

### Change Color Themes

Modify or add themes in `tailwind.config.js` under the `colors` section.

## 📁 Project Structure

```
valentine-surprise/
├── src/
│   ├── components/
│   │   ├── WelcomeScreen.jsx
│   │   ├── ThemeSelector.jsx
│   │   ├── PhotoMatchGame.jsx
│   │   ├── HeartShower.jsx
│   │   ├── SeasonCards.jsx
│   │   ├── LoveLetter.jsx
│   │   ├── WishesSection.jsx
│   │   ├── ProposalReveal.jsx
│   │   ├── AnimatedBackground.jsx
│   │   └── Navigation.jsx
│   ├── utils/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎭 Navigation Flow

1. **Welcome Screen** - Romantic introduction
2. **Theme Selector** - Choose your favorite color theme
3. **Memory Game** - Interactive photo matching
4. **Heart Shower** - Falling hearts animation
5. **Season Cards** - Explore love through all seasons
6. **Love Letter** - Animated handwritten message
7. **Wishes Section** - 12 beautiful wishes
8. **Proposal Reveal** - Grand finale with proposal

## 🛠️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 📦 Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Google Fonts** - Typography (Playfair Display, Dancing Script, Crimson Text)

## 💡 Tips

- Use the navigation dots at the bottom to move between sections
- Try both dark and light modes for different experiences
- Each theme has its own unique color palette and glow effects
- The app is fully responsive - try it on different devices!

## 🎁 Making It Personal

1. Replace placeholder emojis with actual photos
2. Customize all text content with your personal messages
3. Add your favorite quotes to the proposal section
4. Adjust timing and animations to your preference

## ❤️ Credits

Created with love using modern web technologies. Perfect for surprising someone special on Valentine's Day or any romantic occasion!

## 📄 License

This project is open source and available for personal use. Feel free to customize and share with your loved ones!

---

**Made with 💖 for someone special**
