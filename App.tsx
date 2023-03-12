import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import React, { useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';


import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './app/navigation/Stacks/Stack';
import { store } from './app/redux/stores/movements.store';
import { Provider } from 'react-redux'
import {
  SafeAreaView,
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

// SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    'Avenir': require('./assets/fonts/Avenir-Regular.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
    console.log(fontsLoaded);

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


