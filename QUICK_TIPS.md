# 💡 Quick Tips & Tricks

## 🎨 Styling Quick Reference

### Change Button Styles:
```tsx
// Primary button (gradient)
className="btn-primary"

// Outline button
className="btn-outline"

// Custom button
className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
```

### Add Gradient to Text:
```tsx
className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
```

### Create Hover Effects:
```tsx
className="hover:scale-110 hover:shadow-lg transition-all duration-300"
```

---

## 🤖 Chatbot Customization

### Add New Response:
```typescript
// In ai-chatbot.tsx
const predefinedResponses = {
  'your-keyword': 'Your response here',
  'another-keyword': 'Another response'
};
```

### Change Chatbot Colors:
```tsx
// Header gradient (change these classes)
className="bg-gradient-to-r from-blue-600 to-purple-600"

// Button color
className="bg-gradient-to-br from-blue-600 to-purple-600"

// Message bubble color
className="bg-blue-600 text-white"
```

### Change Chatbot Position:
```tsx
// In ai-chatbot.tsx - change these classes
className="fixed bottom-6 right-6"  // Position
className="w-96"                     // Width
className="h-[500px]"                // Height
```

---

## 🎨 Color Customization

### Update Color Palette:
```css
/* In globals.css */
:root {
  --primary: 221 83% 53%;        /* Blue */
  --primary-foreground: 210 40% 98%;
}

.dark {
  --primary: 217 91% 63%;        /* Dark blue */
  --primary-foreground: 222.2 84% 4.9%;
}
```

### Quick Color Changes:
```tsx
// Replace all instances of:
from-blue-600      → from-red-600
to-purple-600      → to-pink-600
bg-blue-100        → bg-red-100
text-blue-700      → text-red-700
```

---

## ⚡ Animation Tips

### Speed Up Animation:
```tsx
transition={{ duration: 0.3 }}  // Was 0.5
```

### Delay Animation:
```tsx
transition={{ delay: 0.2 }}  // 200ms delay
```

### Create Stagger Effect:
```tsx
transition={{ staggerChildren: 0.05 }}  // 50ms between items
```

### Change Easing:
```tsx
transition={{ ease: "easeInOut" }}  // Default
transition={{ ease: "linear" }}     // Constant speed
transition={{ ease: "easeOut" }}    // Fast start
```

---

## 📱 Responsive Design Tips

### Hide on Mobile:
```tsx
className="hidden md:block"  // Shows only on medium screens+
className="md:hidden"         // Shows only on mobile
```

### Adjust on Tablet:
```tsx
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
// 1 col on mobile, 2 on tablet, 3 on desktop
```

### Different Sizes:
```tsx
className="text-2xl md:text-3xl lg:text-4xl"
// Different text sizes on each breakpoint
```

---

## 🎯 Common Customizations

### Update Portfolio Name:
```tsx
// In Hero.tsx
<span className="bg-gradient-to-r...">
  Your Name Here
</span>
```

### Change Section Title:
```tsx
// In any section component
<h2 className="section-title">Your Title</h2>
```

### Update Description:
```tsx
// In About.tsx
<p className="text-lg...">
  Your description here
</p>
```

### Add/Remove Projects:
```typescript
// In Projects.tsx
const projects = [
  {
    title: 'Your Project',
    description: 'Description...',
    github: 'https://github.com/...',
    tags: ['Tech1', 'Tech2'],
    color: 'from-blue-500 to-cyan-500',
  }
];
```

---

## 🔍 Finding & Replacing

### Find All Blue Colors:
Search: `blue-` in your editor
Replace: Any color prefix (red-, green-, etc.)

### Find All Animations:
Search: `animate-` or `whileInView`

### Find All Transitions:
Search: `transition` in components

---

## 🐛 Debugging Tips

### Check Console for Errors:
```bash
# Open DevTools: F12 or Right-click → Inspect
# Go to Console tab
# Look for red error messages
```

### Check Component Rendering:
```tsx
// Add console.log to verify component renders
useEffect(() => {
  console.log('Component mounted');
}, []);
```

### Test Animations:
```
DevTools → Performance tab → Record
Slow down animations to see performance impact
```

### Mobile Testing:
```bash
# Test responsive design
DevTools → Device Toolbar (Ctrl+Shift+M)
Test on different device sizes
```

---

## 📱 Common Breakpoints

