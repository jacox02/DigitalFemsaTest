import { View, Text, Touchable, TouchableOpacity, GestureResponderEvent } from 'react-native'
import { ButtonProps } from '../../core/types/ButtonProps.type'


export default function Button(props: ButtonProps) {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#334FFA",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: props.width,
          height: 50,
        }}
        onPress={props.onPress}
        accessibilityLabel={props.title}
        testID={`test-${props.title}-button`}
      >
        <Text
          style={{
            fontFamily: "OperatorMono",
            fontStyle: "normal",
            fontWeight: "800",
            fontSize: 12,
            lineHeight: 16,
            color: "#FFFFFF",
          }}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
    );
}