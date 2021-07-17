import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainColor: string;
    buttonTextColor: string;
    fontFamily: string;
    mdFontSize: string;
    smFontSize: string;
  }
}
