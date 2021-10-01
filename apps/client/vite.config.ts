import path from "path";
import {defineConfig} from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import Icons from "unplugin-icons/vite";
import macrosPlugin from "vite-plugin-babel-macros";
import WindiCSS from "vite-plugin-windicss";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{find: "@", replacement: path.resolve(__dirname, "src")}],
  },
  plugins: [
    reactRefresh(),
    macrosPlugin(),
    WindiCSS(),
    Icons({
      compiler: "jsx",
      jsx: "react",
    }),
    AutoImport({
      dts: "./src/auto-imports.d.ts",
      resolvers: [IconsResolver({componentPrefix: "Icon"})],
    }),
  ],
});
