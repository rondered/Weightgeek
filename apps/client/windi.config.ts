import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import plugin from "windicss/plugin";

export default defineConfig({
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
  },
  shortcuts: {
    "btn-primary":
      "flex rounded justify-center text-white font-bold items-center h-auto w-full h-2 bg-blue-600 pl-4 pr-4 pt-6 pb-6 hover:(bg-blue-500) transitiona-all duration-500",
    btn: "flex rounded justify-between items-center text-gray-900 font-medium h-auto w-full pl-4 pr-4 pt-3 pb-3 bg-gray-100 hover:(bg-blue-100) transitiona-all duration-500",
    divider: "h-px bg-gray-300",
  },
});
