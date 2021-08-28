import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    fontFamily: {
      sora: ["Sora", "sans-serif"],
      playfair: ["Playfair Display", "serif"], 
    },
    extend: {
      height: {
        navBar: "70px",
      },
    },
  },
  shortcuts: {
    header: "font-playfair",
    "btn-primary":
      "flex font-bold rounded justify-center text-white font-bold items-center h-auto w-full h-2 bg-blue-600 pl-4 pr-4 pt-6 pb-6 hover:(bg-blue-500) transitiona-all duration-500",
    btn: "flex font-bold border border-gray-300 rounded justify-between items-center text-gray-900 font-medium h-auto w-full pl-4 pr-4 pt-3 pb-3 bg-white hover:(bg-gray-100) transitiona-all duration-500",
    divider: "h-px bg-gray-300",
    card: "shadow bg-white rounded-lg",
    "custom-ring": "ring-3 ring-blue-500",
    link: "text-gray-900 hover:(text-blue-600)",
  },
});
