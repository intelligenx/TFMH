import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';

import HomeStack from './Routes/HomeStack';
import HomeDrawer from './Routes/HomeDrawer';

export default function App() {
  return (
    <>
     
      <HomeDrawer />
      <View><StatusBar style="auto" /></View>
    </>  
  );
}

