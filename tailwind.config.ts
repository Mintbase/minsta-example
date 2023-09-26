import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        gradOne: "var(--gradOne)",
        gradTwo: "var(--gradTwo)",
        cardOne: "var(--cardOne)",
        cardTwo: "var(--cardTwo)",
        linkColor:"var(--linkColor)",
        icon:"var(--icon)"
      },
         gradientColorStopPositions: {
        33: '33%',
      }
    },
  },
  plugins: [],
};
export default config;