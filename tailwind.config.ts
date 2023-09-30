import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": {
          "1": "#00875F",
          "2": "#015F43",
        },
        grey: {
          "1": "#121214",
          "2": "#202024",
          "3": "#29292E",
          "4": "#323238",
          "5": "#7C7C8A",
          "6": "#8D8D99",
          "7": "#C4C4CC",
          "8": "#E1E1E6",
        },
        white: "#FFFFFF",
        red: "#F75A68",
      },
      maxWidth: {
        "147": "147px",
        "152": "152px",
      },
      height: {
        "50": "50px",
        "54": "54px",
      },
      borderRadius: {
        "def": "4px",
      },
    },
  },
  plugins: [],
};
export default config;
