import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SelectButton from './Components/SelectButton.js';

export default function App() {
  return (
    <View style={styles.container}>
      <View > 
        <SelectButton gradcolour='a' title='   Something  ' />
      </View>  
      <View>
        <SelectButton gradcolour='a' title='Something Else' />
      </View> 
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
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'stretch',
  },
});
