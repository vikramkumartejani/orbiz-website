/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('/assets/footer-bg.svg')",
        'custom-bg': "linear-gradient(180deg, #1A1B25 0%, rgba(26, 27, 37, 0) 106.6%)"
      },
      boxShadow: {
        'custom': ' 0px 1px 2px 0px #0D0D120A',
        'custom-one': '0px 1px 3px 0px #0D0D120D',
      },
      fontFamily: {
        'inter': ['Inter Display V', 'sans-serif']
      }
    },
  },
  plugins: [],
};
