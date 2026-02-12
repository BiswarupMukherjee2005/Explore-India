/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
        'body': ['Lora', 'serif'],
      },
      colors: {
        'saffron': '#FF9933',
        'white': '#FFFFFF',
        'green': '#138808',
        'navy': '#000080',
        'blue-700': '#1d4ed8',
        'blue-800': '#1e40af',
        'terracotta': '#E07A5F',
        'ochre': '#D4A574',
        'cream': '#f5f5f0',
        'charcoal': '#2d3e3c',
        'gold': '#C9A961',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}