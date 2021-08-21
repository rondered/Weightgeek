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
      btn: "flex rounded justify-center text-white font-bold items-center h-auto w-full h-2 bg-blue-600 pl-10 pr-10 pt-6 pb-6 hover:bg-blue-500",
      divider: "h-px bg-gray-300",
    },
  });