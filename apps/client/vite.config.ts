import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import WindiCSS from "vite-plugin-windicss";
import Icons from "unplugin-icons/vite";
import ViteFonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  plugins: [
    vue(),
    WindiCSS(),
    Icons({ compiler: "vue3" }),
    Pages({
      pagesDir: [
        { dir: "src/pages", baseRoute: "" },
        { dir: "src/features/Authentication/pages", baseRoute: "" },
      ],
      extensions: ["vue"],
    }),
    Layouts({
      layoutsDir: "src/layouts",
      defaultLayout: "authorized",
    }),
    AutoImport({
      include: [
        /\.vue$/,
        /\.ts$/,
        /\.vue\?vue/, // .vue
      ],
      imports: ["vue"],
    }),
  ],
});
