import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import WelcomeMessage from './app/components/molecules/WelcomeMessage';
import PointsContainer from './app/components/molecules/PointsContainer';
import MovementsContainer from './app/components/organisms/MovementsContainer';
import Button from './app/components/atoms/Button';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './app/navigation/Stacks/Stack';
import { store } from './app/redux/stores/movements.store';
// SplashScreen.preventAutoHideAsync();
import { Provider } from 'react-redux'

export default function App() {
  const [fontsLoaded] = useFonts({
    // 'Avenir': require('./assets/fonts/Avenir-Regular.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    console.log('Not loaded');
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


