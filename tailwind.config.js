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
        footer: "url('/assets/footer-bg.svg')",
        "custom-bg":
          "linear-gradient(180deg, #1A1B25 0%, rgba(26, 27, 37, 0) 106.6%)",
        "custom-bg-one":
          "linear-gradient(180deg, rgba(248, 250, 251, 0) 0%, #F8FAFB 100%)",
        "custom-two":
          "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
      },
      boxShadow: {
        custom: " 0px 1px 2px 0px #0D0D120A",
        "custom-one": "0px 1px 3px 0px #0D0D120D",
      },
      fontFamily: {
        inter: ["Inter Display V", "sans-serif"],
      },
      colors: {
        heading: "#0D0D12",
        secondaryText: "#666D80",
        paraText: "#36394A",
        btn: "#5F57FF",
        borderColor: "#DFE1E7",
        footerLink: "#F6F8FA",
        dropDownFilterText: "#818898",
        whitish: "#F8FAFB",
        borderColor2: "#272835",
      },
    },
  },
  plugins: [],
};
