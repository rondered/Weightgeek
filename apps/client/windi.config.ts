import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";

export default defineConfig({
  extract: {
    include: ["src/**/*.{html,vue,jsx,tsx,svelte}"],
  },
  theme: {
    extend: {
      fontFamily: {
        basier: ["Basier Circle", "Segoe UI", "Roboto"],
      },
      width: {
        navBar: "350px",
      },
      colors: {
        bgColor: "#222222",
        cardBgColor: "#FFFFFF",
        buttonBgColor: "#FEC775",
        buttonHoverBgColor: "#f4f4f5",
        primaryColor: "FEC775",
        secondaryColor: "#242424",
        borderColor: "#383838",
        textColor: "#FFFFFF",
      },
    },
  },
  shortcuts: {
    header: "font-basier text-primaryColor",
    "btn-primary":
      "flex font-bold rounded text-white font-bold items-center h-auto w-full h-2 bg-primaryColor pl-4 pr-4 pt-6 pb-6 transitiona-all duration-500",
    "btn-secondary":
      "flex font-bold rounded text-white font-bold items-center h-auto w-full h-2 bg-secondaryColor pl-4 pr-4 pt-6 pb-6 transitiona-all duration-500 border-borderColor border-2",
    btn: "flex font-bold border border-gray-300 rounded justify-between items-center text-textColor font-medium h-auto w-full pl-4 pr-4 pt-3 pb-3 bg-buttonBgColor hover:(bg-buttonHoverBgColor) transitiona-all duration-500",
    divider: "h-px bg-gray-300",
    card: "bg-cardBgColor rounded-lg shadow-lg",
    "custom-ring": "ring-3 ring-secondaryColor",
    link: "text-textColor hover:(text-blue-600)",
    "input-field":
      "p-3 border border-gray-300 rounded focus:(text-textColor custom-ring) placeholder-opacity-100",
  },
});
