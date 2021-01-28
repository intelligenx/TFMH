import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';

import HomeStack from './Routes/HomeStack';

export default function App() {
  return (
    <>
      <HomeStack />
      <View><StatusBar style="auto" /></View>
    </>  
  );
}