```tsx
Mobile:    < 640px   (sm)
Tablet:    640px+    (md)
Desktop:   1024px+   (lg)
Large:     1280px+   (xl)
Extra:     1536px+   (2xl)
```

---

## 🎨 Font & Typography

### Change Font Family:
```tsx
// In layout.tsx, update import
import { Inter } from 'next/font/google';
// Change to: Poppins, Roboto, Playfair, etc.

const font = Poppins({ subsets: ['latin'] });
```

### Change Font Size:
```tsx
className="text-sm"    // 0.875rem
className="text-base"  // 1rem
className="text-lg"    // 1.125rem
className="text-xl"    // 1.25rem
className="text-2xl"   // 1.5rem
className="text-3xl"   // 1.875rem
```

### Change Font Weight:
```tsx
className="font-light"      // 300
className="font-normal"     // 400
className="font-semibold"   // 600
className="font-bold"       // 700
className="font-black"      // 900
```

---

## 🔗 Link Customization

### External Link (New Tab):
```tsx
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Link Text
</a>
```

### Internal Link:
```tsx
<Link href="/path">
  Link Text
</Link>
```

### Email Link:
```tsx
<a href="mailto:your@email.com">
  Email Me
</a>
```

### Phone Link:
```tsx
<a href="tel:+1234567890">
  Call Me
</a>
```

---

## 🌙 Dark Mode Testing

### Toggle Dark Mode:
```
DevTools → hamburger menu → Rendering
Search "Emulate CSS media feature prefers-color-scheme"
Select dark or light
```

### Check Dark Mode Colors:
```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

---

## 🚀 Performance Tips

### Lazy Load Images:
```tsx
<Image
  src="/image.jpg"
  alt="Description"
  loading="lazy"
/>
```

### Memoize Components:
```tsx
export const MyComponent = React.memo(function MyComponent() {
  // Component code
});
```

### Optimize Animations:
```tsx
// Instead of width change
style={{ width: '100px' }} // ❌ Bad

// Use transform
className="transform translate-x-4" // ✅ Good
```

---

## 🎁 Quick Wins

### Add Loading Skeleton:
```tsx
<div className="bg-gray-200 dark:bg-gray-700 animate-pulse h-12 rounded" />
```

### Add Divider:
```tsx
<div className="border-t border-gray-200 dark:border-gray-700 my-8" />
```

### Add Badge:
```tsx
<span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
  Badge
</span>
```

### Add Icon Button:
```tsx
<button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
  <Icon className="h-5 w-5" />
</button>
```

---

## 📚 Useful Resources

### Tailwind CSS:
- Colors: https://tailwindcss.com/docs/customizing-colors
- Utilities: https://tailwindcss.com/docs
- Plugins: https://tailwindcss.com/docs/plugins

### Framer Motion:
- Animations: https://www.framer.com/motion/
- Gestures: https://www.framer.com/motion/gestures/
- Advanced: https://www.framer.com/motion/

### Next.js:
- Docs: https://nextjs.org/docs
- API Routes: https://nextjs.org/docs/api-routes
- Deployment: https://nextjs.org/docs/deployment

### React:
- Hooks: https://react.dev/reference/react
- Components: https://react.dev/learn
- Context: https://react.dev/reference/react/useContext

---

## 💾 File Locations Quick Reference

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          ← Global styles
│   │   ├── layout.tsx           ← Main layout
│   │   └── page.tsx             ← Home page
│   └── components/
│       ├── sections/
│       │   ├── Hero.tsx         ← Hero section
│       │   ├── About.tsx        ← About section
│       │   ├── Skills.tsx       ← Skills section
│       │   ├── Projects.tsx     ← Projects section
│       │   └── Education.tsx    ← Education section
│       └── ui/
│           └── ai-chatbot.tsx   ← AI Chatbot
├── tailwind.config.ts           ← Tailwind config
├── package.json                 ← Dependencies
└── CHATBOT_GUIDE.md             ← Chatbot guide
```

---

## 🎯 Next Steps Checklist

- [ ] Review the visual changes
- [ ] Test the chatbot
- [ ] Customize content
- [ ] Change colors (optional)
- [ ] Update project details
- [ ] Add/remove skills
- [ ] Test on mobile
- [ ] Test dark mode
- [ ] Deploy to production

---

**Tip**: Save this file as a reference while customizing your portfolio!

Created: November 16, 2025
