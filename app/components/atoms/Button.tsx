import { View, Text, Touchable, TouchableOpacity } from 'react-native'
export default function Button({ title, onPress }: any) {
    return (
        <TouchableOpacity style={{
            backgroundColor: '#334FFA',
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: 160,
            height: 50
        }}
            onPress={onPress}
        >
            <Text style={{
                fontFamily: 'Avenir',
                fontStyle: 'normal',
                fontWeight: '800',
                fontSize: 12,
                lineHeight: 16,
                color: '#FFFFFF',
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}