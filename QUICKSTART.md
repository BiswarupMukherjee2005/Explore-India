# Quick Start Guide - Explore India

## Getting Your Project Running in 5 Minutes

### Step 1: Install Dependencies
```bash
cd explore-india
npm install
```

This will install all required packages:
- React & React DOM
- React Router DOM
- Framer Motion
- Tailwind CSS
- Vite

### Step 2: Start Development Server
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Step 3: Explore the Features

**Home Page** - See the hero section and regional preview
- Click "Explore Destinations" or "View Interactive Map"

**Destinations Page** - Browse all six regions
- Each region card shows its states
- Click any state name to view details

**Interactive Map** - Visual exploration
- Hover over state markers to see names
- Click markers to visit state pages

**State Detail Pages** - Rich cultural content
- Culture & heritage information
- Traditional cuisine with dish tags
- Festival celebrations
- Must-visit attractions
- Travel planning tips

### Step 4: Customize Content

**To add a new state:**

1. Open `src/data/states.json`
2. Add a new state object following this structure:

```json
{
  "id": "state-name",
  "name": "State Name",
  "tagline": "State Tagline",
  "region": "region-id",
  "capital": "Capital City",
  "description": "State description...",
  "culture": "Cultural information...",
  "cuisine": "Dish 1, Dish 2, Dish 3",
  "festivals": ["Festival 1", "Festival 2"],
  "languages": ["Language 1", "Language 2"],
  "attractions": ["Place 1", "Place 2"],
  "bestTime": "Month to Month"
}
```

3. Add the state's map coordinates in `src/components/map/IndiaMap.jsx`:

```javascript
const statePositions = {
  // ... existing states
  'your-state-id': { x: 250, y: 300 },
};
```

**To modify regions:**

Edit `src/data/regions.json` to update region information.

**To change colors:**

Edit `tailwind.config.js` in the colors section.

### Step 5: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Step 6: Deploy

**Option 1: Netlify**
1. Drag and drop the `dist` folder to Netlify
2. Or connect your Git repository for continuous deployment

**Option 2: Vercel**
1. Run `vercel` in your project directory
2. Or import from Git and let Vercel auto-detect Vite

## Project Structure Overview

```
explore-india/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components (routes)
│   ├── data/           # JSON data files
│   ├── routes/         # Routing configuration
│   └── styles/         # Global CSS
├── public/             # Static assets
└── package.json        # Dependencies
```

## Common Customizations

### Change Fonts
1. Edit `tailwind.config.js` font families
2. Update Google Fonts link in `index.html`

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `src/routes/AppRoutes.jsx`
3. Add navigation link in `src/components/layout/Navbar.jsx`

### Modify Animations
- Component-level: Edit Framer Motion props in components
- Global: Update animation utilities in `tailwind.config.js`

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Styles not updating?**
- Stop the dev server (Ctrl+C)
- Delete `node_modules/.vite`
- Restart: `npm run dev`

**Build errors?**
- Check console for specific errors
- Ensure all imports are correct
- Verify JSON files have valid syntax

## Next Steps

1. **Add Images**: Place images in `public/images/` and reference them in components
2. **Expand States**: Add all 28 Indian states with complete information
3. **Add Features**: Consider adding search, filters, or user favorites
4. **Optimize**: Add lazy loading for images and code splitting for routes
5. **Enhance Map**: Create detailed SVG paths for each state

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

## Support

If you encounter issues:
1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure Node.js version is 18+
4. Review the README.md for detailed documentation

---

**Happy Building! 🚀**
