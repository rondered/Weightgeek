import {defineConfig} from "windicss/helpers";

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
        mdNavBar: "350px",
        modal: "600px",
      },
      height: {
        navBar: "70px",
      },
      zIndex: {
        modal: "10",
      },
      colors: {
        bgColor: "#222222",
        cardBgColor: "#242424",
        buttonBgColor: "#FEC775",
        primaryColor: "#FEC775",
        hoverPrimaryColor: "#ffd08a",
        secondaryColor: "#222222",
        hoverSecondaryColor: "#3b3b3b",
        borderColor: "#383838",
        textColor: "#FFFFFF",
        fadedTextColor: "#383838",
        dividerColor: "#383838",
      },
    },
  },
  shortcuts: {
    "modal-header": "font-bold text-xl",
    "table-header": "font-bold text-lg text-secondaryColor",
    btn: `flex filter rounded justify-between focus:(outline-none)
    items-center h-auto w-full pl-4 pr-4 pt-3 pb-3
    transition-all duration-500`,
    "btn-primary": `btn bg-primaryColor hover:(bg-hoverPrimaryColor) text-bgColor font-bold`,
    "btn-secondary": `btn bg-secondaryColor border hover:(bg-hoverSecondaryColor) border-borderColor
     justify-between font-medium bg-secondaryColor`,
    divider: "h-px bg-dividerColor",
    card: "bg-cardBgColor rounded-lg border border-borderColor",
    link: "text-textColor hover:(text-purple-600)",
    "input-field": `p-3 rounded appearance-none font-medium outline-none
        focus:(border-2 border-primaryColor) border border-borderColor
        placeholder-opacity-25 placeholder-textColor bg-transparent`,
  },
});
