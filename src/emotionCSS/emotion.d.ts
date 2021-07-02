import "@emotion/react";
import { ThemeType } from "styles/theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}

declare module "react" {
  export interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    css?: any;
  }
}
