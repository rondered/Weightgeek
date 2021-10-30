import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      pagesDir: [
        { dir: "src/pages", baseRoute: "" },
        // { dir: "src/features/**/pages", baseRoute: "features" },
        // { dir: "src/admin/pages", baseRoute: "admin" },
      ],
      extensions: ["vue"],
    }),
    Layouts({
      layoutsDir: "src/layouts",
      defaultLayout: 'main'
    }),
    AutoImport({
      include: [
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: ["vue"],
    }),
  ],
});
