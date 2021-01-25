import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SelectButton from './Components/SelectButton.js';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'flex-start'}}> 
        <SelectButton gradcolour='a' title='   Something  ' />
      </View>
      <View style={{alignSelf: 'flex-end'}}>
        <SelectButton gradcolour='a' title='   Something  ' />
      </View >
      <View style={{alignSelf: 'flex-start'}}>
        <SelectButton gradcolour='a' title='   Something  ' />
      </View>
      <View style={{alignSelf: 'flex-end'}}>
        <SelectButton gradcolour='a' title='   Something  ' />
      </View>
      <View style={{alignSelf: 'flex-start'}}>
        <SelectButton gradcolour='a' title='   Something  ' />
      </View>
      <View style={{alignSelf: 'flex-end'}}>
        <SelectButton gradcolour='a' title='   Something  ' />
      </View> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent:  'center',
  },
});
