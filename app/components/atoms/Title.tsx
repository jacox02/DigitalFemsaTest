import { Text } from 'react-native'
import { TitleComponentProps } from '../../core/types'

export default function Title({ text, color, weight, size = 16,  height, style }: TitleComponentProps) {
    return (
      <Text
        style={{
          color: color,
          fontFamily: "OperatorMono",
          fontWeight: weight,
          fontSize: size,
          height: height,
          fontStyle: "normal",
        }}
      >
        {text}
      </Text>
    );
}