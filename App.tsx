
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BetslipView, Casino, Home, Jackpot, Profile, SingleGame } from './screens';
import { Colors } from './constants/colors';
import { useFonts } from 'expo-font';
import * as SplashScreen  from "expo-splash-screen";
import { useCallback } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomNav from './navigation/bottomNav';
import { RootStackParamList } from './models/models';
 
export default function App() {

  const Stack = createNativeStackNavigator<RootStackParamList>()

  const [fontsLoaded] = useFonts({
    light: require('./assets/fonts/Mulish-Light.ttf'),
    medium: require('./assets/fonts/Mulish-Medium.ttf'),
    semibold: require('./assets/fonts/Mulish-SemiBold.ttf'),
    bold: require('./assets/fonts/Mulish-Bold.ttf'),
  });

  const onLayoutRootView = useCallback( async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  },[fontsLoaded]);

  if(!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={ store }>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='BottomNav' component={ BottomNav } options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name='Home' component={ Home } options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name='Jackpot' component={ Jackpot } options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name='BetslipView' component={ BetslipView } options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name='Profile' component={ Profile } options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name='SingleGame' component={ SingleGame } options={{ headerShown: true }}></Stack.Screen>
          <Stack.Screen name='Casino' component={ Casino } options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    color: '#fff',
  },
});
