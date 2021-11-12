import { defineConfig } from "windicss/helpers";
import colors from 'windicss/colors';

export default defineConfig({
  extract: {
    include: ["src/**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
  plugins: [require("windicss/plugin/forms")],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      boxShadow: {
        indigoGlow: `0px 10px 20px ${colors.indigo['400']}`
      },
      colors: {
        bgColor: "#F3F5F5",
        primaryColor: "#4461F2",
        inputBgColor: "#EAF0F7"
      }
    },
  },
});
