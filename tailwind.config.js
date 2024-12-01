/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['"Crimson Pro"', 'serif'], // Reference the CSS variable
      },
      boxShadow: {
        'pink': '0px 10px 20px rgba(255, 128, 153, 0.5)', // pink shadow only at the bottom
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}