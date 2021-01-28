import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';

import Home from './Screens/Home';

export default function App() {
  return (
    <>
      <Home />
      <View><StatusBar style="auto" /></View>
    </>  
  );
}

