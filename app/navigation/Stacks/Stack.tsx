import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MovementDetails from "../../components/pages/MovementDetails";
import Home from "../../components/pages/Home";

const { Screen, Navigator } = createStackNavigator();

export default function Navigation() {
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Home" component={Home}></Screen>
            <Screen name="MovementDetails" component={MovementDetails}></Screen>
        </Navigator>
    )
}