# 🚀 QUICK START GUIDE

Get your Valentine's Day surprise running in 3 simple steps!

## Step 1: Install Dependencies
```bash
cd valentine-surprise
npm install
```
This will install all required packages (React, Framer Motion, Tailwind CSS, etc.)

## Step 2: Start Development Server
```bash
npm run dev
```
The app will start at http://localhost:5173

## Step 3: Open in Browser
Visit: **http://localhost:5173**

---

## 🎨 Quick Customizations

### Add Your Photos (Optional)
1. Open `src/components/PhotoMatchGame.jsx`
2. Replace the emoji placeholders with your image URLs
3. Example:
```javascript
const photoPairs = [
  { id: 1, emoji: 'https://your-image-url.com/photo1.jpg', matched: false },
  { id: 1, emoji: 'https://your-image-url.com/photo1.jpg', matched: false },
  // ... more pairs
];
```

### Personalize the Love Letter
1. Open `src/components/LoveLetter.jsx`
2. Edit the `letterText` array with your message

### Customize Wishes
1. Open `src/components/WishesSection.jsx`
2. Modify the `wishes` array with your personal wishes

---

## 🎭 How to Navigate

The app has 8 beautiful sections:
1. Welcome Screen
2. Theme Selector (choose your favorite colors!)
3. Memory Matching Game
4. Heart Shower Animation
5. Season Love Journey
6. Animated Love Letter
7. 12 Wishes for Us
8. Final Proposal 💍

Use the navigation dots at the bottom or click the buttons to move between sections!

---

## 💡 Pro Tips

✨ **Try Both Modes**: Toggle between Day ☀️ and Night 🌙 mode in the Theme Selector
✨ **Explore Themes**: Try all 5 color themes - each has unique animations!
✨ **Mobile Friendly**: The app looks beautiful on phones too!
✨ **Build for Sharing**: Run `npm run build` to create a production version

---

## ❤️ Enjoy Your Romantic Journey!

Remember: This is just the beginning. Feel free to customize every detail to make it perfect for your special someone!
