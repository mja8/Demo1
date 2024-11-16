module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#000435', // Custom dark navy blue color        
        'beige': '#f5f5dc',     // Custom beige color
        violet: {
          700: '#6b46c1',       // Extend violet-700 if needed
        },
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
