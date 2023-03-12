import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MovementDetails from "../../components/pages/MovementDetails";
import Home from "../../components/pages/Home";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right'
            }}
        >
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="MovementDetails" component={MovementDetails}></Stack.Screen>
        </Stack.Navigator>
    )
}