import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";

export default defineConfig({
  extract: {
    include: ["src/**/*.{html,jsx,tsx}"],
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
        cardBgColor: "#242424",
        buttonBgColor: "#FEC775",
        buttonHoverBgColor: "#ffe0b3",
        primaryColor: "#FEC775",
        secondaryColor: "#242424",
        borderColor: "#383838",
        textColor: "#FFFFFF",
        dividerColor: "#383838",
      },
    },
  },
  shortcuts: {
    "card-header": "font-basier text-textColor",
    "btn-primary":
      "flex font-bold rounded text-white font-bold items-center h-auto w-full h-2 bg-primaryColor pl-4 pr-4 pt-6 pb-6 transitiona-all duration-500",
    "btn-secondary":
      "flex font-bold rounded text-white font-bold items-center h-auto w-full h-2 bg-secondaryColor pl-4 pr-4 pt-6 pb-6 transitiona-all duration-500",
    btn: "flex font-bold border-0 rounded justify-between items-center text-secondaryColor font-medium h-auto w-full pl-4 pr-4 pt-3 pb-3 bg-buttonBgColor hover:(bg-buttonHoverBgColor) transitiona-all duration-500",
    divider: "h-px bg-dividerColor",
    card: "bg-cardBgColor rounded-lg border border-borderColor",
    "focus-ring": "ring-2 ring-primaryColor",
    link: "text-textColor hover:(text-blue-600)",
    "input-field":
      "p-3 rounded focus:(text-primaryColor focus-ring font-bold) border border-borderColor placeholder-opacity-100 bg-transparent",
  },
});
