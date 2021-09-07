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
        navBar: "60px",
      },
    },
  },
  shortcuts: {
    header: "font-basier text-purple-600",
    "btn-primary":
      "flex font-bold rounded justify-center text-white font-bold items-center h-auto w-full h-2 bg-purple-700 pl-4 pr-4 pt-6 pb-6 hover:(bg-purple-600) transitiona-all duration-500",
    btn: "flex font-bold border border-gray-300 rounded justify-between items-center text-gray-900 font-medium h-auto w-full pl-4 pr-4 pt-3 pb-3 bg-white hover:(bg-gray-100) transitiona-all duration-500",
    divider: "h-px bg-gray-300",
    card: "bg-white rounded-lg shadow-lg",
    "custom-ring": "ring-3 ring-purple-600",
    link: "text-gray-900 hover:(text-blue-600)",
    "input-field":
      "p-3 border border-gray-300 rounded focus:(text-gray-900 custom-ring)",
  },
});
