import { defineConfig } from "windicss/helpers";

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
        modal: "600px"
      },
      zIndex: {
        modal: '10',
      },
      colors: {
        bgColor: "#222222",
        cardBgColor: "#242424",
        buttonBgColor: "#FEC775",
        primaryColor: "#FEC775",
        secondaryColor: "#242424",
        borderColor: "#383838",
        textColor: "#FFFFFF",
        dividerColor: "#383838",
      },
    },
  },
  shortcuts: {
    "card-header": `font-basier text-textColor`,
    btn: `flex filter rounded justify-between focus:(outline-none)
    items-center h-auto w-full pl-4 pr-4 pt-3 pb-3
    transition-all duration-500 hover:(brightness-125)`,
    "btn-primary": `btn bg-primaryColor text-bgColor font-bold`,
    "btn-secondary": `btn border border-borderColor
     justify-between font-medium bg-secondaryColor`,
    divider: "h-px bg-dividerColor",
    card: "bg-cardBgColor rounded-lg border border-borderColor",
    "focus-ring": "ring-4 ring-primaryColor",
    link: "text-textColor hover:(text-blue-600)",
    "input-field": `p-3 rounded 
        focus:(focus-ring font-bold) border border-borderColor
        placeholder-opacity-25 placeholder-textColor bg-transparent`,
  },
});
