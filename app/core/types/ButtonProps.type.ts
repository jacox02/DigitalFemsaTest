import { GestureResponderEvent } from "react-native/types";

export type ButtonProps = {
    title: string;
    width?: string;
    onPress?: (event: GestureResponderEvent) => void;
}
