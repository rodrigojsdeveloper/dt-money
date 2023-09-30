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
          "3": "rgb(0, 135, 95, 0.06)",
          "4": "rgb(0, 135, 95, 0.16)",
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
        "352": "352px",
        "1119": "1119.8px",
        "1440": "1440px",
      },
      minWidth: {
        "280": "280px",
      },
      height: {
        "50": "50px",
        "54": "54px",
        "137": "137px",
        "212": "212px",
      },
      borderRadius: {
        "def": "4px",
      },
      fontSize: {
        "32": "32px",
      },
      margin: {
        "68": "-68.5px",
      },
    },
  },
  plugins: [],
};
export default config;