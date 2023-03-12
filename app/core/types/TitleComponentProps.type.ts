import { StyleProp, TextStyle } from "react-native/types";

export type TitleComponentProps = {
  text: string | undefined;
  color?: string | undefined;
  height?: number;
  weight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | undefined;
  size?: number | undefined;
  children?: React.ReactNode;
  style?: StyleProp<TextStyle> | undefined;
};
