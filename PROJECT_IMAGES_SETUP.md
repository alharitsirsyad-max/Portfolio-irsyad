# Project Images Setup Guide

## ✅ What's Been Updated

### Changes Made:
1. **Real Images**: Replaced gradient backgrounds with actual `<img>` tags
2. **Clickable Cards**: Entire card opens project link in new tab
3. **Hover Effects**: 
   - Image zooms (scale 1 → 1.05)
   - Subtle dark overlay (opacity 0 → 0.1)
   - Cursor changes to pointer
4. **Tags**: Moved to overlay on top of image (top-left)

### Features:
- ✅ Full card clickable
- ✅ Button also clickable (with stopPropagation to prevent double-trigger)
- ✅ Smooth image zoom on hover (0.3s ease)
- ✅ Opens in new tab: `https://cemalcemil-six.vercel.app/`
- ✅ Responsive: Desktop 3 cols, Tablet 2 cols, Mobile 1 col

## 📁 How to Add Project Screenshots

### Step 1: Take Screenshots
Take screenshots of your projects:
- **Portfolio Website**: Homepage screenshot
- **Game Labyrinth**: Gameplay screenshot
- **IoT Dashboard**: Dashboard screenshot

### Step 2: Optimize Images
- Recommended size: 800px width (height auto)
- Format: JPG or PNG
- File size: Keep under 500KB for fast loading

### Step 3: Add to Public Folder
Place images in `public/` folder:

```
public/
├── project-portfolio.jpg       ← Portfolio screenshot
├── project-game-labyrinth.jpg  ← Game screenshot
└── project-iot-dashboard.jpg   ← Dashboard screenshot
```

### Step 4: Update Links (Optional)
If you want different links for each project, edit `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Portfolio Website",
    // ... other fields
    link: "https://your-portfolio-link.com"  // ← Change this
  },
  {
    title: "Game Labyrinth",
    // ... other fields
    link: "https://your-game-link.com"  // ← Change this
  },
  // etc...
];
```

## 🎨 Image Specifications

### Dimensions:
- **Width**: 100% of card
- **Height**: 220px (fixed)
- **Aspect Ratio**: Approximately 16:9 or 4:3
- **Object Fit**: cover (crops to fill space)

### Best Practices:
- Use high-quality screenshots
- Ensure important content is centered (won't be cropped)
- Avoid text-heavy screenshots (hard to read when scaled)
- Use consistent style across all project images

## 🔧 Customization

### Change Image Height:
Edit `src/components/Projects.tsx`, line with `h-[220px]`:
```tsx
<div className="w-full h-[240px] overflow-hidden relative">
```

### Change Hover Zoom Amount:
Edit the `group-hover:scale-105` class:
- `scale-105` = 5% zoom (current)
- `scale-110` = 10% zoom (more dramatic)
- `scale-103` = 3% zoom (more subtle)

### Change Overlay Darkness:
Edit `group-hover:opacity-10`:
- `opacity-10` = 10% dark (current)
- `opacity-15` = 15% dark (darker)
- `opacity-5` = 5% dark (lighter)

## 🚀 Testing

1. Add your screenshot images to `public/` folder
2. Refresh the website
3. Scroll to Projects section
4. Hover over cards → image should zoom smoothly
5. Click anywhere on card → should open link in new tab
6. Click "View Project" button → should also open link

## 📝 Notes

- All 3 projects currently link to the same URL
- You can set different URLs for each project in the data array
- Images are loaded from `public/` folder (no import needed)
- Tags are positioned as overlay on top-left of image
- Card maintains same layout structure (image top, content bottom)
