import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";

export default defineConfig({
  plugins: [require("@windicss/plugin-icons")],
  extract: {
    include: ["src/**/*.{html,vue,jsx,tsx,svelte}"],
  },
  theme: {
    extend: {
      fontFamily: {
        basier: ["Basier Circle", "Segoe UI", "Roboto"],
      },
      width: {
        navBar: "250px",
      },
      colors: {
        bgColor: "#f4f4f5",
        cardBgColor: "#FFFFFF",
        buttonBgColor: "#FFFFFF",
        buttonHoverBgColor: "#f4f4f5",
        primaryColor: "#4f46e5",
        secondaryColor: "#14b8a6",
        textColor: "#3B3B3B",
      },
    },
  },
  shortcuts: {
    header: "font-basier text-primaryColor",
    "btn-primary":
      "flex font-bold rounded justify-center text-white font-bold items-center h-auto w-full h-2 bg-primaryColor pl-4 pr-4 pt-6 pb-6 transitiona-all duration-500",
    btn: "flex font-bold border border-gray-300 rounded justify-between items-center text-textColor font-medium h-auto w-full pl-4 pr-4 pt-3 pb-3 bg-buttonBgColor hover:(bg-buttonHoverBgColor) transitiona-all duration-500",
    divider: "h-px bg-gray-300",
    card: "bg-cardBgColor rounded-lg shadow-lg",
    "custom-ring": "ring-3 ring-secondaryColor",
    link: "text-textColor hover:(text-blue-600)",
    "input-field":
      "p-3 border border-gray-300 rounded focus:(text-textColor custom-ring) placeholder-opacity-100",
  },
});
