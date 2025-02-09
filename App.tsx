import React from 'react';
import { Dashboard } from './src/screens/dashboard/Dashboard';
import { ThemeProvider } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import theme from './src/global/styles/theme'
import AppLoading from 'expo-app-loading';
import { Register } from './src/screens/Register';
import { CategorySelect } from './src/screens/CategorySelect';
import { AppRoutes } from './src/routes/app.routes';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium
  })

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <>
    <ThemeProvider theme={theme} >
      <NavigationContainer>
        <GestureHandlerRootView>
        <AppRoutes />
        </GestureHandlerRootView>
      </NavigationContainer>
    </ThemeProvider>
    </>
  );
}


