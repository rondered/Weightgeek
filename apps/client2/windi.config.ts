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
      }
    },
  },
});
