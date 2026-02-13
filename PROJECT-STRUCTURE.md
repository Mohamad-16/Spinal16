# 📂 Project Structure Overview

```
valentine-surprise/
│
├── 📄 Configuration Files
│   ├── package.json           → Dependencies & scripts
│   ├── vite.config.js         → Vite build configuration
│   ├── tailwind.config.js     → Tailwind + 5 theme palettes
│   ├── postcss.config.js      → PostCSS configuration
│   └── .gitignore             → Git ignore rules
│
├── 📄 Documentation
│   ├── README.md              → Complete project documentation
│   ├── QUICKSTART.md          → Get started in 3 steps
│   ├── FEATURES.md            → Detailed feature breakdown
│   └── DEPLOYMENT.md          → How to deploy & share
│
├── 🌐 Entry Files
│   └── index.html             → HTML entry point + fonts
│
└── 📁 src/
    │
    ├── 📄 App Files
    │   ├── main.jsx           → React entry point
    │   ├── App.jsx            → Main app with navigation flow
    │   └── index.css          → Global styles + utilities
    │
    ├── 📁 components/         → All React Components
    │   │
    │   ├── 🎭 Main Sections (in order):
    │   ├── WelcomeScreen.jsx      → 1. Romantic intro
    │   ├── ThemeSelector.jsx      → 2. Choose theme & mode
    │   ├── PhotoMatchGame.jsx     → 3. Memory matching game
    │   ├── HeartShower.jsx        → 4. Falling hearts scene
    │   ├── SeasonCards.jsx        → 5. 4 seasons of love
    │   ├── LoveLetter.jsx         → 6. Animated letter
    │   ├── WishesSection.jsx      → 7. 12 wishes animation
    │   └── ProposalReveal.jsx     → 8. Grand finale! 💍
    │   │
    │   └── 🧩 Utility Components:
    │       ├── AnimatedBackground.jsx  → Stars/flowers bg
    │       └── Navigation.jsx          → Section navigation
    │
    └── 📁 utils/
        └── ThemeContext.jsx   → Theme state management
```

---

## 🎯 Component Relationships

```
App.jsx (Main Container)
│
├─→ ThemeProvider (Wraps everything)
│   │
│   └─→ Current Section (State-based)
│       │
│       ├─→ WelcomeScreen
│       │   └─→ AnimatedBackground
│       │
│       ├─→ ThemeSelector
│       │   └─→ AnimatedBackground
│       │
│       ├─→ PhotoMatchGame
│       │   └─→ AnimatedBackground
│       │
│       ├─→ HeartShower
│       │
│       ├─→ SeasonCards
│       │   └─→ AnimatedBackground
│       │
│       ├─→ LoveLetter
│       │
│       ├─→ WishesSection
│       │
│       └─→ ProposalReveal
│
└─→ Navigation (Bottom bar)
```

---

## 🎨 File Purposes

### Configuration Files:

| File | Purpose | When to Edit |
|------|---------|--------------|
| `package.json` | Dependencies | Adding new libraries |
| `tailwind.config.js` | Colors & themes | Changing color palettes |
| `vite.config.js` | Build settings | Rarely needed |

### Component Files:

| Component | Lines | Purpose | Customize For |
|-----------|-------|---------|---------------|
| `WelcomeScreen.jsx` | ~80 | Opening scene | Change intro text |
| `ThemeSelector.jsx` | ~120 | Theme picker | Add new themes |
| `PhotoMatchGame.jsx` | ~180 | Memory game | Add your photos |
| `HeartShower.jsx` | ~90 | Heart animation | Adjust heart count |
| `SeasonCards.jsx` | ~170 | Season messages | Personalize stories |
| `LoveLetter.jsx` | ~140 | Typed letter | Write your letter |
| `WishesSection.jsx` | ~150 | 12 wishes | Your promises |
| `ProposalReveal.jsx` | ~280 | Final proposal | Ultimate message |

### Utility Files:

| File | Purpose | When to Edit |
|------|---------|--------------|
| `ThemeContext.jsx` | Theme management | Adding theme features |
| `AnimatedBackground.jsx` | Background effects | Change particles |
| `Navigation.jsx` | Section navigation | Customize nav style |
| `index.css` | Global styles | Add custom CSS |

---

## 🔄 Data Flow

```
User Interaction
      ↓
Navigation/Button Click
      ↓
App.jsx (currentSection state)
      ↓
Render New Component
      ↓
Component reads ThemeContext
      ↓
Apply theme colors/styles
      ↓
Animate with Framer Motion
      ↓
Display to User
```

---

## 🎯 Quick Edit Guide

### Want to change...

**Intro Message?**
→ Edit `WelcomeScreen.jsx` lines 15-25

**Love Letter?**
→ Edit `LoveLetter.jsx` lines 8-25 (`letterText` array)

**Wishes?**
→ Edit `WishesSection.jsx` lines 6-19 (`wishes` array)

**Proposal Text?**
→ Edit `ProposalReveal.jsx` lines 200-230

**Photos in Game?**
→ Edit `PhotoMatchGame.jsx` lines 7-16 (`photoPairs`)

**Season Messages?**
→ Edit `SeasonCards.jsx` lines 6-39 (`seasons` array)

**Color Themes?**
→ Edit `tailwind.config.js` lines 12-67 (`colors` section)

**Quotes?**
→ Edit `ProposalReveal.jsx` lines 7-12 (`loveQuotes` array)

---

## 📊 File Sizes (Approximate)

```
Total Project Size: ~50KB (source code)
After npm install: ~200MB (with node_modules)
Production Build: ~500KB (optimized)
```

---

## 🚀 Build Process

```
Source Files (.jsx, .css)
         ↓
      Vite Build
         ↓
    React Compile
         ↓
   Tailwind Process
         ↓
    Code Minify
         ↓
   Asset Optimize
         ↓
   dist/ folder
   (Production Ready!)
```

---

## 💡 Tips for Navigation

1. **Start Here**: `README.md` → `QUICKSTART.md`
2. **Understand Features**: `FEATURES.md`
3. **Customize**: Component files in `src/components/`
4. **Deploy**: `DEPLOYMENT.md`
5. **Debug**: Check browser console, React DevTools

---

## 🎁 Hidden Features

These work automatically but you can customize:

- ✨ Particle counts (adjust for performance)
- ⏱️ Animation timings (speed up/slow down)
- 🎨 Gradient directions (change visual flow)
- 📱 Mobile breakpoints (adjust layouts)
- 🎯 Navigation dots (add/remove sections)

---

**Remember**: Every file has comments to guide you! Don't be afraid to explore and experiment. 💖
