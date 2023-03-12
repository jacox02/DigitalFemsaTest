import { Text, View, StyleSheet } from "react-native"
import Title from "../atoms/Title"

export default function WelcomeMessage() {
    return (
        <View style={{
            width: '100%'
        }}>
            <Title text="Bienvenido de vuelta!" size={20} weight="800">
            </Title>
            <Title text="Ruben Rodriguez" size={16} weight="400">
            </Title>
        </View>
    )
}
