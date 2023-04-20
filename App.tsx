import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import React, { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./app/navigation/Stacks/Stack";
import { store } from "./app/redux/stores/movements.store";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, error] = useFonts({
    OperatorMono: require("./assets/fonts/OperatorMonoLig-Book.otf"),
  });

  useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    fontsLoaded === true && SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation></Navigation>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}


