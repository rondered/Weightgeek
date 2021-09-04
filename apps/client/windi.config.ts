import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";

export default defineConfig({
  plugins: [require("@windicss/plugin-icons")],
  extract: {
    include: ["src/**/*.{html,vue,jsx,tsx,svelte}"],
  },
  theme: {
    fontFamily: {
      basier: ["Basier Circle", "Segoe UI", "Roboto"],
    },
    extend: {
      height: {
        navBar: "70px",
      },
      colors: {
        primary: "#3758F9",
      },
    },
  },
  shortcuts: {
    header: "font-basier",
    "btn-primary":
      "flex font-bold rounded justify-center text-white font-bold items-center h-auto w-full h-2 bg-primary pl-4 pr-4 pt-6 pb-6 hover:(bg-blue-700) transitiona-all duration-500",
    btn: "flex font-bold border border-gray-300 rounded justify-between items-center text-gray-900 font-medium h-auto w-full pl-4 pr-4 pt-3 pb-3 bg-white hover:(bg-gray-100) transitiona-all duration-500",
    divider: "h-px bg-gray-300",
    card: "bg-white rounded-lg p-3 md:(p-5)",
    "custom-ring": "ring-3 ring-primary",
    link: "text-gray-900 hover:(text-blue-600)",
    "input-field":
      "p-3 border border-gray-300 rounded focus:(text-gray-900 custom-ring)",
    "gradient-header":
      "font-bold bg-clip-text text-transparent bg-gradient-2 w-min",
  },
});
