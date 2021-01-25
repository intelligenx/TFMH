import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SelectButton from './Components/SelectButton.js';

export default function App() {
  return (
    <View style={styles.container}>
       <SelectButton gradcolour='a' title='Something' />
        <SelectButton gradcolour='a' title='Something Else' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'stretch',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
