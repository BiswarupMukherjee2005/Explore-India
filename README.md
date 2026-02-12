# Explore India - Cultural Heritage Platform

A modern, interactive web platform celebrating India's diverse cultural heritage through thoughtful digital storytelling. Built with React, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Interactive India Map**: Click on states to explore their unique cultures
- **Regional Navigation**: Browse destinations organized by six major regions
- **State Detail Pages**: Comprehensive information about each state's culture, cuisine, festivals, and attractions
- **Responsive Design**: Beautiful editorial-style UI that works across all devices
- **Smooth Animations**: Engaging micro-interactions using Framer Motion
- **Data-Driven Architecture**: Easy to update and scale with JSON data files

## 🎨 Design Philosophy

Explore India features a calm, editorial aesthetic inspired by tourism and cultural platforms:

- **Typography**: Elegant serif fonts (Cormorant Garamond, Lora) paired with clean sans-serif (Montserrat)
- **Color Palette**: Inspired by the Indian flag - saffron, white, green, with terracotta and gold accents
- **Layout**: Generous whitespace, large typography, and story-focused composition
- **Animations**: Subtle, meaningful transitions that enhance the storytelling experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3 with Vite
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router DOM 6
- **Animations**: Framer Motion 11
- **Build Tool**: Vite 5
- **Deployment**: Ready for Netlify or Vercel

## 📁 Project Structure

```
explore-india/
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, PageWrapper
│   │   ├── home/            # Hero, QuoteSection
│   │   ├── about/           # AboutSection
│   │   ├── destinations/    # RegionCard
│   │   ├── map/             # IndiaMap
│   │   └── state/           # StateHero, StateCulture
│   ├── pages/               # Home, About, Destinations, Map, StateDetail
│   ├── data/                # JSON files for regions and states
│   ├── routes/              # AppRoutes configuration
│   ├── styles/              # Global CSS
│   └── utils/               # Helper functions
├── public/                  # Static assets
└── index.html
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository or extract the project files

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🗺️ Navigation Structure

- **Home** (`/`) - Hero section, regional preview, and introduction
- **About** (`/about`) - Mission, vision, and project information
- **Destinations** (`/destinations`) - Browse all regions and states
- **Map** (`/map`) - Interactive India map with clickable states
- **State Detail** (`/state/:stateId`) - Individual state pages with culture, cuisine, festivals, and attractions

## 📊 Data Management

All content is stored in JSON files for easy updates:

- `src/data/regions.json` - Information about India's six major regions
- `src/data/states.json` - Comprehensive data for each state including:
  - Culture and heritage
  - Traditional cuisine
  - Festivals and celebrations
  - Must-visit attractions
  - Languages and best time to visit

### Adding New States

1. Add state data to `src/data/states.json`
2. Assign it to the appropriate region
3. Add the state's position coordinates to the map component
4. The state will automatically appear in destinations and map

### Updating Content

Simply edit the JSON files - no code changes required!

## 🎯 Key Components

### Navbar
- Fixed position with smooth reveal animation
- Active link highlighting
- Responsive mobile menu

### Hero Section
- Large typography with gradient text effects
- Animated statistics
- Scroll indicator

### Regional Cards
- Display region information with grouped states
- Clickable state links
- Hover effects and transitions

### Interactive Map
- SVG-based India map
- Clickable state markers with hover effects
- Animated reveals

### State Detail Pages
- Hero section with state tagline
- Cultural information panels
- Cuisine and festival displays
- Attraction listings
- Travel planning information

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  'saffron': '#FF9933',
  'green': '#138808',
  'terracotta': '#E07A5F',
  // ... add more colors
}
```

### Fonts

Update font families in `tailwind.config.js` and import in `index.html`

### Animations

Modify animation timings in `tailwind.config.js` or component-level Framer Motion configs

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Import project from Git
2. Framework preset: Vite
3. Deploy

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Add more states (currently 8 featured states)
- Enhance map interactivity
- Add image galleries
- Include user reviews or stories
- Implement search functionality

## 📄 License

This project is created for educational and cultural purposes, inspired by the Incredible India initiative.

## 🙏 Acknowledgments

- Inspired by India's Ministry of Tourism - Incredible India
- Cultural information sourced from public domain resources
- Design inspired by editorial and tourism platforms

## 📞 Support

For questions or suggestions, please open an issue in the repository.

---

**Made with ❤️ for celebrating India's cultural heritage**
