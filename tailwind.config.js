/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#003459",
        white: "#FDFDFD",
        grey: "#667479",
        primarybg: "#FCEED5",
      },
    },
  },
  plugins: [],
};
