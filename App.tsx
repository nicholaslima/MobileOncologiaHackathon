import React from 'react';
import  { useFonts } from 'expo-font';
import {
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';


import Routes from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
});
  

  if (!fontsLoaded) {
    return null;
  }
  
  
  
  return (
    <Routes />
  );
}